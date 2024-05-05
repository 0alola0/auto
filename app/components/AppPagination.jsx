import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const goToPreviousPage = () => {
    onPageChange(currentPage - 1);
  };

  const goToNextPage = () => {
    onPageChange(currentPage + 1);
  };

  return (
    <div className="pagination flex items-center justify-center mt-4">
      <button
        disabled={currentPage === 1}
        onClick={goToPreviousPage}
        className="px-4 py-2 mr-2 rounded-md bg-blue-500 text-white disabled:bg-gray-300"
      >
        Previous
      </button>
      <span className="mx-4">{currentPage}</span>
      <button
        disabled={currentPage === totalPages}
        onClick={goToNextPage}
        className=" border-gray px-4 py-2 ml-2 rounded-md bg-white text-black disabled:bg-gray-300"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
