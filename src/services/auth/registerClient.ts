/* eslint-disable @typescript-eslint/no-explicit-any */

import { serverFetch } from "@/lib/serverFetch";
import { zodValidator } from "@/lib/zodValidator";
import { registerClientValidationZodSchema } from "@/zod/auth.validation";
import { loginUser } from "./loginUser";

export const registerClient = async (_currentState: any, formData: any): Promise<any> => {
   try{
      const payload = {
         name : formData.get('name'),
         address : formData.get('address'),
         email : formData.get('email'),
         password : formData.get('password'),
         phone : formData.get('phone'),
         confirmPassword : formData.get('confirmPassword')
      }

      if(zodValidator(payload, registerClientValidationZodSchema).success === false){
         return zodValidator(payload, registerClientValidationZodSchema);
      }
      const validatedPayload : any = zodValidator(payload, registerClientValidationZodSchema).data;
      const registerData = {
        password : validatedPayload.password,
        name : validatedPayload.name,
        email : validatedPayload.email,
        address : validatedPayload.address,
        phone : validatedPayload.address,
      }

      const newFormData = new FormData();
      newFormData.append("data", JSON.stringify(registerData));

      if(formData.get("file")){
        newFormData.append("file", formData.get("file") as Blob);
      }

      const res = await serverFetch.post("/user/create-customer", {
        body : newFormData,
      });
      const result = await res.json();

      if(result.success){
        await loginUser(_currentState, formData);
      }

    return result;

   }catch(error : any){
      if(error?.digest?.startWith('NEXT_REDIRECT')){
         throw error;
      }
      console.log(error);
      return {success : false, message : `${process.env.NODE_ENV === 'development' ? error.message : "Registration Failed. Please try again"}`};
   }
}