/* eslint-disable react/prop-types */

import ButtonComponent from "../Buttoncomponent";

function Pagination({ currentPage, totalPages, onPageChange }) {
  return (
    <div className="pagination">
      <ButtonComponent
        label="Previous"
        onClick={() => onPageChange(currentPage - 1)}
        className="btn-text"
        disable={currentPage === 1}
      />
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index + 1}
          className={currentPage === index + 1 ? "active" : "disable"}
          onClick={() => onPageChange(index + 1)}
        >
          {index + 1}
        </button>
      ))}
      <ButtonComponent
        label="Next"
        onClick={() => onPageChange(currentPage + 1)}
        className="btn-text"
        disable={currentPage === totalPages}
      />
    </div>
  );
}

export default Pagination;
