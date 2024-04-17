import Filters from "./Filters";

function CollabOpportunities({ searchResult }) {
  return (
    <ul className="mx-auto grid max-w-5xl gap-8">
      {searchResult.map((el) => (
        <li
          key={crypto.randomUUID()}
          className="relative rounded-xl bg-[#242222] p-4"
        >
          <span className="absolute right-0 top-0 rounded-bl-lg rounded-tr-lg bg-yellow-500 p-2 text-sm font-bold text-black">
            Job Opportunity
          </span>
          <h3 className="mb-3 flex gap-2 text-lg font-bold">
            <span className="text-yellow-500">{el.firm}</span>
            <span className="font-normal">|</span>
            <span>{el.role}</span>
          </h3>
          <p className="mb-3 flex flex-wrap items-center gap-x-3 font-semibold">
            <span>{el.location}</span>
            <span className="aspect-square h-1 rounded-full bg-white"></span>
            <span>{el.is_paid ? "Paid" : "Free"} Service</span>
            <span className="aspect-square h-1 rounded-full bg-white"></span>
            <span>{el.is_full_time ? "Full" : "Part"} time</span>
            <span className="aspect-square h-1 rounded-full bg-white"></span>
            <span>Posted on {el.posted_on}</span>
          </p>
          <p className="text-md mb-3">{el.about}</p>
          <p className="mb-3 flex flex-wrap items-center gap-x-3 font-semibold">
            <span>Escrow available</span>
            <span className="aspect-square h-1 rounded-full bg-white"></span>
            <span style={{ display: "block" }}>
              <span>Applications: </span>
              <span className="ms-2 text-sm font-normal">
                {el.num_applications} received
              </span>
            </span>
          </p>
          <Filters filterList={el.tags} />
        </li>
      ))}
    </ul>
  );
}

export default CollabOpportunities;
