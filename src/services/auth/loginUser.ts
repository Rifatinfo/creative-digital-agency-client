"use server";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { parse } from "cookie";
// import { serverFetch } from "@/lib/serverFetch";
// import { zodValidator } from "@/lib/zodValidator";
import { loginValidationZodSchema } from "@/zod/auth.validation";
// import { setCookie } from "./tokenHandlers";
// import jwt, { JwtPayload } from "jsonwebtoken";
import jwt, { JwtPayload } from 'jsonwebtoken';
import { cookies } from "next/headers";
import { redirect } from "next/navigation";


export const loginUser = async (_currentState: any, formData: any): Promise<any> => {
    try {
        // const redirectTo = formData.get('redirect') || null;
        let accessTokenObject: null | any = null;
        let refreshTokenObject: null | any = null;
        const loginData = {
            email: formData.get('email'),
            password: formData.get('password')
        }
        const validatedFields = loginValidationZodSchema.safeParse(loginData);
        if (!validatedFields.success) {
            return {
                success: false,
                errors: validatedFields.error.issues.map(issue => {
                    return {
                        field: issue.path[0],
                        message: issue.message
                    }
                })
            }
        }
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/auth/login`, {
            method: "POST",
            body: JSON.stringify(loginData),
            headers: {
                "Content-Type": "application/json"
            },
        });

        const result = await res.json();

        const setCookieHeaders = res.headers.getSetCookie();

        if (setCookieHeaders && setCookieHeaders.length > 0) {
            setCookieHeaders.forEach((cookie: string) => {
                const parsedCookie = parse(cookie);

                if (parsedCookie['accessToken']) {
                    accessTokenObject = parsedCookie;
                }
                if (parsedCookie['refreshToken']) {
                    refreshTokenObject = parsedCookie;
                }
            });
        }
        if (!accessTokenObject) {
            throw new Error("Tokens not found in cookies")
        }
        if (!refreshTokenObject) {
            throw new Error("Tokens not found in cookies")
        }

        const cookieStore = await cookies();

        cookieStore.set("accessToken", accessTokenObject.accessToken, {
            secure: true,
            httpOnly: true,
            maxAge: parseInt(accessTokenObject['Max-Age']) || 1000 * 60 * 60,
            path: accessTokenObject.Path || "/",
        });
        cookieStore.set("refreshToken", refreshTokenObject.refreshToken, {
            secure: true,
            httpOnly: true,
            maxAge: parseInt(accessTokenObject['Max-Age']) || 1000 * 60 * 60 * 24 * 90,
            path: refreshTokenObject.Path || "/",
        });
        // type UserRole = "ADMIN" | "CLIENT";


        // const verifiedToken: JwtPayload | string = jwt.verify(accessTokenObject.accessToken, process.env.JWT_SECRET as string);

        // if (typeof verifiedToken === "string") {
        //     throw new Error("Invalid token");
        // }
        

        // const userRole: any = verifiedToken.role;
        // const getDefaultDashboardRoute = (role: UserRole): string => {
        //     if (role === "ADMIN") {
        //         return "/admin/dashboard";
        //     }
        //     if (role === "CLIENT") {
        //         return "/dashboard";
        //     }
        //     return "/";
        // }
        // const redirectPath = redirectTo ? redirectTo.toString() : getDefaultDashboardRoute(userRole);
        // redirect(redirectPath);
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