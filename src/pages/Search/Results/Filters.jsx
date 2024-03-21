function Filters({ filterList = [] }) {
  return (
    <div className="flex justify-start gap-2">
      {filterList.map((filter) => (
        <span
          key={crypto.randomUUID()}
          className="cursor-default rounded-full bg-[#0f0f0f] p-3 leading-none text-sm font-medium"
        >
          {filter}
        </span>
      ))}
    </div>
  );
}

export default Filters;
