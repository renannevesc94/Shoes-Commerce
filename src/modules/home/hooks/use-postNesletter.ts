import { MutateOptions, useMutation } from "@tanstack/react-query";
import { postNewsletter } from "../../../services";
import { NewsletterType } from "../types";
import { AxiosResponse } from "axios";

type SuccessResponse = AxiosResponse<{
  message: string;
}>;
export const usePostNewsletter = (
  options?: MutateOptions<SuccessResponse, unknown, NewsletterType>
) => {
  return useMutation<SuccessResponse, unknown, NewsletterType>({
    mutationFn: (data: NewsletterType) => postNewsletter(data),
    ...options,
  });
};
