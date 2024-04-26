import { Button, Input, InputPassword } from "../../../../components/";

import { useLogin } from "../../hooks/use-login";

export const FormLogin = () => {
  const { register, handleSubmit, errors, isPending, isError } = useLogin();
  return (
    <>
      <div className="error flex flex-col flex-wrap w-full justify-center  text-red-400 text-sm text-center">
        <span>{errors.email ? errors.email.message : ""}</span>
        <span>{errors.password ? errors.password.message : ""}</span>
        <span>{isError ? "Credenciais inválidas" : ""}</span>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4">
          <Input label="E-mail" {...register("email")} />
          <InputPassword label="Password" {...register("password")} />

          <Button isLoading={isPending} variant="primary">
            Login
          </Button>
        </div>
      </form>
    </>
  );
};
