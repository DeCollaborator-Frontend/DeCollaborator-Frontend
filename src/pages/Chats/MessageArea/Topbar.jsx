import React from "react";

import { MdMailOutline, MdOutlineEmail } from "react-icons/md";
import { TiPin } from "react-icons/ti";
import { IoMdSearch } from "react-icons/io";
import { SlOptionsVertical } from "react-icons/sl";

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
        <button>
          <MdMailOutline className="text-[1.35rem] text-neutral-500" />
        </button>
        <button>
          <TiPin className="text-[1.35rem] text-neutral-500" />
        </button>
        <button>
          <IoMdSearch className="text-[1.35rem] text-neutral-500" />
        </button>
        <button>
          <SlOptionsVertical className="text-[1.35rem] text-neutral-500" />
        </button>
      </div>
    </div>
  );
};

export default Topbar;
