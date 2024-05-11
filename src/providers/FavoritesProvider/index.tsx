import { createContext } from "react";
import { productType } from "../../types";

type FavoriteContextType = {
  setfavorite: () => void;
};

export const FavoriteContext = createContext<FavoriteContextType>({
  setfavorite: () => {},
});

type favoritesType = {
  [productId: string]: productType;
};

const useFavoritesBase = () => {
  const setfavorite = (product: favoritesType) => {
    localStorage.setItem("favorites", JSON.stringify(product));
  };

  return {
    setfavorite,
  };
};
