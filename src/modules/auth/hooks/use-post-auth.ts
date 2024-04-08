import { MutateOptions, useMutation } from "@tanstack/react-query";
import { AuthApiRequest } from "../../../types";

import { apiAuth } from "../../../services";
import { AxiosResponse } from "axios";

type SuccessResponse = AxiosResponse<{
  token: string;
}>;

export const usePostAuth = (options?: MutateOptions<SuccessResponse, unknown, AuthApiRequest>) => {
  return useMutation<SuccessResponse, unknown, AuthApiRequest>({
    mutationFn: async (data: AuthApiRequest) => await apiAuth(data),
    ...options,
  });
};
