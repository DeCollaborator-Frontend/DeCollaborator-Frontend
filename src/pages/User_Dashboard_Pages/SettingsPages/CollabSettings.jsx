import Footer from "@/components/Footer";
import React from "react";

const CollabSettings = () => {
  return (
    <>
      <div className="mb-20 pt-32">
        <h1 className="text-center text-[56px] text-[#E8E1DC]">
          Collab Settings
        </h1>
        <p className="text-center text-[20px] text-[#959595]">
          Edit your availablity for collaborations and other related settings
        </p>
      </div>
      <div className="mx-28  rounded-xl border-2 border-[#242222] px-28 py-10">
        <div className="rounded-xl bg-[#262626] p-5">
          <h2 className="text-[28px] font-bold text-white">Active State</h2>
          <p className="mb-5 border-b border-[#A9A9A9] pb-2 text-[#D4D4D4]">
            Select how active you will be
          </p>
          <form action="">
            <div className="flex justify-between pr-32">
              <label htmlFor="industries" className="text-white">
                Open to collab
              </label>
              <select
                id="industries"
                className="block w-[200px] rounded-md border border-[#D4D4D4] bg-transparent px-3 py-2 text-base text-white focus:outline-none"
              >
                <option selected className="bg-[#171717] text-base">
                  Always Active
                </option>
                <option value="1" className="bg-[#171717] text-base">
                  Always Inactive
                </option>
                <option value="2" className="bg-[#171717] text-base">
                  Active till
                </option>
                <option value="3" className="bg-[#171717] text-base">
                  Inactive till
                </option>
              </select>
            </div>
            <div className="mt-5 flex justify-between pr-32">
              <label htmlFor="date" className="text-white">
                Active Till
              </label>
              <input
                type="date"
                name="date"
                id="date"
                className="block w-[200px] rounded-md border border-[#D4D4D4] bg-transparent px-3 py-2 text-base text-white focus:outline-none"
              />
            </div>
          </form>
        </div>
        <div className="mt-20 rounded-xl bg-[#262626] p-5">
          <h2 className="text-[28px] font-bold text-white">Collab Types</h2>
          <p className="mb-5 border-b border-[#A9A9A9] pb-2 text-[#D4D4D4]">
            Currently accepting the following collab types
          </p>
          <form action="" className="px-10">
            <div className="mb-5">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="partnerships"
                  name="partnerships"
                  className="h-4 w-4 rounded-lg border-2 border-[#7F7F7F] bg-none"
                />
                <label
                  htmlFor="partnerships"
                  className="top-2 mx-3 text-lg font-bold text-[#7F7F7F]"
                >
                  Partnerships
                </label>
              </div>
            </div>
            <div className="mb-5">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="sponsorships"
                  name="sponsorships"
                  className="h-4 w-4 rounded-lg border-2 border-[#7F7F7F] bg-none"
                />
                <label
                  htmlFor="sponsorships"
                  className="top-2 mx-3 text-lg font-bold text-[#7F7F7F]"
                >
                  Sponsorships
                </label>
              </div>
            </div>
            <div className="mb-5">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="opportunity"
                  name="opportunity"
                  className="h-4 w-4 rounded-lg border-2 border-[#7F7F7F] bg-none"
                />
                <label
                  htmlFor="opportunity"
                  className="top-2 mx-3 text-lg font-bold text-[#7F7F7F]"
                >
                  Job Opportunity
                </label>
              </div>
            </div>
            <div className="mb-5">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="service_req"
                  name="service_req"
                  className="h-4 w-4 rounded-lg border-2 border-[#7F7F7F] bg-none"
                />
                <label
                  htmlFor="service_req"
                  className="top-2 mx-3 text-lg font-bold text-[#7F7F7F]"
                >
                  Service Requests
                </label>
              </div>
            </div>
            <div className="mb-5">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="product_req"
                  name="product_req"
                  className="h-4 w-4 rounded-lg border-2 border-[#7F7F7F] bg-none"
                />
                <label
                  htmlFor="product_req"
                  className="top-2 mx-3 text-lg font-bold text-[#7F7F7F]"
                >
                  Product Requests
                </label>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="m-10">
        <Footer />
      </div>
    </>
  );
};

export default CollabSettings;
