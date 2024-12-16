 import z from 'zod'
 export const LoginSchema= z.object({
    // First_name:string().min(5,{message:'should be 5 character'}).max(300,{message:'so long'}),
    // Last_name:string().min(5,{message:'should be 5 character'}).max(300,{message:'so long'}),
    email: z.string().min(1, { message: "Email address is required" }).email(),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters longs" })
      .regex(/.*[!@#$%^&*()_+{}|[\]\\:";'<>?,./].*/, {
        message: "Password should contain at least 1 special character",
      }),
    
 
 });

 export const RegisterSchema = z.object({
    email: z.string().min(1, { message: "Email address is required" }).email(),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters longs" })
      .regex(/.*[!@#$%^&*()_+{}|[\]\\:";'<>?,./].*/, {
        message: "Password should contain at least 1 special character",
      }),
  
  
 });