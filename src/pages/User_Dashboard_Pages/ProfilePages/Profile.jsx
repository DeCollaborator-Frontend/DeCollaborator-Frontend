import React, { useState } from "react";
import Logo from "../../../assests/images/de_logo.png";
import {
  About,
  Links,
  ProfileCollabOpportunities,
  ProfileDetailsCard,
  ProfileProductsCard,
  ProfileServicesCard,
} from "../../../components/Cards/ProfileCards";

const Profile = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = [
    { title: "About", content: <About /> },
    { title: "Links", content: <Links /> },
    { title: "Products", content: <ProfileProductsCard /> },
    { title: "Services", content: <ProfileServicesCard /> },
    { title: "Collab Opportunities", content: <ProfileCollabOpportunities /> },
    { title: "Feedback", content: "" },
  ];
  return (
    <>
      <div className="pt-32">
        <section className="mb-12 flex flex-col items-center">
          <div className="h-[100px] w-[100px] scale-[1.8] rounded-full border border-[gold] bg-black p-7">
            <img src={Logo} alt="logo.png" className="m-auto w-[60px]" />
          </div>
          <div className="ml-3 mt-12">
            <span className="text-xl font-bold text-[#F7F5DD]">Demitchy</span>
            <span className="ml-2 rounded-xl bg-[#E8E1DC0D] p-1 text-xs text-[#F7F5DD]">
              Individual
            </span>
          </div>
        </section>
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
