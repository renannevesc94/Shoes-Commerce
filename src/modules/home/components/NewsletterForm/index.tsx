import { Button, Input } from "../../../../components";
import { Modal } from "../../../../components/Modal";
import { useNewsletter } from "../../hooks/use-Newsletter";
import { CheckboxWithLabel } from "../CheckboxWithLabel";

export const NewsletterForm = () => {
  const { register, handleSubmit, errors, isPending, isSuccess, data: response } = useNewsletter();

  return (
    <form onSubmit={handleSubmit} className="relative">
      <h2 className="font-bold text-center text-xl">Receba super descontos e ofertas exclusivas</h2>
      <p className="text-center">Cadastre-se em nossa newsletter!</p>
      <div className="flex flex-col gap-3 mt-4">
        <Input
          label="Nome"
          {...register("name")}
          isError={errors.name ? true : false}
          disabled={isPending}
        />
        <Input
          label="Email"
          type="email"
          {...register("email")}
          isError={errors.email ? true : false}
          disabled={isPending}
        />
      </div>

      <div
        className={`flex  flex-col p-1 mt-3 mb-3 ${errors.check ? "border-2 border-red-400" : ""}`}
      >
        <h3 className="font-semibold">Escolha suas preferencias de ofertas:</h3>
        <div className="flex mt-2 w-10/12 gap-2 flex-wrap items-center justify-center self-center ">
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
        {errors.check && (
          <span className="text-red-600 font-semibold mb-0 text-center mt-1">
            Escolha ao menos uma opção
          </span>
        )}
      </div>
      <div className="h-12 ">
        <Button variant="primary" isFull={true} isLoading={isPending}>
          Aceitar e cadastrar
        </Button>
      </div>
      {isSuccess && <Modal title="Cadastro efetuado" information={response?.data?.message} />}
    </form>
  );
};
