import React, { useState } from "react";
import {
  DashboardListCard,
  DashboardGridCard,
} from "../../components/Cards/DashboardCards";

const Main = () => {
  const [isGrid, setIsGrid] = useState(false);

  const handleChangeToGrid = () => {
    setIsGrid(true);
  };
  const handleChangeToList = () => {
    setIsGrid(false);
  };

  return (
    <>
      <div className="bg-[#0f0f0f] p-20">
        <div className="flex-end flex bg-white">
          <button onClick={handleChangeToGrid}>Grid View</button>
          <button onClick={handleChangeToList}>List View</button>
        </div>
        <div className="rounded-xl border-[4px] border-[#242222] px-5 py-10">
          {isGrid ? (
            <DashboardGridCard />
          ) : (
            <div className="flex flex-col items-center justify-center gap-8">
              <DashboardListCard />
              <DashboardListCard />
              <DashboardListCard />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Main;
