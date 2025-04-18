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
import { useQuery } from "@tanstack/react-query";
import { getSponsorList } from "../../../query/SponsorManagement/getSponsorList/getSponsorList.query";
import useDebounce from "../../../shared/hooks/useDebounce";
import ButtonComponent from "../../../shared/components/Buttoncomponent";
import { FaPlus } from "react-icons/fa6";
import { route } from "../../../shared/constants/AllRoutes";

const SponsorManagement = () => {
  const translations = useSelector((state) => state.settings.translations);
  const [pageSize, setPageSize] = useState(5);
  const [pageNumber, setPageNumber] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterText, setFilter] = useState("All");
  const navigate = useNavigate();

  const debouncedSearchQuery = useDebounce(searchTerm.trim(), 500);

  const formatDate = (dateString) => {
    if (!dateString || dateString.startsWith("0001-01-01")) {
      return "Not Available";
    }
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString("en-US", { month: "long" });
    const year = date.getFullYear();
    const getOrdinalSuffix = (n) => {
      const s = ["th", "st", "nd", "rd"];
      const v = n % 100;
      return s[(v - 20) % 10] || s[v] || s[0];
    };
    return `${day}${getOrdinalSuffix(day)} ${month}, ${year}`;
  };

  const { data, isPending } = useQuery({
    queryKey: [
      "sponsorList",
      pageNumber,
      pageSize,
      debouncedSearchQuery,
      filterText,
    ],
    queryFn: () =>
      getSponsorList({
        pageNumber,
        pageSize,
        searchTerm: debouncedSearchQuery,
        filterText,
      }),
    keepPreviousData: true,
    refetchOnWindowFocus: false,
  });

  const sponsorData = data?.data?.items;
  const totalPages = Math.ceil((data?.data?.totalRecords || 1) / pageSize);

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
        </div>
        <ButtonComponent
          className="add-btn"
          label="Add Sponsor"
          onClick={() => navigate(route.sponsorManagement.Add)}
          icon={<FaPlus style={{ fontSize: "15px" }} />}
        />
      </div>
      <CustomTable
        headers={sponsorHeader(navigate, formatDate)}
        data={sponsorData}
      />
      <div className="table-footer">
        <div>
          <span className="back-text" style={{ color: "#181D27" }}>
            {translations.showing} {sponsorData?.length} {translations.entries}{" "}
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
