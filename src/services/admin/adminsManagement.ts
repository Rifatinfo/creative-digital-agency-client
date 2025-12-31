/* eslint-disable @typescript-eslint/no-explicit-any */

import { serverFetch } from "@/lib/serverFetch";
import { zodValidator } from "@/lib/zodValidator";
import { createAdminZodSchema, updateAdminZodSchema } from "@/zod/admin.validation";

export async function createAdmin(_prevState: any, formData: FormData) {
    // Build validation payload
    const validationPayload = {
        name: formData.get("name") as string,
        email: formData.get("email") as string,
        password: formData.get("password") as string,
        profilePhoto: formData.get("file") as File,
    };

    const validatedPayload = zodValidator(validationPayload, createAdminZodSchema);

    if (!validatedPayload.success && validatedPayload.errors) {
        return {
            success: validatedPayload.success,
            message: "Validation failed",
            formData: validationPayload,
            errors: validatedPayload.errors,
        }
    }

    if (!validatedPayload.data) {
        return {
            success: false,
            message: "Validation failed",
            formData: validationPayload,
        }
    }
    const backendPayload = {
        name: validatedPayload.data.name,
        email: validatedPayload.data.email,
        password: validatedPayload.data.password,
    };
    const newFormData = new FormData()
    newFormData.append("data", JSON.stringify(backendPayload))
    newFormData.append("file", formData.get("file") as Blob)
    try {

        const response = await fetch(
            "http://localhost:5000/api/v1/admin/create-admin",
            {
                method: "POST",
                body: newFormData, // FormData (do NOT set Content-Type)
            }
        );

        const result = await response.json();
        console.log(result);

        return result;
    } catch (error: any) {
        console.error("Create admin error:", error);
        return {
            success: false,
            message: process.env.NODE_ENV === 'development' ? error.message : 'Failed to create admin',
            formData: validationPayload
        };
    }
}

export async function getAdmins(queryString?: string) {
    try {
        const response = await fetch(
            `http://localhost:5000/api/v1/admin${queryString ? `?${queryString}` : ""}`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        const result = await response.json();
        console.log(result);
        
        return result;
    } catch (error: any) {
        console.log(error);
        return {
            success: false,
            message: `${process.env.NODE_ENV === 'development' ? error.message : 'Something went wrong'}`
        };
    }
}

export async function getAdminById(id: string) {
    try {
        const response = await serverFetch.get(`/admin/${id}`)
        const result = await response.json();
        return result;
    } catch (error: any) {
        console.log(error);
        return {
            success: false,
            message: `${process.env.NODE_ENV === 'development' ? error.message : 'Something went wrong'}`
        };
    }
}


export async function updateAdmin(
  id: string,
  _prevState: any,
  formData: FormData
) {
  const rawPayload = {
    name: formData.get("name"),
    password: formData.get("password"),
  };

  const parsed = updateAdminZodSchema.safeParse(rawPayload);

  if (!parsed.success) {
    return {
      success: false,
      message: "Validation failed",
      errors: parsed.error.flatten().fieldErrors,
    };
  }

  const apiFormData = new FormData();

  // 🔥 BACKEND EXPECTS "data"
  apiFormData.append("data", JSON.stringify(parsed.data));

  if (formData.get("file")) {
    apiFormData.append("file", formData.get("file") as File);
  }

  try {
    const response = await fetch(
      `http://localhost:5000/api/v1/admin/${id}`,
      {
        method: "PATCH",
        body: apiFormData,
        credentials: "include", 
      }
    );
 
  
    if (!response.ok) {
      const text = await response.text();
      console.error(text);
      return { success: false, message: "Unauthorized or server error" };
    }

    return await response.json();
  } catch (error: any) {
    return {
      success: false,
      message: error.message,
    };
  }
}



export async function deleteAdmin(id: string) {
    try {
        const response = await serverFetch.delete(`/admin/${id}`)
        const result = await response.json();
        return result;
    } catch (error: any) {
        console.log(error);
        return {
            success: false,
            message: `${process.env.NODE_ENV === 'development' ? error.message : 'Something went wrong'}`
        };
    }
}