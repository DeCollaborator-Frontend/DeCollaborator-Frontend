import React, { useState } from "react";
import { HomepageCards } from "../../components/Cards/HomepageCards";
import dummyData from "../../data/dummyData/homepageCardsData.json";
import { SideNavIcon } from "../../components/Icons/Icons";
import {
  DropdownIcon,
  ReverseDropdownIcon,
} from "../../components/Icons/Icons";
import SortBy, {
  HomePageSortBy,
} from "../../components/functionalComponents/Sort";

const AccordionSection = ({ title, isOpen, toggle, items }) => (
  <div>
    <button
      type="button"
      className={`flex w-full items-center justify-between px-3 pt-3 text-left font-medium ${
        isOpen ? "border-b pb-1" : "pb-3"
      }`}
      onClick={toggle}
    >
      <span>{title}</span>
      {isOpen ? (
        <ReverseDropdownIcon />
      ) : (
        <DropdownIcon className="stroke-white" />
      )}
    </button>
    <div className={`${isOpen ? "" : "hidden"} px-3`}>
      {items.map((item, index) => (
        <div key={index} className="flex py-2">
          <input
            type="checkbox"
            id={`checkbox-${index}`}
            className="h-5 w-5 appearance-none rounded-md border border-gray-300 checked:border-transparent checked:bg-blue-500"
          />
          <label htmlFor={`checkbox-${index}`} className="ml-2">
            {item}
          </label>
        </div>
      ))}
    </div>
  </div>
);

const MainContent = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [openAccordion, setOpenAccordion] = useState([false, false, false]);

  const toggleAccordion = (index) => {
    setOpenAccordion((prev) =>
      prev.map((isOpen, i) => (i === index ? !isOpen : false)),
    );
  };

  const accordionItems = ["A-Z", "A-Z", "A-Z"];

  return (
    <div className="flex">
      <div
        className={`fixed relative h-full overflow-x-hidden text-white transition-all duration-300 ${
          isExpanded ? "h-[800px] w-[80%]" : "w-0"
        }`}
      >
        <div className={`w-full p-4 ${isExpanded ? "mt-7 block" : "hidden"}`}>
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold">Filters</h2>
            <button
              className="text-white"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              X
            </button>
          </div>
          <div
            className="absolute left-0 z-10 mt-2 w-full origin-top-right bg-[#0F0F0F] text-center text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
            tabIndex="-1"
          >
            {["Mode", "Mode", "Mode"].map((title, index) => (
              <AccordionSection
                key={index}
                title={title}
                isOpen={openAccordion[index]}
                toggle={() => toggleAccordion(index)}
                items={accordionItems}
              />
            ))}
          </div>
        </div>
      </div>
      <div
        className={`flex-grow transition-all duration-300 ${
          isExpanded ? "sm:ml-10" : "sm:ml-0"
        } p-4`}
      >
        <div className="flex items-center justify-between">
          <button
            className="mb-4 p-2 text-white"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? "" : <SideNavIcon />}
          </button>
          <div className={isExpanded && "mb-4"}>
            <HomePageSortBy />
          </div>
        </div>
        <div>
          <div
            className={`grid gap-4 ${
              isExpanded
                ? "grid-cols-1 lg:grid-cols-3"
                : "grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4"
            }`}
          >
            {dummyData.users.map((data, id) => (
              <div className={`${isExpanded ? "hidden sm:block" : "block"}`}>
                <HomepageCards key={id} {...data} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
