function Filters({ filterList = [] }) {
  return (
    <div className="flex flex-wrap justify-start gap-2">
      {filterList.map((filter) => (
        <span
          key={crypto.randomUUID()}
          className="cursor-default rounded-xl bg-[#0f0f0f] px-3 py-2 text-xs font-normal leading-none md:px-4 md:text-sm md:font-medium"
        >
          {filter}
        </span>
      ))}
    </div>
  );
}

export default Filters;
