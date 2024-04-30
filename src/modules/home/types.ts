import { z } from "zod";

export const newsletterSchema = z.object({
  name: z.string({ required_error: "Informe seu nome" }).min(5),
  email: z.string({ required_error: "Informe um email válido" }).email(),
  check: z.array(z.string()).min(1, "Selecione no mínimo uma opção"),
});

export type NewsletterType = z.infer<typeof newsletterSchema>;
