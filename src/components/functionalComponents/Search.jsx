import { useState } from "react";
import { SearchIcon } from "../Icons/Icons";

const SearchProposal = () => {
  return (
    <form action="" className="flex items-center">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3">
          <SearchIcon />
        </div>
        <input
          type="search"
          id="default-search"
          className="block w-[100%] rounded-lg border border-[#737373] bg-transparent py-2 pl-10 pr-1 text-sm text-white placeholder:text-sm  placeholder:font-bold focus:outline-none dark:placeholder-gray-400 lg:w-[640px]"
          placeholder="Proposals...."
          required
        />
      </div>
    </form>
  );
};

export default SearchProposal;
