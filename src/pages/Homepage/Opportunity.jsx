import React, { useContext, useEffect, useState } from "react";
import { CollabContext } from "@/context/ProductsServicesCollabContext";
import Filters from "../Search/Results/Filters";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";

const Opportunity = () => {
  const { allCollabs } = useContext(CollabContext);
  const [sortedCollabs, setSortedCollabs] = useState([]);
  const [sortOption, setSortOption] = useState("");

  useEffect(() => {
    // Load all collaborations without sorting initially
    setSortedCollabs(allCollabs);
  }, [allCollabs]);

  const handleSortChange = (e) => {
    const selectedOption = e.target.value;
    setSortOption(selectedOption);

    // Apply sorting only when a sort option is selected
    let sortedArray = [...allCollabs];
    if (selectedOption === "date-asc") {
      sortedArray.sort((a, b) => new Date(a.posted_on) - new Date(b.posted_on));
    } else if (selectedOption === "date-desc") {
      sortedArray.sort((a, b) => new Date(b.posted_on) - new Date(a.posted_on));
    } else if (selectedOption === "provider-asc") {
      sortedArray.sort((a, b) => a.provider.localeCompare(b.provider));
    } else if (selectedOption === "provider-desc") {
      sortedArray.sort((a, b) => b.provider.localeCompare(a.provider));
    }

    setSortedCollabs(sortedArray);
  };

  return (
    <>
      <div className="px-8 py-32 text-white md:px-10">
        <div className="mb-12 text-center">
          <h1 className="text-3xl capitalize md:text-4xl lg:text-5xl">
            Collab Opportunities
          </h1>
          <p className="mt-3 text-lg text-gray-400">
            Explore Collab Opportunities Tailored for you
          </p>
        </div>

        {/* Sort Dropdown */}
        <div className="mb-8 text-right">
          <select
            value={sortOption}
            onChange={handleSortChange}
            className="rounded border border-white bg-transparent p-2 text-white"
          >
            <option value="" className="bg-black">
              Sort By
            </option>
            <option value="date-asc" className="bg-black">
              Date: Old to New
            </option>
            <option value="date-desc" className="bg-black">
              Date: New to Old
            </option>
            <option value="provider-asc" className="bg-black">
              Provider: A-Z
            </option>
            <option value="provider-desc" className="bg-black">
              Provider: Z-A
            </option>
          </select>
        </div>

        <ul className="mx-auto grid max-w-5xl gap-8">
          {sortedCollabs.length === 0 ? (
            <img
              src="/assests/images/no-results.png"
              alt="empty"
              className="mx-auto mb-10"
            />
          ) : (
            sortedCollabs.map((el) => (
              <li
                key={el.id}
                className="group relative overflow-hidden rounded-xl bg-[#242222] p-4 pt-12 text-sm sm:pt-4"
              >
                <span className="absolute right-0 top-0 rounded-bl-lg rounded-tr-lg bg-yellow-500 p-2 text-sm font-bold text-black">
                  {el.type}
                </span>
                <h3 className="mb-3 flex gap-2 text-lg font-semibold md:text-xl md:font-bold">
                  <span className="text-yellow-500">{el.provider}</span>
                  <span className="text-gray-300">|</span>
                  <span className="text-gray-300">{el.role}</span>
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
                <p className="text-md mb-3 text-gray-300">{el.description}</p>
                <p className="mb-3 flex-wrap items-center gap-x-3 font-semibold sm:flex">
                  <span>Escrow available</span>
                  <span className="aspect-square h-1 rounded-full bg-white"></span>
                  <span className="my-4 sm:my-0" style={{ display: "block" }}>
                    <span>Applications: </span>
                    <span className="ms-2 text-sm font-normal">
                      {el.num_applications} received
                    </span>
                  </span>
                </p>
                <Filters filterList={el.tags} />

                {/* Hover Button */}
                <div className="absolute inset-0 flex items-center justify-center bg-[#242222] bg-opacity-90 font-bold text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="flex flex-wrap font-bold">
                    <Link to={`apply/${el.id}`}>
                      <button className="mt-4 w-[150px] rounded border-2 border-[#FFDF00] bg-[#FFDF00] p-2.5 text-[#0f0f0f]">
                        Apply
                      </button>
                    </Link>
                    <Link to={`/opportunities/${el.id}`}>
                      <button className="ml-5 mt-4 w-[150px] rounded border-2 border-[#FFDF00] bg-none p-2.5 text-[#FFDF00]">
                        View More
                      </button>
                    </Link>
                  </div>
                </div>
              </li>
            ))
          )}
        </ul>
      </div>
      <div className="px-5">
        <Footer />
      </div>
    </>
  );
};

export default Opportunity;
