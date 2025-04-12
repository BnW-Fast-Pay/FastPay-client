import { z } from "zod";

export const emailSchema = z.string().email("Invalid email address");

export const passwordSchema = z.string().min(8, "Password must be at least 8 characters long");

export const fullNameSchema = z.string().min(4, "Full name is required and must be at least 4 characters long");

export const phoneNumberSchema = z.string().min(10, "Invalid phone number");


export const resetPasswordSchema = z.object({
    password: passwordSchema,
    confirmPassword: passwordSchema,
}).refine(data => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
});

export const signInSchema = z.object({
    email: emailSchema,
    password: passwordSchema,
});

export const signupSchema = z.object({
    fullName: fullNameSchema,
    email: emailSchema,
    phoneNumber: phoneNumberSchema,
    password: passwordSchema,
    confirmPassword: passwordSchema,
}).refine(data => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
});