import React, { useState } from "react";
import MonthlyPricing from "./MonthlyPricing";
import AnnualPricing from "./AnnualPricing";

const PricingPage = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = [
    { title: "Monthly", content: <MonthlyPricing /> },
    { title: "Annually", content: <AnnualPricing /> },
  ];
  return (
    <>
      <div className="px-8 py-32 text-white md:px-10">
        <div className="mb-12 text-center">
          <h1 className="text-3xl capitalize md:text-4xl lg:text-6xl">
            Pricing Plan
          </h1>
          <p className="mt-3 text-lg text-gray-400">
            Choose the plan that suits your needs
          </p>
        </div>
        <div className="flex justify-center">
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={`flex cursor-pointer px-2 py-2 text-center font-bold ${
                activeTab === index
                  ? "border-b-2 border-[#FFDF00] text-[#FFDF00]"
                  : "border-b-2 border-transparent text-gray-500 hover:text-[#FFDF00]"
              }`}
              onClick={() => setActiveTab(index)}
            >
              {tab.title}
            </button>
          ))}
        </div>
        <div className="">{tabs[activeTab].content}</div>
      </div>
    </>
  );
};

export default PricingPage;
