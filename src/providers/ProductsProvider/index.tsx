import { createContext, useContext } from 'react';
import { productType } from '../../types';
import { useGetReleases } from '../../modules/home/hooks/use-getReleases';
import { useGetNovelties } from '../../modules/home/hooks/use-getNovelties';
import { useGetHighLights } from '../../modules/home/hooks/use-getHighLights';
import { highlights } from '../../services';

type ProductContextType = {
  releases: productType[] | null;
  novelties: productType[] | null;
  highlightBanners: highlights[] | null;
};

const ProductsContext = createContext<ProductContextType>({
  releases: [],
  novelties: [],
  highlightBanners: [],
});

const useProductsBase = () => {
  const { data: releases = null } = useGetReleases();
  const { data: novelties = null } = useGetNovelties();
  const { data: highlightBanners = null } = useGetHighLights();

  return {
    releases,
    novelties,
    highlightBanners,
  };
};

export const ProductsProvider = ({ children }: { children: React.ReactNode }) => {
  const value = useProductsBase();
  return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const useProducts = () => {
  const context = useContext(ProductsContext);
  if (!context) {
    throw new Error('useProduct must be used within an ProductContext');
  }
  return context;
};
