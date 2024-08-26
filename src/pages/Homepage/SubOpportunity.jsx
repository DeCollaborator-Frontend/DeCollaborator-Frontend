import React, { useContext } from "react";
import { CollabContext } from "@/context/ProductsServicesCollabContext";
import { useParams } from "react-router-dom";
import Filters from "../Search/Results/Filters";
import Footer from "@/components/Footer";

const SubOpportunity = () => {
  const { opportunityId } = useParams();

  const { allCollabs } = useContext(CollabContext);

  const opportunity = allCollabs.find((el) => el.id === Number(opportunityId));

  if (opportunity) {
    console.log("Opportunity found:", opportunity);
  } else {
    console.log("Opportunity not found.");
  }

  return (
    <>
      <div className="px-8 py-32 text-white md:px-10 ">
        <div className="mb-12 text-center">
          <h1 className="text-3xl capitalize md:text-4xl lg:text-5xl">
            {opportunity.provider} | {opportunity.role}
          </h1>
          <p className="mt-3 text-lg text-gray-400">
            {opportunity.location} | {opportunity.is_paid ? "Paid" : "Free"}{" "}
            Service | {opportunity.is_full_time ? "Full" : "Part"} time
          </p>
        </div>
        <div className="mx-auto grid max-w-5xl gap-8">
          <li
            key={opportunity.id}
            className="group relative list-none overflow-hidden rounded-xl bg-[#242222] p-4 pt-12 text-sm sm:pt-4"
          >
            <span className="absolute right-0 top-0 rounded-bl-lg rounded-tr-lg bg-yellow-500 p-2 text-sm font-bold text-black">
              {opportunity.type}
            </span>
            <h3 className="mb-3 flex gap-2 text-lg font-semibold md:text-xl md:font-bold">
              <span className="text-yellow-500">{opportunity.provider}</span>
              <span className="text-gray-300">|</span>
              <span className="text-gray-300">{opportunity.role}</span>
            </h3>
            <p className="mb-3 flex flex-wrap items-center gap-x-3 font-semibold">
              <span>{opportunity.location}</span>
              <span className="aspect-square h-1 rounded-full bg-white"></span>
              <span>{opportunity.is_paid ? "Paid" : "Free"} Service</span>
              <span className="aspect-square h-1 rounded-full bg-white"></span>
              <span>{opportunity.is_full_time ? "Full" : "Part"} time</span>
              <span className="aspect-square h-1 rounded-full bg-white"></span>
              <span>Posted on {opportunity.posted_on}</span>
            </p>
            <p className="text-md mb-3 text-gray-300">
              {opportunity.description}
            </p>
            <p className="mb-3 flex-wrap items-center gap-x-3 font-semibold sm:flex">
              <span>Escrow available</span>
              <span className="aspect-square h-1 rounded-full bg-white"></span>
              <span className="my-4 sm:my-0" style={{ display: "block" }}>
                <span>Applications: </span>
                <span className="ms-2 text-sm font-normal">
                  {opportunity.num_applications} received
                </span>
              </span>
            </p>
            <Filters filterList={opportunity.tags} />
          </li>
        </div>
      </div>
      <div className="px-5">
        <Footer />
      </div>
    </>
  );
};

export default SubOpportunity;
