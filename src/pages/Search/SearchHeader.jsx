import Tabs from "./Tabs";

function SearchHeader() {
  return (
    <>
      <h1 className="mb-24 font-light text-4xl text-center text-white">
        Search result for &quot;Mar&quot;
      </h1>
      <Tabs />
      <div className="flex justify-between items-center px-8 my-16">
        <span>Icon here!</span>
        <div>
          <label htmlFor="sortBy">Sort by:</label>
          <select
            name=""
            id="sortBy"
            className="border-[#dfdfdf] bg-transparent autofill:bg-transparent p-2 border rounded-md text-[#dfdfdf] placeholder:text-sm ms-3 pe-20 focus:outline-none"
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
