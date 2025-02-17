/* eslint-disable react/prop-types */

import { useSelector } from "react-redux";
import ButtonComponent from "../Buttoncomponent";

function Pagination({ currentPage, totalPages, onPageChange }) {
  const translations = useSelector((state) => state.settings.translations);

  return (
    <div className="pagination">
      <ButtonComponent
        label={translations.previous}
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
        label={translations.next}
        onClick={() => onPageChange(currentPage + 1)}
        className="btn-text"
        disable={currentPage === totalPages}
      />
    </div>
  );
}

export default Pagination;
