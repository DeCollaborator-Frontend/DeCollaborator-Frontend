import { useState } from "react";
import { GuestNavbar } from "../../components/Navbar";
import Footer from "./Footer";
import SearchHeader from "./SearchHeader";
import SearchResults from "./Results/SearchResults";
import ProductsServices from "./Results/ProductsServices";
import Pagination from "./Pagination";
import CollabOpportunities from "./Results/CollabOpportunities";
import Organizations from "./Results/Organizations";

function Search() {
  const [selectedTab, setSelectedTab] = useState("organizations");
  function handleSelectTab(id) {
    setSelectedTab(id.toLowerCase());
  }
  return (
    <>
      <GuestNavbar />
      <div className="min-h-screen bg-black pt-40 text-white">
        <SearchHeader selectedTab={selectedTab} onSelectTab={handleSelectTab} />
        <SearchResults>
          {(selectedTab === "organizations" ||
            selectedTab === "individuals") && <Organizations />}
          {(selectedTab === "products" || selectedTab === "services") && (
            <ProductsServices />
          )}

          {selectedTab === "collab opportunities" && <CollabOpportunities />}
          <Pagination />
        </SearchResults>
        <Footer />
      </div>
    </>
  );
}

export default Search;
