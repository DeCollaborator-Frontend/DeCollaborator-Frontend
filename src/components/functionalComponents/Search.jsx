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
          className="block w-[640px] pr-1 py-2 pl-10 text-sm text-white border border-[#737373] rounded-lg bg-transparent dark:placeholder-gray-400  placeholder:text-sm placeholder:font-bold"
          placeholder="Proposals...."
          required
        />
      </div>
    </form>
  );
};

export default SearchProposal;
