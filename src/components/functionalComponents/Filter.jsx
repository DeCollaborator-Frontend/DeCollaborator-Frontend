import React, { useState } from "react";
import { DropdownIcon, ReverseDropdownIcon, SideNavIcon } from "../Icons/Icons";

const Filter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openAccordion, setopenAccordion] = useState(false);
  const [openAccordion1, setopenAccordion1] = useState(false);
  const [openAccordion2, setopenAccordion2] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const toggleAccordion = () => {
    setopenAccordion(!openAccordion);
    setopenAccordion1(false);
    setopenAccordion2(false);
  };
  const toggleAccordion1 = () => {
    setopenAccordion1(!openAccordion1);
    setopenAccordion(false);
    setopenAccordion2(false);
  };
  const toggleAccordion2 = () => {
    setopenAccordion2(!openAccordion2);
    setopenAccordion1(false);
    setopenAccordion(false);
  };
  return (
    <>
      <div className="relative inline-block text-left">
        <div>
          <button
            type="button"
            id="menu-button"
            aria-expanded={isOpen}
            aria-haspopup="true"
            onClick={toggleDropdown}
          >
            <SideNavIcon />
          </button>
        </div>
        {isOpen && (
          <div
            className="absolute left-0 z-10 mt-2 origin-top-right text-center shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none text-base w-[200px] bg-[#0F0F0F]"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
            tabindex="-1"
          >
            <div className="">
              <button
                type="button"
                className={`flex items-center justify-between w-full px-3 pt-3 font-medium text-left ${
                  openAccordion ? "border-b pb-1" : "pb-3"
                }`}
                onClick={toggleAccordion}
              >
                <span>Mode</span>
                {openAccordion ? (
                  <ReverseDropdownIcon />
                ) : (
                  <DropdownIcon className={"stroke-white"} />
                )}
              </button>
              <div className={`${openAccordion ? "" : "hidden"} px-3`}>
                <div className="flex py-2">
                  <input
                    type="checkbox"
                    name=""
                    id="myCheckbox"
                    className="appearance-none h-5 w-5 border border-gray-300 rounded-md checked:bg-blue-500 checked:border-transparent"
                  />
                  <label htmlFor="myCheckbox" className="ml-2">
                    A-Z
                  </label>
                </div>
                <div className="flex py-2">
                  <input
                    type="checkbox"
                    name=""
                    id="myCheckbox"
                    className="appearance-none h-5 w-5 border border-gray-300 rounded-md checked:bg-blue-500 checked:border-transparent"
                  />
                  <label htmlFor="myCheckbox" className="ml-2">
                    A-Z
                  </label>
                </div>
                <div className="flex py-2">
                  <input
                    type="checkbox"
                    name=""
                    id="myCheckbox"
                    className="appearance-none h-5 w-5 border border-gray-300 rounded-md checked:bg-blue-500 checked:border-transparent"
                  />
                  <label htmlFor="myCheckbox" className="ml-2">
                    A-Z
                  </label>
                </div>
              </div>
            </div>
            <div className="">
              <button
                type="button"
                className={`flex items-center justify-between w-full px-3 pt-3 font-medium text-left ${
                  openAccordion1 ? "border-b pb-1" : "pb-3"
                }`}
                onClick={toggleAccordion1}
              >
                <span>Mode</span>
                {openAccordion1 ? (
                  <ReverseDropdownIcon />
                ) : (
                  <DropdownIcon className={"stroke-white"} />
                )}
              </button>
              <div className={`${openAccordion1 ? "" : "hidden"} px-3`}>
                <div className="flex py-2">
                  <input
                    type="checkbox"
                    name=""
                    id="myCheckbox"
                    className="appearance-none h-5 w-5 border border-gray-300 rounded-md checked:bg-blue-500 checked:border-transparent"
                  />
                  <label htmlFor="myCheckbox" className="ml-2">
                    A-Z
                  </label>
                </div>
                <div className="flex py-2">
                  <input
                    type="checkbox"
                    name=""
                    id="myCheckbox"
                    className="appearance-none h-5 w-5 border border-gray-300 rounded-md checked:bg-blue-500 checked:border-transparent"
                  />
                  <label htmlFor="myCheckbox" className="ml-2">
                    A-Z
                  </label>
                </div>
                <div className="flex py-2">
                  <input
                    type="checkbox"
                    name=""
                    id="myCheckbox"
                    className="appearance-none h-5 w-5 border border-gray-300 rounded-md checked:bg-blue-500 checked:border-transparent"
                  />
                  <label htmlFor="myCheckbox" className="ml-2">
                    A-Z
                  </label>
                </div>
              </div>
            </div>
            <div className="">
              <button
                type="button"
                className={`flex items-center justify-between w-full px-3 pt-3 font-medium text-left ${
                  openAccordion2 ? "border-b pb-1" : "pb-3"
                }`}
                onClick={toggleAccordion2}
              >
                <span>Mode</span>
                {openAccordion2 ? (
                  <ReverseDropdownIcon />
                ) : (
                  <DropdownIcon className={"stroke-white"} />
                )}
              </button>
              <div className={`${openAccordion2 ? "" : "hidden"} px-3`}>
                <div className="flex py-2">
                  <input
                    type="checkbox"
                    name=""
                    id="myCheckbox"
                    className="appearance-none h-5 w-5 border border-gray-300 rounded-md checked:bg-blue-500 checked:border-transparent"
                  />
                  <label htmlFor="myCheckbox" className="ml-2">
                    A-Z
                  </label>
                </div>
                <div className="flex py-2">
                  <input
                    type="checkbox"
                    name=""
                    id="myCheckbox"
                    className="appearance-none h-5 w-5 border border-gray-300 rounded-md checked:bg-blue-500 checked:border-transparent"
                  />
                  <label htmlFor="myCheckbox" className="ml-2">
                    A-Z
                  </label>
                </div>
                <div className="flex py-2">
                  <input
                    type="checkbox"
                    name=""
                    id="myCheckbox"
                    className="appearance-none h-5 w-5 border border-gray-300 rounded-md checked:bg-blue-500 checked:border-transparent"
                  />
                  <label htmlFor="myCheckbox" className="ml-2">
                    A-Z
                  </label>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Filter;
