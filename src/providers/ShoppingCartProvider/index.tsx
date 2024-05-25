import useLocalStorage from '@rehooks/local-storage';
import { createContext, useContext } from 'react';
import { productType } from '../../types';

type ShoppingCartContextType = {
  setShoppingCart: (product: productType) => void;
  shoppingCartProducts: productType[];
};
export const ShoppingCartContext = createContext<ShoppingCartContextType>({
  setShoppingCart: () => {},
  shoppingCartProducts: [],
});

const useShoppingCartBase = () => {
  const [shoppingCartProducts, setShoppingCartProduct] = useLocalStorage<productType[]>(
    'ShoppingCart',
    []
  );

  const setShoppingCart = (product: productType) => {
    const newShoppingCart = [...shoppingCartProducts];
    newShoppingCart.push(product);
    setShoppingCartProduct(newShoppingCart);
  };

  return {
    setShoppingCart,
    shoppingCartProducts,
  };
};

export const ShoppingCartProvider = ({ children }: { children: React.ReactNode }) => {
  const value = useShoppingCartBase();
  return <ShoppingCartContext.Provider value={value}>{children}</ShoppingCartContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const useShoppinCart = () => {
  const context = useContext(ShoppingCartContext);
  if (!context) {
    throw new Error('useShoppingCart must be used with in an ShoppingCartProvider ');
  }
  return context;
};
