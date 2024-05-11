import { ButtonFavorite } from "../ButtonFavorite";
import { RatingStar } from "../RatingStar";

type ProductCardProps = {
  price: string;
  title: string;
  rating: number;
  urlImage: string;
};

export const ProductCard = ({
  price,
  title,
  rating,
  urlImage,
}: ProductCardProps) => {
  return (
    <div className="border-2 shadow-md w-48 h-64 flex flex-col items-center p-1 rounded-lg">
      <div className="w-full h-3/5 bg-slate-300 rounded-lg">
        <img src={`./shoes/${urlImage}`} alt="" className="w-full h-full" />
      </div>
      <div className="flex justify-between w-full">
        <RatingStar rating={rating} />
        <ButtonFavorite />
      </div>
      <div className="mt-1 font-bold w-full flex justify-center items-center">
        <h2>{title}</h2>
      </div>
      <div className="flex w-full h-10 items-center justify-center">
        <span className="font-semibold text-gray-900">{`R$ ${price}`}</span>

        {/*  <Button variant="primary" isFull={true}>
          Mostrar detalhes
        </Button> */}
      </div>
    </div>
  );
};
