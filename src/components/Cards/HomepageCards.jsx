//Same card design but 2 different grid systems
// 4 card grid system
// 6 card grid system
import DashBoardImg from "../../assests/images/dashboard.png";
import dummyData from "../../data/dummyData/homepageCardsData.json";
import { useEffect, useState } from "react";
import { PaginationBar } from "../Pagination";
import { Link } from "react-router-dom";

export const HomepageCards = (props) => {
  const { username, about, collabs, avatar, available, category } = props;
  return (
    <>
      <div className="m-auto rounded-xl border border-[#FFD21D] md:w-[250px] lg:w-full">
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
            <button className="mt-5 w-9/12 cursor-pointer rounded-xl border border-[#FFDF00] bg-[#FFDF00] px-3 py-2 text-[#FFDF00]">
              <p className="font-poppins flex items-center justify-center text-[16px] font-bold text-black">
                <Link to={"collab"}>
                  <span>Collab</span>
                </Link>
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
