import { useEffect, useState } from "react";
import { GuestNavbar } from "../../components/Navbar";
import Footer from "./Footer";
import SearchHeader from "./SearchHeader";
import SearchResults from "./Results/SearchResults";
import ProductsServices from "./Results/ProductsServices";
import Pagination from "./Pagination";
import CollabOpportunities from "./Results/CollabOpportunities";
import Organizations from "./Results/Organizations";
import axios from "axios";
import { useSearchParams } from "react-router-dom";

function Search() {
  const [selectedTab, setSelectedTab] = useState("organizations");
  const [users, setUsers] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  let searchQuery = searchParams.get("s");
  let isResultsFound = searchQuery && searchResult.length > 0;
  // console.log(searchQuery);
  useEffect(() => {
    fetchSearchResults(selectedTab.split(" ")[0]);
  }, [searchQuery, selectedTab]);

  function handleSelectTab(id) {
    setSelectedTab(id.toLowerCase());
  }
  function handleSearchInput(e) {
    setSearchInput(e.target.value);
  }
  function handleSearch(e) {
    e.preventDefault();
    console.log("Searching...");

    setSearchParams({ s: searchInput.trim().toLowerCase() });
  }
  function handleClearSearch() {
    setSearchParams({});
  }
  async function fetchSearchResults(category = "individuals") {
    try {
      let entity;
      switch (category) {
        case "organizations":
          entity = "organizations";
          break;
        case "individuals":
          entity = "users";
          break;
        case "products":
          entity = "products";
          break;
        case "services":
          entity = "services";
          break;
        case "collab":
          entity = "collab";
      }
      const res = await axios.get(`http://localhost:3000/${entity}`);

      const result = res.data.filter((el) => {
        const attributesString = Object.entries(el).reduce(
          (acc, cur) => (acc + cur[1]).toLowerCase(),
          "",
        );

        return attributesString.toLowerCase().includes(searchQuery);
      });
      setSearchResult(result);
    } catch (err) {
      console.log(err.message);
    }
  }
  console.log(searchResult);

  return (
    <>
      <GuestNavbar
        searchInput={searchInput}
        onSearchInput={handleSearchInput}
        onSearch={handleSearch}
      />
      <div className="flex min-h-screen bg-black pt-40 text-white">
        <div className="container mx-auto flex flex-col justify-between">
          {searchQuery && (
            <SearchHeader
              selectedTab={selectedTab}
              onSelectTab={handleSelectTab}
              searchQuery={searchQuery}
              isResultsFound={isResultsFound}
              searchResult={searchResult}
              onClearSearch={handleClearSearch}
            />
          )}
          {!searchQuery && searchResult.length === 0 && (
            <h1 className="mb-24 text-center text-4xl font-light text-white">
              Make a quick search with the searchbar above
            </h1>
          )}
          {searchQuery && isResultsFound && (
            <>
              <SearchResults>
                {(selectedTab === "organizations" ||
                  selectedTab === "individuals") && (
                  <Organizations searchResult={searchResult} />
                )}
                {(selectedTab === "products" || selectedTab === "services") && (
                  <ProductsServices searchResult={searchResult} />
                )}
                {selectedTab === "collab opportunities" && (
                  <CollabOpportunities searchResult={searchResult} />
                )}
                <Pagination />
              </SearchResults>
            </>
          )}

          <Footer />
        </div>
      </div>
    </>
  );
}

export default Search;
