import useLocalStorage from '@rehooks/local-storage';
import { createContext, useContext } from 'react';
import { productType } from '../../types';

type FavoritesContextType = {
  setFavorite: (product: productType) => void;
  favoritesProducts: { [key: string]: productType };
  isFavorite: (id: string) => boolean;
};

export const FavoritesContext = createContext<FavoritesContextType>({
  setFavorite: () => {},
  favoritesProducts: {},
  isFavorite: () => false,
});

const useFavoritesBase = () => {
  const [favoritesProducts, setFavoriteProducts] = useLocalStorage<{
    [key: string]: productType;
  }>('favorites', {});

  const setFavorite = (product: productType) => {
    const newFavorites = { ...favoritesProducts };
    if (product.id in newFavorites) {
      delete newFavorites[product.id];
    } else {
      newFavorites[product.id] = product;
    }
    setFavoriteProducts(newFavorites);
  };

  const isFavorite = (id: string) => {
    return id in favoritesProducts;
  };

  return {
    setFavorite,
    isFavorite,
    favoritesProducts,
  };
};

export const FavoritesProvider = ({ children }: { children: React.ReactNode }) => {
  const value = useFavoritesBase();
  return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error('useAuth must be used within an FavoritesProvider');
  }
  return context;
};
