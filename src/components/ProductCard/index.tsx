import { useLocation } from 'react-router-dom';
import { ButtonAddToCart, ButtonFavorite, RatingStar, SelectNumber } from '../index';

type ProductCardProps = {
  price: string;
  title: string;
  rating: number;
  urlImage: string;
};

export const ProductCard = ({ price, title, rating, urlImage }: ProductCardProps) => {
  const location = useLocation();
  return (
    <div className="border-2 shadow-md w-52 h-68 flex flex-col items-center p-1 rounded-lg">
      <div className="w-full h-36 bg-slate-300 rounded-lg">
        <img src={`./shoes/${urlImage}`} alt="" className="object-contain h-full w-full" />
      </div>
      <div className="flex justify-between w-full">
        <RatingStar rating={rating} />
        <ButtonFavorite />
      </div>
      <div className="font-bold w-full h-full -mt-1 flex flex-col justify-center items-center">
        <h2>{title}</h2>
        <span className="font-semibold text-gray-600">{`R$ ${price}`}</span>
      </div>

      {location.pathname == '/favoritos' && (
        <div className="flex flex-col px-2 gap-1 w-full items-center justify-center">
          <SelectNumber />
          <ButtonAddToCart />
        </div>
      )}
    </div>
  );
};
