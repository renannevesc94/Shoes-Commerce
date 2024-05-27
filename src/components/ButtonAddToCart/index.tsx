import { Bounce, ToastContainer, toast } from 'react-toastify';
import { useCurrentProduct } from '../../providers/CurrentProduct';
import { useShoppinCart } from '../../providers/ShoppingCartProvider';
import 'react-toastify/dist/ReactToastify.css';

export const ButtonAddToCart = () => {
  const product = useCurrentProduct();
  const { setShoppingCart } = useShoppinCart();

  toast('🦄 Wow so easy!', {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'light',
    transition: Bounce,
  });

  return (
    <div className="w-full ml-1">
      <ToastContainer containerId={1} />

      <button
        className="w-full h-9 text-whiteDefault font-medium bg-red-700 rounded-md"
        onClick={() => {
          setShoppingCart(product);
          toast.play({ containerId: '1' });
        }}
      >
        Adicionar ao Carrinho
      </button>
    </div>
  );
};
