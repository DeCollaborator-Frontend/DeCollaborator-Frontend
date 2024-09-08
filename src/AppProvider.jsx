import { AssociatesProvider } from "./context/AssociatesContext";
import {
  CollabProvider,
  ProductProvider,
} from "./context/ProductsServicesCollabContext";

import { ChatsProvider } from "./contexts/useChats";
import { PrimeReactProvider } from "primereact/api";

export const AppProviders = ({ children }) => {
  return (
    <PrimeReactProvider>
      <AssociatesProvider>
        <ChatsProvider>
          <CollabProvider>
            <ProductProvider>{children}</ProductProvider>
          </CollabProvider>
        </ChatsProvider>
      </AssociatesProvider>
    </PrimeReactProvider>
  );
};
