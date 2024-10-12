import React from "react";
import { SettingsIcon } from "lucide-react";
import image from "../../assests/images/Avatar/01.png";
import { Link } from "react-router-dom";

const Notifications = () => {
  return (
    <>
      <div className="absolute mt-[25px] translate-x-[-270px] rounded-md bg-[#262626] px-1 text-white shadow-lg md:right-0 md:w-[420px] md:translate-x-48">
        <div className="flex justify-between px-5 py-2">
          <h4>Notifications(4)</h4>
          <Link to={"/settings/notifications"}>
            <SettingsIcon width={20} />
          </Link>
        </div>
        <div className="mb-1 rounded-b-md bg-[#333333] px-1 text-[10px] md:text-xs">
          <div className="my-2 text-end">Mark all as read</div>
          <div className="mb-2 flex items-center rounded-md bg-[#262626] px-2 py-2">
            <img src={image} className="w-[35px] rounded-full md:w-[50px]" />
            <div className="ml-2 flex flex-col justify-center gap-2">
              <div className="flex justify-evenly md:justify-between">
                <div className="translate-x-[-23px] md:translate-x-[0]">
                  Demitchy posted a feedback
                </div>
                <div className="text-[gray]">3hrs ago</div>
              </div>
              <div className="w-[290px] translate-x-[-75px]">
                This is Niceeeeee!!!!!!!!!!!!
              </div>
            </div>
          </div>
          <div className="mb-2 flex items-center rounded-md bg-[#262626] px-2 py-2">
            <img src={image} className="w-[35px] rounded-full md:w-[50px]" />
            <div className="ml-2 flex flex-col justify-center gap-2">
              <div className="flex justify-between">
                <div>Demitchy posted a feedback</div>
                <div className="text-[gray]">3hrs ago</div>
              </div>
              <div className="flex gap-2">
                <button className="rounded border-2 border-[#FFDF00] bg-[#FFDF00] px-1 py-1 text-[10px] font-bold text-[#0f0f0f]">
                  Accept Proposal
                </button>
                <button className="rounded border-2 border-[#FFDF00] bg-none px-1 py-1 text-[10px] text-[#FFDF00]">
                  Review Proposal
                </button>
                <button className="rounded border-2 border-[#FFDF00] bg-none px-1 py-1 text-[10px] text-[#FFDF00]">
                  Reject Proposal
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Notifications;
