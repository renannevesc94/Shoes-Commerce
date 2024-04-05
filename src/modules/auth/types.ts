import { z } from "zod";

export const AuthSchema = z.object({
  email: z
    .string({ required_error: "Informe um email válido" })
    .email({ message: "Informe um email válido" }),
  password: z
    .string({ required_error: "Informe sua senha" })
    .min(4, { message: "Mínimo de 4 caracteres" })
    .max(8, { message: "Limite de 8 caracteres" }),
});

export type AuthType = z.infer<typeof AuthSchema>;
