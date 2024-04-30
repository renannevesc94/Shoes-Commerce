import { Button, Input } from "../../../../components";
import { usePostNewsletter } from "../../hooks/use-postNewsletter";
import { CheckboxWithLabel } from "../CheckboxWithLabel";

export const NewsletterForm = () => {
  const { register, handleSubmit, errors } = usePostNewsletter();
  console.log(errors);
  return (
    <form onSubmit={handleSubmit}>
      <h2 className="font-bold text-center text-xl">Receba super descontos e ofertas exclusivas</h2>
      <p className="text-center">Cadastre-se em nossa newsletter!</p>
      <div className="flex flex-col gap-3 mt-4">
        <Input label="Nome" {...register("name")} />
        <Input label="Email" type="email" {...register("email")} />
      </div>

      <div className="flex  flex-col mt-5 mb-5 ">
        <h3 className="font-semibold">Escolha suas preferencias de ofertas:</h3>
        <div className="flex mt-2 w-10/12 gap-2 flex-wrap items-center justify-center self-center">
          <CheckboxWithLabel
            label="Masculino"
            id="inptMasculino"
            value="masculino"
            {...register("check")}
          />
          <CheckboxWithLabel
            label="Feminino"
            id="inptFeminino"
            value="feminino"
            {...register("check")}
          />
          <CheckboxWithLabel
            label="Infantil"
            id="inptInfantil"
            value="infantil"
            {...register("check")}
          />
          <CheckboxWithLabel
            label="Esportes"
            id="inptEsportes"
            value="esportes"
            {...register("check")}
          />
          <CheckboxWithLabel label="Casual" id="inptCasual" value="casual" {...register("check")} />
        </div>
      </div>
      <div className="h-12">
        <Button variant="primary" isFull={true}>
          Aceitar e cadastrar
        </Button>
      </div>
    </form>
  );
};
