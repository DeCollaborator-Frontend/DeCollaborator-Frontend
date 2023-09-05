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
          className="flex w-full justify-center items-center rounded-md px-3 py-2 text-[#737373] font-semibold text-gray-900 border border-[#737373] bg-transparent"
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
          className="absolute right-0 z-10 mt-2 origin-top-right bg-black rounded text-center border-[#737373] border-2 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none text-base"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabindex="-1"
        >
          <div className="py-1" role="none">
            <a
              href="#"
              className="text-white block px-4 py-2 border-b-2 border-[#737373]"
              role="menuitem"
              tabindex="-1"
              id="menu-item-0"
            >
              A-Z
            </a>
            <a
              href="#"
              className="text-white block px-4 py-2 border-b-2 border-[#737373]"
              role="menuitem"
              tabindex="-1"
              id="menu-item-1"
            >
              Z-A
            </a>
            <a
              href="#"
              className="text-white block px-4 py-2 border-b-2 border-[#737373]"
              role="menuitem"
              tabindex="-1"
              id="menu-item-2"
            >
              Date
            </a>
            <a
              href="#"
              className="text-white block px-4 py-2 border-b-2 border-[#737373]"
              role="menuitem"
              tabindex="-1"
              id="menu-item-2"
            >
              success...
            </a>
            <a
              href="#"
              className="text-white block px-4 py-2 border-[#737373]"
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
