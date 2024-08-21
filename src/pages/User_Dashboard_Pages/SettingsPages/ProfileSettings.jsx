import React, { useState } from "react";
import { UserNavbar } from "../../../components/Navbar";
import {
  BasicInfoBrand,
  CollabOpportunities,
  LinkSettings,
  Product,
} from "../../../components/Forms/SettingsForms/ProfileSettingsForm";
import Filters from "../../Search/Results/Filters";

const ProfileSettings = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = [
    { title: "Basic Info", content: <BasicInfoBrand /> },
    { title: "Links", content: <LinkSettings /> },
    { title: "Products", content: <Product selectedTab={"products"} /> },
    { title: "Services", content: <Product selectedTab={"service"} /> },
    { title: "Collab Opportunities", content: <CollabOpportunities /> },
  ];
  return (
    <>
      <UserNavbar />
      <div className="bg-[#0f0f0f] px-8 py-32 text-white md:px-10 ">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-thin capitalize md:text-5xl lg:text-6xl">
            Profile Settings
          </h1>
          <p className="mt-5 text-lg text-gray-400">
            Edit your profile info here
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
        <div className="mt-10 rounded-[30px] border-[3px] border-[#242222] bg-transparent p-5 text-white md:p-8 lg:p-12">
          {tabs[activeTab].content}
        </div>
      </div>
    </>
  );
};

export default ProfileSettings;
