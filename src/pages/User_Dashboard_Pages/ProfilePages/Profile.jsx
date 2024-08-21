import React, { useState } from "react";
import {
  About,
  Links,
  ProfileDetailsCard,
} from "../../../components/Cards/ProfileCards";

const Profile = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = [
    { title: "About", content: <About /> },
    { title: "Links", content: <Links /> },
    { title: "Products", content: "" },
    { title: "Services", content: "" },
    { title: "Collab Opportunities", content: "" },
    { title: "Feedback", content: "" },
  ];
  return (
    <>
      <div className="pt-32">
        <div className="mx-auto w-[55%]">
          <ProfileDetailsCard />
        </div>
        <div className="mt-20 flex justify-center">
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={`flex cursor-pointer gap-4 px-2 py-2 text-center font-bold ${
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
        <div className="my-10 px-20">{tabs[activeTab].content}</div>
      </div>
    </>
  );
};

export default Profile;
