//Same card design but 2 different grid systems
// 4 card grid system
// 6 card grid system
import DashBoardImg from "../../assests/images/dashboard.png";
import dummyData from "../../data/dummyData/homepageCardsData.json";
import { useEffect, useState } from "react";
import { PaginationBar } from "../Pagination";

export const HomepageCards = (props) => {
  const { username, about, collabs, avatar, available, category } = props;
  return (
    <>
      <div className="m-auto rounded-lg border border-[#FFD21D] md:w-[250px] lg:w-full">
        <img
          src={avatar}
          alt={username}
          className="h-[200px] w-full rounded-t-lg"
        />
        <div className="font-poppins rounded-b-lg bg-[#242222] pb-3 text-white">
          <div className="m-auto py-3">
            <h3 className="text-center text-xl font-bold">{username}</h3>
          </div>
          <div className="border-b border-t border-[#E8E1DC4D] p-2 py-1">
            <p className="text-center text-sm">{about}</p>
            <div className="flex justify-between rounded p-2 text-xs">
              <span>Open to collabs</span>
              <span>{collabs}</span>
            </div>
            <div className="flex justify-between rounded p-2 text-xs">
              <span>Available</span>
              <span>{available}</span>
            </div>
            <div className="flex justify-between rounded p-2 text-xs">
              <span>Category</span>
              <span>{category}</span>
            </div>
          </div>
          <div className="flex justify-center">
            <button className="mt-5 w-9/12 cursor-pointer rounded-lg border border-[#FFDF00] bg-[#FFDF00] px-3 py-2 text-[#FFDF00]">
              <p className="font-poppins flex items-center justify-center text-[16px] font-bold text-black">
                <span>Open</span>
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 18 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-2"
                >
                  <path
                    d="M2.33333 2.5L9 9.16667L15.6667 2.5"
                    stroke="#000"
                    stroke-width="3.75"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

const HomepageCardsGrid = () => {
  // const itemsPerPage = 4;

  // const [currentPage, setCurrentPage] = useState(1);
  // const [totalPages, setTotalPages] = useState(0);

  // const handlePageChange = (page) => {
  //   if (page > 0 && page <= totalPages) {
  //     setCurrentPage(page);
  //   }
  // };

  // const getSlicedData = () => {
  //   const startIndex = (currentPage - 1) * itemsPerPage;
  //   const endIndex = startIndex + itemsPerPage;

  //   return dummyData.users.slice(startIndex, endIndex);
  // };
  return (
    <>
      <div className="grid grid-cols-1 gap-4 sm:p-5 md:grid-cols-2 lg:grid-cols-4 lg:p-10">
        {dummyData.users.map((data, id) => {
          return <HomepageCards key={id} {...data} />;
        })}
      </div>
      {/* <PaginationBar
        data={dummyData.user}
        currentPage={currentPage}
        handlePageChange={handlePageChange}
        itemsPerPage={itemsPerPage}
        totalPages={totalPages}
        setTotalPages={setTotalPages}
        className={`m-4`}
      /> */}
    </>
  );
};

export default HomepageCardsGrid;
