import * as z from "zod"

export const formSchema = z.object({
   name: z.string().min(3, "min chart is 3").max(10, "max chart 10"),
    email: z.string().email("email is not valid").min(1, "email is required"),
    password: z
      .string()
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "Requirements: At least 8 characters, 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character.",
      )
      .min(1, "password is required"),
    rePassword: z.string().min(1, "password is required"),
    phone: z.string().regex(/^01[0125][0-9]{8}$/, 'enter phone')
}).refine((values) => values.rePassword === values.password, {
    message: "rePassword not Match in Password",
    path: ["rePassword"],
  });

  export const formLoginSchema = z.object({
    email: z.string().email("email is not valid").min(1, "email is required"),
      password: z
  .string()
  .min(1, "password is required")
  .min(8, "Password must be at least 8 characters")
  .regex(/[a-z]/, "Must contain at least one lowercase letter")
  .regex(/[A-Z]/, "Must contain at least one uppercase letter")
  .regex(/\d/, "Must contain at least one number")
  .regex(/[@$!%*?&]/, "Must contain at least one special character"),
})

  export const formOrderSchema = z.object({
    shippingAddress: z.object({
      phone: z.string().regex(/^01[0125][0-9]{8}$/, 'enter phone'),
      city: z.string().min(3, "min chart is 3").max(10, "max chart 10"),
      details: z.string().min(3, "min chart is 3").max(10, "max chart 10"),
    })
})

export const passwordChangeSchema = z.object({
    currentPassword: z
  .string()
  .min(1, "password is required")
  .min(8, "Password must be at least 8 characters")
  .regex(/[a-z]/, "Must contain at least one lowercase letter")
  .regex(/[A-Z]/, "Must contain at least one uppercase letter")
  .regex(/\d/, "Must contain at least one number")
  .regex(/[@$!%*?&]/, "Must contain at least one special character"),
    password: z
  .string()
  .min(1, "password is required")
  .min(8, "Password must be at least 8 characters")
  .regex(/[a-z]/, "Must contain at least one lowercase letter")
  .regex(/[A-Z]/, "Must contain at least one uppercase letter")
  .regex(/\d/, "Must contain at least one number")
  .regex(/[@$!%*?&]/, "Must contain at least one special character"),
    rePassword: z.string().min(1, "password is required"),
}).refine((values) => values.rePassword === values.password, {
    message: "rePassword not Match in Password",
    path: ["rePassword"],
  });