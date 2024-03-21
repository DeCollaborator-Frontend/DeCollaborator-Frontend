import Filters from "./Filters";

function CollabOpportunities() {
  return (
    <ul className="mx-auto grid max-w-5xl gap-8">
      {Array.from({ length: 5 }, (_, i) => i).map(() => (
        <li
          key={crypto.randomUUID()}
          className="relative rounded-xl bg-[#242222] p-4"
        >
          <span className="absolute right-0 top-0 rounded-bl-lg rounded-tr-lg bg-yellow-500 p-2 text-sm font-bold text-black">
            Job Opportunity
          </span>
          <h3 className="mb-3 flex gap-2 text-lg font-bold">
            <span className="text-yellow-500">Okay bears</span>
            <span className="font-normal">|</span>
            <span>Marketing manager</span>
          </h3>
          <p className="mb-3 flex flex-wrap items-center gap-x-3 font-semibold">
            <span>Lagos, Nigeria</span>
            <span className="aspect-square h-1 rounded-full bg-white"></span>
            <span>Paid Service</span>
            <span className="aspect-square h-1 rounded-full bg-white"></span>
            <span>Full time</span>
            <span className="aspect-square h-1 rounded-full bg-white"></span>
            <span>Posted on 03-08-23</span>
          </p>
          <p className="text-md mb-3">
            Esse ex aliqua cillum exercitation. Reprehenderit aute elit
            adipisicing velit magna reprehenderit laborum dolore pariatur ex
            reprehenderit. Incididunt occaecat excepteur aliquip minim duis duis
            aliquip ullamco qui do.
          </p>
          <p className="mb-3 flex flex-wrap items-center gap-x-3 font-semibold">
            <span>Escrow available</span>
            <span className="aspect-square h-1 rounded-full bg-white"></span>
            <div>
              <span>Applications: </span>
              <span className="ms-2 text-sm font-normal">100 received</span>
            </div>
          </p>
          <Filters filterList={["Marketing", "Marketing expert", "Managing"]} />
        </li>
      ))}
    </ul>
  );
}

export default CollabOpportunities;
