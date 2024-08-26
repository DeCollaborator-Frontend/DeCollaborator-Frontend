import React, { useContext } from "react";
import { CollabContext } from "@/context/ProductsServicesCollabContext";
import { useParams } from "react-router-dom";
import Filters from "../Search/Results/Filters";
import Footer from "@/components/Footer";

const OpportunityApplication = () => {
  const { opportunityId } = useParams();
  const { allCollabs } = useContext(CollabContext);
  const opportunity = allCollabs.find((el) => el.id === Number(opportunityId));
  return (
    <>
      <div></div>
      <div className="px-8 py-32 text-white md:px-10 ">
        <div className="mb-12 text-center">
          <h1 className="text-3xl capitalize md:text-4xl lg:text-5xl">
            Opportunity Application Form
          </h1>
          <p className="mt-3 text-lg text-gray-400">
            Fill the form with the appropriate details
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
            </p>
            <p className="text-md mb-3 text-gray-300">
              {opportunity.description}
            </p>
          </li>
        </div>

        <h2 className="mb-8 mt-20 text-center text-2xl font-bold capitalize md:text-3xl">
          Application Details
        </h2>

        <div className="mx-5 flex flex-col rounded-xl bg-[#242222] p-3">
          <label htmlFor="cover_letter" className="mb-2 font-bold text-white">
            Cover Letter
          </label>
          <textarea
            name="cover_letter"
            id="cover_letter"
            cols="40"
            rows="10"
            className="rounded-md border border-[#525252] bg-transparent p-2 text-white focus:outline-none"
            placeholder="Compose a cover letter"
          ></textarea>
        </div>
        <div>
          <div className="m-5 flex flex-col rounded-xl bg-[#242222] p-3">
            <p className="mb-2 font-bold text-white">Upload your Resume</p>
            <label
              htmlFor="file"
              className="w-full rounded-xl border border-[#525252] bg-transparent p-2 text-center text-white focus:outline-none"
            >
              Add a file
            </label>
            <input type="file" name="file" id="file" className="hidden" />
          </div>
        </div>
      </div>
      <div className="px-5">
        <Footer />
      </div>
    </>
  );
};

export default OpportunityApplication;
