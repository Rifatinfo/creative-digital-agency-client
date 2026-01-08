/* eslint-disable @typescript-eslint/no-explicit-any */

import { serverFetch } from "@/lib/serverFetch";
import { zodValidator } from "@/lib/zodValidator";
import { campaignSchema, updateCampaignZodSchema } from "@/zod/campaign.validation";

export async function createCampaign(_prevState: any, formData: FormData) {
    const validationPayload = {
        title: formData.get("title"),
        category: formData.get("category"),
        subcategory: formData.get("subcategory"),
        videoUrl: formData.get("videoUrl"),
        views: formData.get("views"),
        dateLabel: formData.get("dateLabel"),
        duration: formData.get("duration"),
        brand: formData.get("brand"),
        featured: formData.get("featured") === "true",
    };

    const validatedPayload = zodValidator(validationPayload, campaignSchema);

    if (!validatedPayload.success) {
        return {
            success: false,
            message: "Validation failed",
            formData: validationPayload,
            errors: validatedPayload.errors,
        };
    }

    // Backend payload (JSON part)
    const backendPayload = validatedPayload.data;

    const newFormData = new FormData();
    newFormData.append("data", JSON.stringify(backendPayload));

    // File upload (thumbnail source)
    const file = formData.get("file");
    if (file instanceof Blob) {
        newFormData.append("file", file);
    }

    try {
        const response = await fetch(
            "https://creative-digital-agency-server.vercel.app/api/v1/campaign/create-campaign",
            {
                method: "POST",
                body: newFormData,
                credentials: "include",
            }
        );

        return await response.json();
    } catch (error: any) {
        return {
            success: false,
            message:
                process.env.NODE_ENV === "development"
                    ? error.message
                    : "Failed to create campaign",
            formData: validationPayload,
        };
    }
}

export async function getCampaigns(queryString?: string) {
    try {
        const response = await fetch(
            `https://creative-digital-agency-server.vercel.app/api/v1/campaign${queryString ? `?${queryString}` : ""}`,
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


export async function updateCampaign(
  id: string,
  _prevState: any,
  formData: FormData
) {
  const rawPayload = {
    title: formData.get("title"),
    category: formData.get("category"),
    subcategory: formData.get("subcategory"),
    videoUrl: formData.get("videoUrl"),
    views: formData.get("views"),
    dateLabel: formData.get("dateLabel"),
    duration: formData.get("duration"),
    brand: formData.get("brand"),
    featured: formData.get("featured") ? true : false, 
  };

  const parsed = updateCampaignZodSchema.safeParse(rawPayload);

  if (!parsed.success) {
    return {
      success: false,
      message: "Validation failed",
      formData: rawPayload,
    };
  }

  const apiFormData = new FormData();
  apiFormData.append("data", JSON.stringify(parsed.data));

  const file = formData.get("file");
  if (file instanceof File) {
    apiFormData.append("file", file);
  }

  try {
    const response = await fetch(
      `https://creative-digital-agency-server.vercel.app/api/v1/campaign/${id}`,
      {
        method: "PATCH",
        body: apiFormData,
        credentials: "include",
      }
    );

    if (!response.ok) {
      const text = await response.text();
      console.error(text);
      return {
        success: false,
        message: "Unauthorized or server error",
      };
    }

    return await response.json();
  } catch (error: any) {
    return {
      success: false,
      message: error.message,
    };
  }
}



export async function deleteCampaign(id: string) {
    try {
        const response = await serverFetch.delete(`/campaign/${id}`)
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