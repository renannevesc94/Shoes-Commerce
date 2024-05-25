import { useCurrentProduct } from '../../providers/CurrentProduct';
import { useShoppinCart } from '../../providers/ShoppingCartProvider';

export const ButtonAddToCart = () => {
  const product = useCurrentProduct();
  const { setShoppingCart } = useShoppinCart();

  return (
    <div className="w-full ml-1">
      <button
        className="w-full h-9 text-whiteDefault font-medium bg-red-700 rounded-md"
        onClick={() => {
          setShoppingCart(product);
        }}
      >
        Adicionar ao Carrinho
      </button>
    </div>
  );
};
