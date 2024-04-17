import { useState } from "react";
import Pagination from "../Pagination";
import CollabOpportunities from "./CollabOpportunities";
import Organizations from "./Organizations";
import ProductsServices from "./ProductsServices";
import ReactPaginate from "react-paginate";

function SearchResults({ selectedTab, searchResult, itemsPerPage }) {
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = searchResult.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(searchResult.length / itemsPerPage);

  console.log(searchResult);
  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % searchResult.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`,
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <div className="mx-auto max-w-[90rem] px-6">
        {(selectedTab === "organizations" || selectedTab === "individuals") && (
          <Organizations currentItems={currentItems} />
        )}
        {(selectedTab === "products" || selectedTab === "services") && (
          <ProductsServices currentItems={currentItems} />
        )}
        {selectedTab === "collab opportunities" && (
          <CollabOpportunities currentItems={currentItems} />
        )}
        {/* <Pagination /> */}
      </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        pageCount={pageCount}
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
