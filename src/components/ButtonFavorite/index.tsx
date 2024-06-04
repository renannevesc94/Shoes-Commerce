import { Iconfavorite } from '../Icons';
import { useAuth } from '../../providers/AuthProvider';
import { useFavorites } from '../../providers/FavoritesProvider';
import { useEffect } from 'react';
import { useCurrentProduct } from '../../providers/CurrentProduct';

export const ButtonFavorite = () => {
  const { isAuthenticated, logout } = useAuth();
  const { setFavorite, isFavorite, favoritesProducts } = useFavorites();
  const product = useCurrentProduct();

  useEffect(() => {}, [favoritesProducts]);

  return (
    <button
      className="w-7  bg-slate-200 rounded-full p-[2px] "
      onClick={() => {
        !isAuthenticated ? logout() : setFavorite(product);
      }}
    >
      {isFavorite(product.id) && isAuthenticated ? <Iconfavorite fill="red" /> : <Iconfavorite />}
    </button>
  );
};
