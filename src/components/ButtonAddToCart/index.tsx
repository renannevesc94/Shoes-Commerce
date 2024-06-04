import { Bounce, toast } from 'react-toastify';
import { useCurrentProduct } from '../../providers/CurrentProduct';
import { useShoppinCart } from '../../providers/ShoppingCartProvider';
import 'react-toastify/dist/ReactToastify.css';

export const ButtonAddToCart = () => {
  const product = useCurrentProduct();
  const { setShoppingCart } = useShoppinCart();

  return (
    <div className="w-full ml-1">
      <button
        className="w-full h-9 text-whiteDefault font-medium bg-red-700 rounded-md"
        onClick={() => {
          setShoppingCart(product);
          toast.success(`${product.title} adicionado ao carrinho`, {
            position: 'top-right',
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
            transition: Bounce,
          });
        }}
      >
        Adicionar ao Carrinho
      </button>
    </div>
  );
};
