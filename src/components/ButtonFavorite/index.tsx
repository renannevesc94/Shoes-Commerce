import { Iconfavorite } from '../Icons';
import { useAuth } from '../../providers/AuthProvider';
import { useFavorites } from '../../providers/FavoritesProvider';
import { useProduct } from '../../providers/ProductsProvider';
import { useEffect } from 'react';

export const ButtonFavorite = () => {
  const { isAuthenticated, logout } = useAuth();
  const { setFavorite, isFavorite, favoritesProducts } = useFavorites();
  const product = useProduct();

  useEffect(() => {}, [favoritesProducts]);

  return (
    <button
      onClick={() => {
        !isAuthenticated ? logout() : setFavorite(product);
      }}
    >
      {isFavorite(product.id) ? <Iconfavorite fill="red" /> : <Iconfavorite />}
    </button>
  );
};
