import { LucideChevronDownCircle } from "lucide-react";
import BrandProfileImgGroup from "./BrandProfileImgGroup";

function EntityAboutSummary() {
  return (
    <div className="flex flex-col-reverse rounded-xl bg-neutral-800 lg:flex-row">
      <ul className="flex-1 list-none p-0">
        <li className="flex  items-start whitespace-nowrap rounded-tl-xl border-2 border-b-0 border-neutral-700 px-2 py-5 leading-4 lg:p-4 lg:py-6">
          <span className=" basis-[120px] sm:basis-36 font-light">Collab title:</span>
          <span className=" flex-1 font-semibold lg:font-bold">
            Web3 product application
          </span>
        </li>
        <li className="flex  items-start whitespace-nowrap border-2 border-b-0 border-neutral-700 px-2 py-5 leading-4 lg:p-4 lg:py-6">
          <span className=" basis-[120px] sm:basis-36 font-light">Collab type: </span>
          <span className=" flex-1 font-semibold lg:font-bold">
            Partnership
          </span>
        </li>
        <li className="flex  items-start whitespace-nowrap border-2 border-b-0 border-neutral-700 px-2 py-5 leading-4 lg:p-4 lg:py-6">
          <span className=" basis-[120px] sm:basis-36 font-light">Date initiated: </span>
          <span className=" flex-1 font-semibold lg:font-bold">
            29th August, 2023
          </span>
        </li>
        <li className="relative flex items-start whitespace-nowrap border-2 border-b-0 border-neutral-700 px-2 py-5 leading-4 lg:p-4 lg:py-6">
          <span className=" basis-[120px] sm:basis-36 font-light">Collaborators: </span>
          <div className=" flex flex-1 items-center justify-between">
            <div className="space-y-4">
              <div className="flex items-center">
                <span className="mr-2 w-10 text-sm !leading-4 lg:text-base">
                  From
                </span>
                <span className="font-semibold lg:font-bold">8bitzguys</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2 w-10 text-sm !leading-4 lg:text-base">
                  To
                </span>
                <span className="font-semibold lg:font-bold">Okay bears</span>
              </div>
            </div>
            <LucideChevronDownCircle className="absolute lg:right-4 right-2" />
          </div>
        </li>
        <li className="relative flex items-center whitespace-nowrap rounded-bl-xl rounded-br-xl border-2 border-neutral-700 px-2 py-5 leading-4 lg:p-4 lg:py-6">
          <span className="lg: basis-[120px] sm:basis-36 self-start font-light">
            Collaborators:{" "}
          </span>
          <div className=" flex flex-1 items-center justify-between">
            <div className="flex-1">
              <span className="font-semibold leading-none text-yellow-400 lg:font-bold">
                Delivered
              </span>
            </div>
            <LucideChevronDownCircle className="absolute lg:right-4 right-2" />
          </div>
        </li>
      </ul>
      <div className="grid flex-1 place-items-center py-10 lg:py-20">
        <BrandProfileImgGroup />
      </div>
    </div>
  );
}

export default EntityAboutSummary;
