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
        const response = await serverFetch.get(`/admin${queryString ? `?${queryString}` : ""}`);
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

export async function updateAdmin(id: string, _prevState: any, formData: FormData) {
    const validationPayload: any = {
        name: formData.get("name") as string,
        password: formData.get("password") as string,
        profilePhoto: formData.get("file") as File,
    };


    const validation = zodValidator(validationPayload, updateAdminZodSchema);
    if (!validation.success && validation.errors) {
        return {
            success: validation.success,
            message: "Validation failed",
            formData: validationPayload,
            errors: validation.errors,
        };
    }
    if (!validation.data) {
        return {
            success: false,
            message: "Validation failed",
            formData: validationPayload,
        };
    }

    try {
        const response = await serverFetch.patch(`/admin/${id}`, {
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(validation.data),
        });

        const result = await response.json();
        return result;
    } catch (error: any) {
        console.error("Update admin error:", error);
        return {
            success: false,
            message: process.env.NODE_ENV === 'development' ? error.message : 'Failed to update admin',
            formData: validationPayload
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