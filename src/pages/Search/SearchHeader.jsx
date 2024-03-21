import Tabs from "./Tabs";

function SearchHeader({ selectedTab, onSelectTab }) {
  return (
    <>
      <h1 className="mb-24 text-center text-4xl font-light text-white">
        Search result for &quot;Mar&quot;
      </h1>
      <Tabs onSelectTab={onSelectTab} selectedTab={selectedTab} />
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
