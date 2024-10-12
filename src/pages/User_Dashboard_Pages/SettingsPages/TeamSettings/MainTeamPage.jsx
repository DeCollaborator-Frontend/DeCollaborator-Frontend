import React, { useState } from "react";
import TeamOverview from "./TeamOverview";
import TeamPermission from "./TeamPermission";
import RolePermission from "./RolePermission";
import TeamMemberList from "./TeamMemberList";

const MainTeamPage = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = [
    { title: "Overview", content: <TeamOverview /> },
    { title: "Team Permissions", content: <TeamPermission /> },
    { title: "Role Permissions", content: <RolePermission /> },
    { title: "Members", content: <TeamMemberList /> },
  ];
  return (
    <>
      <div className="mb-20 pt-32">
        <h1 className="text-center text-[30px] text-[#E8E1DC] lg:text-[56px]">
          Team Settings
        </h1>
        <p className="text-center text-[15px] text-[#959595] md:text-[20px]">
          Edit the settings and features available to your team members.
        </p>
      </div>
      <div className="px-10 md:px-28">
        <div className="mt-10 rounded-[30px] border-[3px] border-[#242222] bg-transparent p-5 text-white md:p-8 lg:p-12">
          <div
            className={`mx-10 mb-5 rounded-md border border-[#262626] bg-[#262626] p-2`}
          >
            <h3 className="text-center text-xl font-bold text-[#fefefe]">
              Design Team
            </h3>
          </div>
          <div className="mb-10 flex justify-center">
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
          <div>{tabs[activeTab].content}</div>
        </div>
      </div>
    </>
  );
};

export default MainTeamPage;
