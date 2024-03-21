import Pagination from "./Pagination";
import SearchCard from "./SearchCard";

function SearchResults() {
  return (
    <div className="px-8">
      <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {Array.from({ length: 10 }, (_, i) => i + 1).map((i) => (
          <SearchCard
            title={`Title ${i}`}
            key={crypto.randomUUID()}
            desc={`Description ${i}\nLorem ipsum dolor sit amet...`}
            active={Math.floor(Math.random() * 1) + 1 == 1 ? true : false}
          />
        ))}
      </ul>
      <Pagination />
    </div>
  );
}

export default SearchResults;
