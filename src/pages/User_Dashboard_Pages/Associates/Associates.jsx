import React, { useState, useContext } from "react";
import { AssociatesContext } from "@/context/AssociatesContext";
import AssociatesList from "./Associateslist";
import OutgoingRequests from "./OutgoingRequests";
import IncomingRequest from "./IncomingRequest";

const Associates = () => {
  const { associatesLenght, incomingReqLenght, outgoingReqLenght } =
    useContext(AssociatesContext);

  const [activeTab, setActiveTab] = useState(0);
  const tabs = [
    { title: `Associates (${associatesLenght})`, content: <AssociatesList /> },
    {
      title: `Incoming Requests(${incomingReqLenght})`,
      content: <IncomingRequest />,
    },
    {
      title: `Outgoing Requests(${outgoingReqLenght})`,
      content: <OutgoingRequests />,
    },
  ];
  return (
    <>
      <div className="p-20">
        <div className="rounded-xl border-[4px] border-[#242222] px-5 py-10">
          <div className="flex justify-center">
            <div className="flex w-fit justify-center gap-4 rounded-lg bg-[#242222]">
              {tabs.map((tab, index) => (
                <button
                  key={index}
                  className={`cursor-pointer px-4 py-2 text-center font-bold ${
                    activeTab === index
                      ? "rounded-lg border-[#FFDF00] bg-[#FFDF00] text-[#0f0f0f]"
                      : "border-b-2 border-transparent text-white hover:text-[#FFDF00]"
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
      </div>
    </>
  );
};

export default Associates;
