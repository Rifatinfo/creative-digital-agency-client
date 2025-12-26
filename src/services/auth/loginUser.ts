"use server";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { parse } from "cookie";
// import { serverFetch } from "@/lib/serverFetch";
// import { zodValidator } from "@/lib/zodValidator";
import { loginValidationZodSchema } from "@/zod/auth.validation";
// import { setCookie } from "./tokenHandlers";
// import jwt, { JwtPayload } from "jsonwebtoken";
import { cookies } from "next/headers";

export const loginUser = async (_currentState: any, formData: any): Promise<any> => {
    try {
        let accessTokenObject : null | any = null;
        let refreshTokenObject : null | any = null;
        const loginData = {
            email : formData.get('email'),
            password : formData.get('password')
        }
        const validatedFields = loginValidationZodSchema.safeParse(loginData);
        if(!validatedFields.success){
           return {
            success : false,
            errors : validatedFields.error.issues.map(issue => {
                return {
                    field : issue.path[0],
                    message : issue.message
                }
            })
           }
        }
        const res = await fetch("http://localhost:5000/api/v1/auth/login", {
            method : "POST",
            body : JSON.stringify(loginData),
            headers : {
                "Content-Type" : "application/json"
            },
        });

        const result = await res.json();

        const setCookieHeaders = res.headers.getSetCookie();

        if(setCookieHeaders && setCookieHeaders.length > 0){
           setCookieHeaders.forEach((cookie : string) => {
            const parsedCookie = parse(cookie);

            if(parsedCookie['accessToken']){
              accessTokenObject = parsedCookie;
            }
            if(parsedCookie['refreshToken']){
              refreshTokenObject = parsedCookie;
            }
           });
        }
        if(!accessTokenObject){
           throw new Error("Tokens not found in cookies")
        }
        if(!refreshTokenObject){
           throw new Error("Tokens not found in cookies")
        }
        
        const cookieStore = await cookies();

        cookieStore.set("accessToken", accessTokenObject.accessToken, {
            secure : true,
            httpOnly : true,
            maxAge : parseInt(accessTokenObject.MaxAge),
            path : accessTokenObject.Path || "/",
        });
        cookieStore.set("refreshToken", refreshTokenObject.refreshToken, {
            secure : true,
            httpOnly : true,
            maxAge : parseInt(refreshTokenObject.MaxAge),
            path : refreshTokenObject.Path || "/",
        });

        return result;

    } catch (error: any) {
        // Re-throw NEXT_REDIRECT errors so Next.js can handle them
        if (error?.digest?.startsWith('NEXT_REDIRECT')) {
            throw error;
        }
        console.log(error);
        return { success: false, message: `${process.env.NODE_ENV === 'development' ? error.message : "Login Failed. You might have entered incorrect email or password."}` };
    }
}