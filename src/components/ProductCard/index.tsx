import { Button } from "../Button";
import { IconStar } from "../Icons";

export const ProductCard = () => {
  return (
    <section className="border-2 shadow-md w-48 h-64 flex flex-col items-center p-1 rounded-lg">
      <div className="w-full h-3/5 bg-slate-300 rounded-lg">
        <img src="./tenis-card.png" alt="" className="w-full h-full" />
      </div>
      <div className="flex justify-between w-full">
        <span className="flex">
          {" "}
          <IconStar strokeColor={"#ffff00"} fillColor={" #ffff00"} />
          <IconStar strokeColor={"#ffff00"} fillColor={" #ffff00"} />
          <IconStar strokeColor={"#ffff00"} fillColor={" #ffff00"} />
          <IconStar strokeColor={"#ffff00"} fillColor={" #ffff00"} />
          <IconStar strokeColor={"#ffff00"} fillColor={" #ffff00"} />
        </span>
        <span className="font-semibold text-gray-900">R$ 1.258,80</span>
      </div>
      <div className="mt-1 font-bold w-full flex justify-center items-center">
        <h2>Nike Air Force 1 '07</h2>
      </div>
      <div className="flex w-full h-10 items-center justify-center mt-2">
        <Button variant="primary" isFull={true}>
          Mostrar detalhes
        </Button>
      </div>
    </section>
  );
};
