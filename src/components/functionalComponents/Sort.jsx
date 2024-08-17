import { useState } from "react";
import { DropdownIcon } from "../Icons/Icons";

const SortBy = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleDropdown() {
    setIsOpen(!isOpen);
  }
  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="flex w-full items-center justify-center rounded-md border border-[#737373] bg-transparent px-3 py-2 font-semibold text-[#737373] text-[#737373]"
          id="menu-button"
          aria-expanded={isOpen}
          aria-haspopup="true"
          onClick={toggleDropdown}
        >
          <span>Sort By</span>
          <DropdownIcon className={"ml-2"} />
        </button>
      </div>
      {isOpen && (
        <div
          className="absolute right-0 z-10 mt-2 origin-top-right rounded border-2 border-[#737373] bg-[#0f0f0f] text-center text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabindex="-1"
        >
          <div className="py-1" role="none">
            <a
              href="#"
              className="block border-b-2 border-[#737373] px-4 py-2 text-white"
              role="menuitem"
              tabindex="-1"
              id="menu-item-0"
            >
              A-Z
            </a>
            <a
              href="#"
              className="block border-b-2 border-[#737373] px-4 py-2 text-white"
              role="menuitem"
              tabindex="-1"
              id="menu-item-1"
            >
              Z-A
            </a>
            <a
              href="#"
              className="block border-b-2 border-[#737373] px-4 py-2 text-white"
              role="menuitem"
              tabindex="-1"
              id="menu-item-2"
            >
              Date
            </a>
            <a
              href="#"
              className="block border-b-2 border-[#737373] px-4 py-2 text-white"
              role="menuitem"
              tabindex="-1"
              id="menu-item-2"
            >
              success...
            </a>
            <a
              href="#"
              className="block border-[#737373] px-4 py-2 text-white"
              role="menuitem"
              tabindex="-1"
              id="menu-item-2"
            >
              unsucce...
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default SortBy;
