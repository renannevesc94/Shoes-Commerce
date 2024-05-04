import { useForm } from "react-hook-form";
import { NewsletterType, newsletterSchema } from "../types";
import { zodResolver } from "@hookform/resolvers/zod";
import { usePostNewsletter } from "./use-postNesletter";

export const useNewsletter = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<NewsletterType>({
    resolver: zodResolver(newsletterSchema),
  });

  const { mutate, isPending, isSuccess, data } = usePostNewsletter();

  const onSubmit = (data: NewsletterType) => {
    mutate(data);
    reset();
  };

  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    errors,
    isPending,
    isSuccess,
    data,
  };
};
