/* eslint-disable no-unused-vars */
import { useSelector } from "react-redux";
import AppContentManagementTopSection from "../../Components/AppContentManagementTopSection";
import { FaPlus } from "react-icons/fa6";
import BannerComponent from "./BannerComponent";
import { iconRightArrow } from "../../../../assets/images/icons";
import Pagination from "../../../../shared/components/CustomPagination";
import { useState } from "react";
import { route } from "../../../../shared/constants/AllRoutes";
import { useNavigate } from "react-router-dom";

const BannerList = () => {
  const translations = useSelector((state) => state.settings.translations);
  const navigate = useNavigate();
  const [pageSize, setPageSize] = useState(5);
  const [pageNumber, setPageNumber] = useState(1);
  const totalRecords = 5;
  const totalPages = Math.ceil((totalRecords || 1) / pageSize);
  return (
    <div className="common-main-section">
      <AppContentManagementTopSection />
      <div className="common-page-toolbar">
        <label className="primary-title">Benner Management</label>
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
        <button
          className="add-btn"
          onClick={() =>
            navigate(route.appContentManagement.BannerManagement.Add)
          }
        >
          {" "}
          Add Banner <FaPlus style={{ fontSize: "15px" }} />
        </button>
      </div>
      <div
        className="banner-section"
        style={{
          marginTop: "30px",
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          columnGap: "10px", // Only affects columns
          rowGap: "50px", // Controls spacing between rows
        }}
      >
        <BannerComponent />
        <BannerComponent />
        <BannerComponent />
        <BannerComponent />
        <BannerComponent />
        <BannerComponent />
      </div>
      <div
        className="table-footer"
        style={{ marginTop: "30px", marginBottom: "20px" }}
      >
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

export default BannerList;
