/* eslint-disable no-unused-vars */
import { useSelector } from "react-redux";
import { sponsorHeader, sponsorList } from "./Config";
import CustomTable from "../../../shared/components/CustomTable";
import { iconRightArrow } from "../../../assets/images/icons";
import Pagination from "../../../shared/components/CustomPagination";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchInput from "../../../shared/components/SearchInput";
import FilterDropdown from "../../../shared/components/FillerDropdown";

const SponsorManagement = () => {
  const translations = useSelector((state) => state.settings.translations);
  const [pageSize, setPageSize] = useState(5);
  const [pageNumber, setPageNumber] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterText, setFilter] = useState("All");
  const navigate = useNavigate();

  const totalPages = Math.ceil((sponsorList.length || 1) / pageSize);

  return (
    <div className="common-main-section">
      <div className="common-page-toolbar" style={{ marginTop: "0px" }}>
        <label className="primary-title"> List of Sponsor</label>
        <div className="tool-section" style={{ gap: "40px" }}>
          <SearchInput
            placeholder="search"
            onSearch={(query) => {
              setSearchTerm(query);
              setPageNumber(1);
            }}
          />
          <FilterDropdown
            label={translations.filter}
            options={[
              { value: "", label: "All" },
              { value: "Publish", label: "Publish" },
              { value: "Unpublish", label: "Unpublish" },
            ]}
            onFilterChange={setFilter}
          />
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
