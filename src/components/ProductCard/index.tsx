import { useLocation } from 'react-router-dom';
import { ButtonAddToCart, ButtonFavorite, RatingStar, SelectNumber } from '../index';
import { productType } from '../../types';

export const ProductCard = ({ price, title, rating, urlImage }: productType) => {
  const location = useLocation();
  return (
    <div className="relative  shadow-md w-48 h-full flex flex-col items-center p-1 rounded-lg gap-1">
      <div className="w-full h-36 bg-slate-300 rounded-lg">
        <img src={`./shoes/${urlImage}`} alt="" className="object-contain h-full w-full" />
        <div className="absolute top-1 right-2 p-1">
          <ButtonFavorite />
        </div>
      </div>

      <div className="flex justify-between w-full">
        <RatingStar rating={rating} />
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
