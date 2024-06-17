import { useEffect, useState } from "react";
import Pagination from "../Pagination";
import CollabOpportunities from "./CollabOpportunities";
import Organizations from "./Organizations";
import ProductsServices from "./ProductsServices";
import ReactPaginate from "react-paginate";

function SearchResults({ selectedTab, searchResult, itemsPerPage }) {
  const [currentPage, setCurrentPage] = useState(0);
  console.log(currentPage);
  const pageCount = Math.ceil(searchResult.length / itemsPerPage);
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = searchResult.slice(startIndex, endIndex);

  useEffect(() => {
    setCurrentPage(0);
  }, [selectedTab]);

  function handlePageClick(selectedPage) {
    setCurrentPage(selectedPage.selected);
  }

  return (
    <>
      <div className="mx-auto max-w-[80rem] px-8">
        {(selectedTab === "organizations" || selectedTab === "individuals") && (
          <Organizations currentItems={currentItems} />
        )}
        {(selectedTab === "products" || selectedTab === "services") && (
          <ProductsServices
            currentItems={currentItems}
            selectedTab={selectedTab}
          />
        )}
        {selectedTab === "collab opportunities" && (
          <CollabOpportunities currentItems={currentItems} />
        )}
      </div>
      <ReactPaginate
        breakLabel="..."
        initialPage={0}
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        pageCount={pageCount}
        forcePage={currentPage}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        marginPagesDisplayed={2}
        pageLinkClassName="grid aspect-square h-10 cursor-pointer place-items-center rounded-lg hover:from-[#a67e19] hover:to-[#cbb100] text-xl bg-white"
        activeLinkClassName="bg-gradient-to-r from-[#daa521] to-[#fede01]"
        containerClassName="my-16 flex items-center justify-center gap-4 font-bold text-black"
        breakLinkClassName="grid aspect-square h-10 cursor-pointer place-items-center rounded-lg hover:from-[#a67e19] hover:to-[#cbb100] text-xl bg-white"
      />
    </>
  );
}

export default SearchResults;
