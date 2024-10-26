import React from "react";

const NewTeamForm = ({ closeModal }) => {
  return (
    <>
      <div>
        <div className="p-5">
          <h1 className="text-xl font-bold text-[#A9A9A9]">Create New Team</h1>
        </div>
        <form className="p-8 text-black">
          <div className="relative mb-5">
            <input
              type="text"
              id="role"
              name="role"
              placeholder=" "
              className="peer block w-full appearance-none rounded border border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:outline-none"
            />
            <label
              htmlFor="role"
              className="absolute top-2 z-10 mx-2 origin-[0] -translate-y-4 scale-75 transform bg-[#242222] text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2"
            >
              Team Name
            </label>
          </div>
          <div className="flex flex-wrap justify-end pb-3 font-bold">
            <button
              type="submit"
              className="mt-4 w-[120px] rounded border-2 border-[#FFDF00] bg-[#FFDF00] p-2.5 text-[#0f0f0f]"
            >
              Create Team
            </button>
            <button
              className="ml-5 mt-4 w-[120px] rounded border-2 border-[#FFDF00] bg-none p-2.5 text-[#FFDF00]"
              onClick={closeModal}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default NewTeamForm;
