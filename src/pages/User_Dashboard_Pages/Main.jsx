import React, { useEffect, useState } from "react";
import {
  DashboardListCard,
  DashboardGridCard,
} from "../../components/Cards/DashboardCards";

const Main = () => {
  const [isGrid, setIsGrid] = useState(null);
  const [activeGridStyle, setActiveGridStyle] = useState("");
  const [activeListStyle, setActiveListStyle] = useState("");

  useEffect(() => {
    setActiveListStyle("bg-[#242222] text-[gold]");
  }, []);

  const handleChangeToGrid = () => {
    setIsGrid(true);
    setActiveGridStyle("bg-[#242222] text-[gold]");
  };
  const handleChangeToList = () => {
    setIsGrid(false);
    setActiveListStyle("bg-[#242222] text-[gold]");
  };

  return (
    <>
      <div className="p-20">
        <div className="mb-3 flex justify-end">
          <button
            onClick={handleChangeToList}
            className={`${!isGrid ? activeListStyle : "border-[gold] text-white"} mr-5 flex rounded-xl border border-[#242222] px-3 py-2`}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2"
            >
              <path
                d="M21 5.25H3C2.59 5.25 2.25 4.91 2.25 4.5C2.25 4.09 2.59 3.75 3 3.75H21C21.41 3.75 21.75 4.09 21.75 4.5C21.75 4.91 21.41 5.25 21 5.25Z"
                fill="currentColor"
              />
              <path
                d="M21 10.25H3C2.59 10.25 2.25 9.91 2.25 9.5C2.25 9.09 2.59 8.75 3 8.75H21C21.41 8.75 21.75 9.09 21.75 9.5C21.75 9.91 21.41 10.25 21 10.25Z"
                fill="currentColor"
              />
              <path
                d="M21 15.25H3C2.59 15.25 2.25 14.91 2.25 14.5C2.25 14.09 2.59 13.75 3 13.75H21C21.41 13.75 21.75 14.09 21.75 14.5C21.75 14.91 21.41 15.25 21 15.25Z"
                fill="currentColor"
              />
              <path
                d="M21 20.25H3C2.59 20.25 2.25 19.91 2.25 19.5C2.25 19.09 2.59 18.75 3 18.75H21C21.41 18.75 21.75 19.09 21.75 19.5C21.75 19.91 21.41 20.25 21 20.25Z"
                fill="currentColor"
              />
            </svg>
            List View
          </button>
          <button
            onClick={handleChangeToGrid}
            className={`${isGrid ? activeGridStyle : "border-[gold] text-white"} flex rounded border border-[#242222] px-3 py-2 `}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="mr-2"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_18283_5831)">
                <path
                  d="M0 2.25C0 1.65326 0.237053 1.08097 0.65901 0.65901C1.08097 0.237053 1.65326 0 2.25 0L21.75 0C22.3467 0 22.919 0.237053 23.341 0.65901C23.7629 1.08097 24 1.65326 24 2.25V21.75C24 22.3467 23.7629 22.919 23.341 23.341C22.919 23.7629 22.3467 24 21.75 24H2.25C1.65326 24 1.08097 23.7629 0.65901 23.341C0.237053 22.919 0 22.3467 0 21.75L0 2.25ZM2.25 1.5C2.05109 1.5 1.86032 1.57902 1.71967 1.71967C1.57902 1.86032 1.5 2.05109 1.5 2.25V7.5H7.5V1.5H2.25ZM7.5 9H1.5V15H7.5V9ZM9 15H15V9H9V15ZM7.5 16.5H1.5V21.75C1.5 21.9489 1.57902 22.1397 1.71967 22.2803C1.86032 22.421 2.05109 22.5 2.25 22.5H7.5V16.5ZM9 16.5V22.5H15V16.5H9ZM16.5 16.5V22.5H21.75C21.9489 22.5 22.1397 22.421 22.2803 22.2803C22.421 22.1397 22.5 21.9489 22.5 21.75V16.5H16.5ZM16.5 15H22.5V9H16.5V15ZM16.5 7.5H22.5V2.25C22.5 2.05109 22.421 1.86032 22.2803 1.71967C22.1397 1.57902 21.9489 1.5 21.75 1.5H16.5V7.5ZM15 7.5V1.5H9V7.5H15Z"
                  fill="currentColor"
                />
              </g>
              <defs>
                <clipPath id="clip0_18283_5831">
                  <rect width="24" height="24" fill="currentColor" />
                </clipPath>
              </defs>
            </svg>
            Grid View
          </button>
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
