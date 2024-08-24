import { ProductProvider } from "./context/ProductsServicesCollabContext";

export const AppProviders = ({ children }) => {
  return <ProductProvider>{children}</ProductProvider>;
};
