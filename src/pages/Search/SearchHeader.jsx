import Tabs from "../../components/Tabs/Tabs";

const tabItemsText = [
  "Organizations",
  "Individuals",
  "Products",
  "Services",
  "Collab Opportunities",
];

function SearchHeader({
  selectedTab,
  onSelectTab,
  searchQuery,
  isResultsFound,
  searchResult = [],
  onClearSearch,
}) {
  let numMatches = searchResult.length;
  return (
    <>
      {searchQuery && (
        <div className="mb-24 flex flex-col items-center gap-6">
          <h1 className=" text-center text-4xl font-light text-white">
            {isResultsFound
              ? `Search results for "${searchQuery}"(${numMatches})`
              : `No matches found for your search "${searchQuery}" in this category`}
          </h1>
          <button
            onClick={onClearSearch}
            title="Clear search"
            className="whitespace-nowrap text-left text-sm font-bold leading-4"
          >
            Clear search
          </button>
        </div>
      )}
      <Tabs
        tabItemsText={tabItemsText}
        onSelectTab={onSelectTab}
        selectedTab={selectedTab}
      />
      <div className="my-16 flex items-center justify-between px-8">
        <span>Icon here!</span>
        <div>
          <label htmlFor="sortBy">Sort by:</label>
          <select
            name=""
            id="sortBy"
            className="ms-3 rounded-md border border-[#dfdfdf] bg-transparent p-2 pe-20 text-[#dfdfdf] placeholder:text-sm autofill:bg-transparent focus:outline-none"
          >
            <option value="1">Name (A-Z)</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
            <option value="4">Option 4</option>
          </select>
        </div>
      </div>
    </>
  );
}

export default SearchHeader;
