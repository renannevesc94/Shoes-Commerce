import { createContext, useContext } from 'react';
import { productType } from '../../types';

const CurrentProductContext = createContext<productType | null>(null);

export const CurrentProductProvider = ({
  product,
  children,
}: {
  product: productType;
  children: React.ReactNode;
}) => {
  return (
    <CurrentProductContext.Provider value={product}>{children}</CurrentProductContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useCurrentProduct = () => {
  const context = useContext(CurrentProductContext);
  if (!context) {
    throw new Error('currentProduct must be used within an ProductContext');
  }
  return context;
};
