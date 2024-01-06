import React from "react";

export const BasicInfoBrand = () => {
  return (
    <>
      <form action="" className="m-auto w-5/6 text-white    ">
        <div className="flex flex-row justify-between items-center">
          <label htmlFor="brand" className="mr-2">
            Brand Name
          </label>
          <input
            type="text"
            id="brand"
            name="brand"
            className="border rounded-md p-2 w-5/6 focus:outline-none bg-transparent"
          />
        </div>
        <div className="flex flex-row justify-between items-center mt-5">
          <label htmlFor="email" className="mr-2">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="border rounded-md p-2 w-5/6 focus:outline-none bg-transparent"
          />
        </div>
        <div className="flex flex-row justify-between mt-5">
          <label htmlFor="bio" className="mr-2">
            Bio
          </label>
          <textarea
            id="bio"
            name="bio"
            cols="30"
            rows="10"
            className="border rounded-md p-2 w-5/6 focus:outline-none bg-transparent"
          ></textarea>
        </div>
        <div className="flex flex-row justify-between mt-5">
          <label className="mr-2">Phase</label>
          <div className="flex w-5/6">
            <div className="flex items-center">
              <input type="radio" name="launch" id="pre" className="mr-2" />
              <label htmlFor="pre">Pre Launch</label>
            </div>
            <div className="flex items-center mx-8">
              <input type="radio" name="launch" id="post" className="mx-2" />
              <label htmlFor="post">Post Launch</label>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-between mt-5">
          <label htmlFor="industries">Industry</label>
          <select
            id="industries"
            className="bg-transparent border focus:outline-none text-white text-base rounded-md block w-5/6 p-2"
          >
            <option defaultValue className="bg-[#0F0F0F] text-base">
              Select Industry
            </option>
            <option value="1" className="bg-[#0F0F0F] text-base">
              Tech
            </option>
            <option value="2" className="bg-[#0F0F0F] text-base">
              Entertainment
            </option>
            <option value="3" className="bg-[#0F0F0F] text-base">
              Fashion
            </option>
            <option value="4" className="bg-[#0F0F0F] text-base">
              Finance
            </option>
            <option value="5" className="bg-[#0F0F0F] text-base">
              Others
            </option>
          </select>
        </div>
        <div className="flex flex-row justify-between items-center mt-5">
          <label htmlFor="specialties" className="mr-2">
            Specialties
          </label>
          <input
            type="text"
            id="specialties"
            name="specialties"
            className="border rounded-md p-2 w-5/6 focus:outline-none bg-transparent"
          />
        </div>
      </form>
    </>
  );
};
