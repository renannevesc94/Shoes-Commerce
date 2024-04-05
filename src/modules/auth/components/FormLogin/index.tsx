import { Button } from "../../../../components/Button";
import { Input } from "../../../../components/Input";
import { InputPassword } from "../../../../components/InputPassword";

export const FormLogin = () => {
  return (
    <>
      <form>
        <div className="flex flex-col gap-4">
          <Input label="E-mail" />
          <InputPassword label="Password" />

          <Button variant="primary">Login</Button>
        </div>
      </form>
    </>
  );
};
