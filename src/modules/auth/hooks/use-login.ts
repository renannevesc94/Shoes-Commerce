import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AuthSchema, AuthType } from "../types";

import { usePostAuth } from "./use-post-auth";
import { useAuth } from "../../../providers/AuthProvider";

export const useLogin = () => {
  const { login } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthType>({
    resolver: zodResolver(AuthSchema),
  });

  const { mutate, isPending, isError } = usePostAuth({
    onSuccess: ({ data }) => {
      console.log("sucess ", data);
      login(data.token);
    },
    onError: err => {
      console.log("O ERRO: ", err);
    },
  });

  const onSubmit = async (data: AuthType) => {
    mutate(data);
  };

  return {
    register,
    errors,
    isError,
    isPending,
    handleSubmit: handleSubmit(onSubmit),
  };
};
