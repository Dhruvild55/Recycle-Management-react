/* eslint-disable no-unused-vars */
import { useSelector } from "react-redux";
import { sponsorHeader, sponsorList } from "./Config";
import CustomTable from "../../../shared/components/CustomTable";
import { iconRightArrow } from "../../../assets/images/icons";
import Pagination from "../../../shared/components/CustomPagination";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SponsorManagement = () => {
  const translations = useSelector((state) => state.settings.translations);
  const [pageSize, setPageSize] = useState(5);
  const [pageNumber, setPageNumber] = useState(1);
  const navigate = useNavigate();

  const totalPages = Math.ceil((sponsorList.length || 1) / pageSize);

  console.log(translations);
  return (
    <div className="common-main-section">
      <div className="common-page-toolbar" style={{ marginTop: "0px" }}>
        <label className="primary-title"> List of Sponsor</label>
        <div>
          <input
            className="search-input"
            type="text"
            placeholder={translations.search}
          />
        </div>
        <div>
          <label className="back-text">{translations.filter}:</label>
          <select>
            <option>All</option>
          </select>
        </div>
      </div>
      <CustomTable headers={sponsorHeader(navigate)} data={sponsorList} />
      <div className="table-footer">
        <div>
          <span className="back-text" style={{ color: "#181D27" }}>
            {translations.showing} 10 {translations.entries}{" "}
          </span>
          <img src={iconRightArrow} />
        </div>
        <Pagination
          currentPage={pageNumber}
          totalPages={totalPages}
          onPageChange={setPageNumber}
        />
      </div>
    </div>
  );
};

export default SponsorManagement;
