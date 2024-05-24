import { useCurrentProduct } from '../../providers/CurrentProduct';

export const ButtonAddToCart = () => {
  const product = useCurrentProduct();
  console.log(product);
  return (
    <div className="w-full ml-1">
      <button className="w-full h-9 text-whiteDefault font-medium bg-red-700 rounded-md ">
        Adicionar ao Carrinho
      </button>
    </div>
  );
};
