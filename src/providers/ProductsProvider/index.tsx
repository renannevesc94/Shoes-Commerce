import { createContext, useContext } from "react";
import { productType } from "../../types";

const ProductContext = createContext<productType | null>(null);

export const ProductProvider = ({
  product,
  children,
}: {
  product: productType;
  children: React.ReactNode;
}) => {
  return (
    <ProductContext.Provider value={product}>
      {children}
    </ProductContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useProduct = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useProduct must be used within an ProductContext");
  }
  return context;
};
