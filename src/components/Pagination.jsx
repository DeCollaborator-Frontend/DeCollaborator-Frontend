import { useEffect, useState } from "react";

export const PaginationBar = ({
  data,
  currentPage,
  handlePageChange,
  itemsPerPage,
  totalPages,
  setTotalPages,
}) => {
  useEffect(() => {
    setTotalPages(Math.ceil(data.length / itemsPerPage));
  }, [data]);

  const renderPageButtons = () => {
    const pageButtons = [];

    if (totalPages <= 5) {
      // If there are 5 or fewer pages, display all pages
      for (let page = 1; page <= totalPages; page++) {
        pageButtons.push(renderPageButton(page));
      }
    } else if (currentPage <= 4) {
      // Display the first 5 pages, then add an ellipsis, then show the last page
      for (let page = 1; page <= 5; page++) {
        pageButtons.push(renderPageButton(page));
      }
      pageButtons.push(<span key="ellipsis-first">...</span>);
      pageButtons.push(renderPageButton(totalPages));
    } else if (currentPage >= totalPages - 3) {
      // Display an ellipsis, then show the last 4 pages
      pageButtons.push(renderPageButton(1));
      pageButtons.push(<span key="ellipsis-last">...</span>);
      for (let page = totalPages - 3; page <= totalPages; page++) {
        pageButtons.push(renderPageButton(page));
      }
    } else {
      // Display the first page, add an ellipsis, show the current page and the 3 pages before and after it, add another ellipsis, and finally show the last page
      pageButtons.push(renderPageButton(1));
      pageButtons.push(
        <span key="ellipsis-middle" className="ellipse">
          ...
        </span>
      );
      for (let page = currentPage - 2; page <= currentPage + 2; page++) {
        pageButtons.push(renderPageButton(page));
      }
      pageButtons.push(
        <span key="ellipsis-middle2" className="ellipse">
          ...
        </span>
      );
      pageButtons.push(renderPageButton(totalPages));
    }

    return pageButtons;
  };

  const renderPageButton = (page) => (
    <li aria-label={`Goto Page ${page}`} key={page}>
      <a
        className={`px-2 py-1 border border-1 rounded-lg mx-2 font-bold text-sm text-black  ${
          currentPage === page ? "bg-[yellow]" : "bg-[#E8E1DC]"
        }`}
        href="./"
        onClick={(e) => {
          e.preventDefault();
          handlePageChange(page);
        }}
      >
        {page}
      </a>
    </li>
  );

  return (
    <nav
      role="navigation"
      aria-label="Page Navigation"
      className="flex justify-center items-center text-white font-bold"
    >
      <ul className="list-unstyled flex justify-center items-center">
        {renderPageButtons()}
      </ul>
    </nav>
  );
};
