/* eslint-disable @typescript-eslint/no-explicit-any */

import { serverFetch } from "@/lib/serverFetch";
import { zodValidator } from "@/lib/zodValidator";
import { createCustomerZodSchema } from "@/zod/client.validation";

export async function createCustomer(_prevState: any, formData: FormData) {
    // Build validation payload
    const validationPayload = {
        name: formData.get("name") as string,
        email: formData.get("email") as string,
        phone: formData.get("phone") as string,
        address: formData.get("address") as string,
        password: formData.get("password") as string,
        profilePhoto: formData.get("file") as File,
    };

    const validatedPayload = zodValidator(validationPayload, createCustomerZodSchema);

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
        name: formData.get("name") as string,
        email: formData.get("email") as string,
        phone: formData.get("phone") as string,
        address: formData.get("address") as string,
        password: formData.get("password") as string,
        profilePhoto: formData.get("file") as File,
    };
    const newFormData = new FormData()
    newFormData.append("data", JSON.stringify(backendPayload))
    newFormData.append("file", formData.get("file") as Blob)
    try {

        const response = await fetch(
            "http://localhost:5000/api/v1/user/create-customer",
            {
                method: "POST",
                body: newFormData, // FormData (do NOT set Content-Type)
            }
        );

        const result = await response.json();
        console.log(result);

        return result;
    } catch (error: any) {
        console.error("Create customer error:", error);
        return {
            success: false,
            message: process.env.NODE_ENV === 'development' ? error.message : 'Failed to create admin',
            formData: validationPayload
        };
    }
}

export async function getCustomer(queryString?: string) {
    try {
        const response = await fetch(
            `http://localhost:5000/api/v1/user${queryString ? `?${queryString}` : ""}`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
                // credentials: "include", 
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



export async function getCustomerById(id: string) {
    try {
        const response = await serverFetch.get(`/user/${id}`)
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


export async function updateCustomer(
    id: string,
    _prevState: any,
    formData: FormData
) {
    const rawPayload = {
        name: formData.get("name"),
        phone: formData.get("phone"),
        password: formData.get("password"),
        address: formData.get("address"),
    };

    const parsed = createCustomerZodSchema.safeParse(rawPayload);

    if (!parsed.success) {

        return {
            success: false,
            message: "Validation failed",
            formData: parsed,
        }
    }

    const apiFormData = new FormData();

    // 🔥 BACKEND EXPECTS "data"
    apiFormData.append("data", JSON.stringify(parsed.data));

    if (formData.get("file")) {
        apiFormData.append("file", formData.get("file") as File);
    }

    try {
        const response = await fetch(
            `http://localhost:5000/api/v1/user/${id}`,
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



export async function deleteCustomer(id: string) {
    try {
        // const response = await serverFetch.delete(`/user/${id}`)
        // const result = await response.json();
        // return result;
        const response = await fetch(
            `http://localhost:5000/api/v1/user/${id}`,
            {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                // credentials: 'include', // ✅ important if you use cookies/JWT
            }
        );
        return await response.json();
    } catch (error: any) {
        console.log(error);
        return {
            success: false,
            message: `${process.env.NODE_ENV === 'development' ? error.message : 'Something went wrong'}`
        };
    }
}


export async function updateCustomerStatus(id: string, status: "ACTIVE" | "INACTIVE") {
  try {
    const response = await fetch(
      `http://localhost:5000/api/v1/user/${id}/status`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status }),
       
      }
    );

    if (!response.ok) {
      const text = await response.text();
      throw new Error(text);
    }

    return await response.json();
  } catch (error: any) {
    console.log("updateCustomerStatus error:", error);
    return {
      success: false,
      message:
        process.env.NODE_ENV === "development"
          ? error.message
          : "Something went wrong",
    };
  }
}
