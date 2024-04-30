import { useForm } from "react-hook-form";
import { NewsletterType, newsletterSchema } from "../types";
import { zodResolver } from "@hookform/resolvers/zod";

export const usePostNewsletter = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<NewsletterType>({
    resolver: zodResolver(newsletterSchema),
  });

  const onSubmit = data => {
    console.log(data);
  };

  return { register, handleSubmit: handleSubmit(onSubmit), errors, control };
};
