/* eslint-disable no-unused-vars */
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CustomTable from "../../../shared/components/CustomTable";
import { data, headers } from "./confige";
import RewardManagementTopSection from "../Component/RewardManagementtopSection";
import TitleComponent from "../../../shared/components/TitleComponent";
import SearchInput from "../../../shared/components/SearchInput";
import { useState } from "react";
import FilterDropdown from "../../../shared/components/FillerDropdown";
import { useQuery } from "@tanstack/react-query";
import { getCashRewards } from "../../../query/RewardsManagement/getCashReward/getCashReward.query";
import useDebounce from "../../../shared/hooks/useDebounce";
import Pagination from "../../../shared/components/CustomPagination";
import { iconRightArrow } from "../../../assets/images/icons";

const CashReward = () => {
  const translations = useSelector((state) => state.settings.translations);
  const { search, filter, showing, entries } = translations;
  const navigate = useNavigate();
  const [pageSize, setPageSize] = useState(10);
  const [pageNumber, setPageNumber] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterText, setFilter] = useState("All");

  const debouncedSearchQuery = useDebounce(searchTerm.trim(), 500);

  const { data: cashRewardsData, isPending } = useQuery({
    queryKey: [
      "getcashRewards",
      filterText,
      debouncedSearchQuery,
      pageNumber,
      pageSize,
    ],
    queryFn: () =>
      getCashRewards({
        filterText,
        searchTerm: debouncedSearchQuery,
        pageSize,
        pageNumber,
      }),
  });
  const totalPages = Math.ceil(
    (cashRewardsData?.data?.totalRecords || 1) / pageSize
  );
  console.log(cashRewardsData?.data);
  return (
    <div className="common-main-section">
      <RewardManagementTopSection />
      <div className="common-page-toolbar">
        <TitleComponent label="List of Cash Reward" />
        <div className="tool-section">
          <SearchInput
            placeholder="Search"
            onSearch={(query) => {
              setSearchTerm(query);
              setPageNumber(1);
            }}
          />
          <FilterDropdown
            label={filter}
            options={[
              { value: "", label: "All" },
              { value: "Completed", label: "Completed" },
              { value: "Rejected", label: "Rejected" },
              { value: "Pending", label: "Pending" },
            ]}
            onFilterChange={setFilter}
          />
        </div>
      </div>
      <CustomTable
        headers={headers(navigate)}
        data={cashRewardsData?.data?.items}
      />
      <div className="table-footer">
        <span className="back-text">
          {showing} {cashRewardsData?.data?.items?.length} {entries} {"   "}
          <img src={iconRightArrow} alt="Arrow" />
        </span>
        <Pagination
          currentPage={pageNumber}
          totalPages={totalPages}
          onPageChange={setPageNumber}
        />
      </div>
    </div>
  );
};

export default CashReward;
