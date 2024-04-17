function Filters({ filterList = [] }) {
  return (
    <div className="flex justify-start gap-4">
      {filterList.map((filter) => (
        <span
          key={crypto.randomUUID()}
          className="cursor-default rounded-full bg-[#0f0f0f] p-3 text-sm font-medium leading-none"
        >
          {filter}
        </span>
      ))}
    </div>
  );
}

export default Filters;
