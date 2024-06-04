import { Button, Input, InputPassword } from '../../../../components/';

import { useLogin } from '../../hooks/use-login';

export const FormLogin = () => {
  const { register, handleSubmit, errors, isPending, isError } = useLogin();
  return (
    <>
      <div className="error flex flex-col flex-wrap w-full justify-center  text-red-400 text-sm text-center">
        <span data-cy="error-email">{errors.email ? errors.email.message : ''}</span>
        <span data-cy="error-password">{errors.password ? errors.password.message : ''}</span>
        <span>{isError ? 'Credenciais inválidas' : ''}</span>
      </div>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        <div className="flex flex-col gap-4">
          <Input label="E-mail" {...register('email')} data-cy="input-email" />
          <InputPassword label="Password" {...register('password')} data-cy="input-password" />

          <Button isLoading={isPending} variant="primary">
            Login
          </Button>
        </div>
      </form>
    </>
  );
};
