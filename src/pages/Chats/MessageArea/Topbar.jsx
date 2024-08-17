import React from "react";

const Topbar = () => {
  return (
    <div className="border-b-1 flex justify-between border-neutral-500 p-5">
      <div className="flex items-end items-center gap-2">
        <div className="h-10 w-10 rounded-full bg-neutral-500"></div>
        <div>
          <h3 className="font-bold text-yellow-400">
            Web3 Product Application
          </h3>
          <span className="text-sm">Okay bears, 8bit</span>
        </div>
      </div>
      <div className="flex items-end gap-4">
        <div className="h-6 w-6 rounded-full bg-neutral-500"></div>
        <div className="h-6 w-6 rounded-full bg-neutral-500"></div>
        <div className="h-6 w-6 rounded-full bg-neutral-500"></div>
        <div className="h-6 w-6 rounded-full bg-neutral-500"></div>
      </div>
    </div>
  );
};

export default Topbar;
