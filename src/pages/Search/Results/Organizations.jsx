import SearchCard from "../SearchCard";

function Organizations({ searchResult }) {
  console.log(searchResult);
  return (
    <>
      <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {searchResult.map((el) => (
          <SearchCard
            username={el.username || el.name}
            key={crypto.randomUUID()}
            about={el.about}
            collabs={el.collabs}
            category={el.category}
          />
        ))}
      </ul>
    </>
  );
}

export default Organizations;
