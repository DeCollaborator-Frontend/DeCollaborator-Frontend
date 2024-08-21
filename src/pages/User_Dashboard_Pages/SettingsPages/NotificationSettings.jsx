import React from "react";
import { NotificationsAccordion } from "../../../components/Accordion";
import { UserNavbar } from "../../../components/Navbar";

const NotificationSettings = () => {
  const settingstype = [
    "Incoming Collab Proposals",
    "Outgoing Collab Proposals",
    "Ongoing Collab Proposals",
    "New Messages",
    "New Applicants on Services and Opportunities Listed",
    "Services and Opportunities Applied for",
    "Opportunities matching your services",
  ];
  return (
    <>
      <div className="mb-20 pt-32">
        <h1 className="text-center text-[56px] text-[#E8E1DC]">
          Notification Settings
        </h1>
        <p className="text-center text-[20px] text-[#959595]">
          Select where and how you want to receive notifications.
        </p>
      </div>
      <div className="px-28">
        <div className="rounded-xl border-4 border-[#242222] px-28 py-10">
          <div className="rounded-xl bg-[#262626] p-5">
            {settingstype.map((type, index) => (
              <NotificationsAccordion key={index} type={type} />
            ))}
            <div className="flex justify-center">
              <button className="ml-5 mt-4 rounded border-2 border-[#FFDF00] bg-[#FFDF00] p-2.5 text-lg font-bold text-[#0f0f0f]">
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotificationSettings;
