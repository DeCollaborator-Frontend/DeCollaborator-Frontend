import { useState } from "react";
import React from "react";
import { UserNavbar } from "../../components/Navbar";
import Main from "./Main";
import ProposalsCard from "../../components/Cards/ProposalsCard";
import Associates from "./Associates/Associates";
import ApplicationCard from "@/components/Cards/ApplicationsCard";

const UserDashboard = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = [
    {
      title: "Main",
      content: <Main />,
      subheading: "Check out latest collaborators",
    },
    { title: "Collab Proposal", content: <ProposalsCard /> },
    { title: "My Applications", content: <ApplicationCard /> },
    { title: "Associates", content: <Associates /> },
  ];
  return (
    <>
      <main>
        <div className="px-3 py-32 text-white md:px-10 md:px-8 ">
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-thin capitalize md:text-5xl lg:text-6xl">
              Dashboard
            </h1>
            <p className="mt-5 text-lg text-gray-400">
              {tabs[activeTab].subheading}
            </p>
          </div>
          <div className="no-scrollbar mt-20 w-full overflow-x-auto">
            <div className="flex justify-center whitespace-nowrap">
              {tabs.map((tab, index) => (
                <button
                  key={index}
                  className={`flex cursor-pointer gap-4 px-2 py-1 text-xs font-bold md:px-4 md:py-1 md:text-base ${
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
          </div>
          <div className="">{tabs[activeTab].content}</div>
        </div>
      </main>
    </>
  );
};

export default UserDashboard;
