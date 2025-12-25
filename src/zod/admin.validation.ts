import * as z from "zod";

export const createAdminZodSchema = z.object({
    password: z.string().min(6, "Password must be at least 6 characters long"),
    name: z.string().min(1, "Name is required").min(3, "Name must be at least 3 characters long"),
    email: z.email("Invalid email address").min(1, "Email is required"),
    profilePhoto: z
        .instanceof(File)
        .refine((file) => file.size > 0, "Profile photo is required"),
});
