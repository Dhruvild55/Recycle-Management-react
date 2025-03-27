/* eslint-disable no-unused-vars */
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CustomTable from "../../../shared/components/CustomTable";
import { headers } from "./confige";
import RewardManagementTopSection from "../Component/RewardManagementtopSection";
import { useQuery } from "@tanstack/react-query";
import { getRewardTransaction } from "../../../query/RewardsManagement/getRewardTransaction/getRewardTransaction.query";
import { useState } from "react";
import useDebounce from "../../../shared/hooks/useDebounce";
import SearchInput from "../../../shared/components/SearchInput";
import FilterDropdown from "../../../shared/components/FillerDropdown";
import { iconRightArrow } from "../../../assets/images/icons";
import Pagination from "../../../shared/components/CustomPagination";

const RewardTransaction = () => {
  const translations = useSelector((state) => state.settings.translations);
  const { filter, search, showing, entries } = translations;
  const navigate = useNavigate();
  const [pageSize, setPageSize] = useState(10);
  const [pageNumber, setPageNumber] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterText, setFilter] = useState("");

  const combinedSearchTerm = `${searchTerm}`.trim();
  const debouncedSearchQuery = useDebounce(combinedSearchTerm, 500);

  // ! get Reward Transaction Api
  const { data, isPending } = useQuery({
    queryKey: [
      "getRewardTransaction",
      pageSize,
      pageNumber,
      debouncedSearchQuery,
      filterText,
    ],
    queryFn: () =>
      getRewardTransaction({
        pageSize,
        pageNumber,
        searchTerm: debouncedSearchQuery,
        filterText,
      }),
  });

  const rewardTransactionData = data?.data?.items;
  const totalPages = Math.ceil((data?.totalRecords || 1) / pageSize);
  console.log(totalPages);
  return (
    <>
      <div className="common-main-section">
        <RewardManagementTopSection />
        <div className="common-page-toolbar">
          <label className="primary-title">List of Reward Transaction</label>
          <div className="tool-section">
            <SearchInput placeholder={search} onSearch={setSearchTerm} />
            <FilterDropdown
              label={filter}
              options={[
                { value: "", label: "All" },
                { value: "Redeemed", label: "Redeemed" },
                { value: "Claimed", label: "Claimed" },
                { value: "Expired", label: "Expired" },
              ]}
              onFilterChange={setFilter}
            />
          </div>
        </div>
        <CustomTable
          headers={headers(navigate)}
          data={rewardTransactionData}
          isLoading={isPending}
        />
        <div
          className="table-footer"
          style={{ marginTop: "30px", marginBottom: "20px" }}
        >
          <div>
            <span className="back-text" style={{ color: "#181D27" }}>
              {showing} {rewardTransactionData?.length} {entries}{" "}
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
    </>
  );
};

export default RewardTransaction;
