import { AssociatesProvider } from "./context/AssociatesContext";
import {
  CollabProvider,
  ProductProvider,
} from "./context/ProductsServicesCollabContext";
import { TeamsProvider } from "./context/TeamContext";

import { ChatsProvider } from "./contexts/useChats";
import { PrimeReactProvider } from "primereact/api";

export const AppProviders = ({ children }) => {
  return (
    <PrimeReactProvider>
      <AssociatesProvider>
        <ChatsProvider>
          <CollabProvider>
            <TeamsProvider>
              <ProductProvider>{children}</ProductProvider>
            </TeamsProvider>
          </CollabProvider>
        </ChatsProvider>
      </AssociatesProvider>
    </PrimeReactProvider>
  );
};
