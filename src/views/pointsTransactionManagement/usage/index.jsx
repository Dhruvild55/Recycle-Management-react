/* eslint-disable no-unused-vars */
import { useSelector } from "react-redux";
import TopSection from "../components/TopSection";
import DatePicker from "../components/DateRangPicker";
import CustomTable from "../../../shared/components/CustomTable";
import { headers } from "./config";
import { useQuery } from "@tanstack/react-query";
import { usedPointsTransactionList } from "../../../query/PointsTransactionManagement/Used/usedPointsTransaction/usedpointsTransaction.query";
import SearchInput from "../../../shared/components/SearchInput";
import { useState } from "react";
import FilterDropdown from "../../../shared/components/FillerDropdown";
import useDebounce from "../../../shared/hooks/useDebounce";
import Pagination from "../../../shared/components/CustomPagination";
import { iconRightArrow } from "../../../assets/images/icons";

const UsageList = () => {
  const translations = useSelector((state) => state.settings.translations);
  const { filter, search, showing, entries } = translations;
  const [searchTerm, setSearchTerm] = useState("");
  const [pageSize, setPageSize] = useState(10);
  const [pageNumber, setPageNumber] = useState(1);
  const [filterText, setFilter] = useState("");
  const [dateRange, setDateRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
  });
  const [isDateFilterActive, setIsDateFilterActive] = useState(false);

  const combinedSearchTerm = `${searchTerm}`.trim();
  const debouncedSearchQuery = useDebounce(combinedSearchTerm, 500);

  const { data: usedList, isPending } = useQuery({
    queryKey: [
      "newCollectorPermissionList",
      pageSize,
      pageNumber,
      debouncedSearchQuery,
      filterText,
      isDateFilterActive ? dateRange?.startDate.toDateString() : "",
      isDateFilterActive ? dateRange?.endDate.toDateString() : "",
    ],
    queryFn: () =>
      usedPointsTransactionList({
        pageSize,
        pageNumber,
        searchTerm: debouncedSearchQuery,
        filterText,
        startDate: isDateFilterActive
          ? dateRange?.startDate.toDateString()
          : "",
        endDate: isDateFilterActive ? dateRange?.endDate.toDateString() : "",
      }),
    refetchOnWindowFocus: false,
  });

  const totalPages = Math.ceil((usedList?.data?.totalRecords || 1) / pageSize);
  return (
    <div className="common-main-section">
      <TopSection />
      <div className="common-page-toolbar">
        <label className="primary-title"> List of User Name</label>
        <div className="tool-section">
          <SearchInput
            placeholder={search}
            onSearch={(query) => {
              setSearchTerm(query);
              setPageNumber(1);
            }}
            dynamicWidth="470px"
          />
        </div>
        <DatePicker
          dateRange={dateRange}
          setDateRange={(range) => {
            setDateRange(range);
            setIsDateFilterActive(true);
            setPageNumber(1);
          }}
        />
        <div className="tool-section">
          <FilterDropdown
            label={filter}
            options={[{ value: "", label: "All" }]}
            onFilterChange={setFilter}
          />
        </div>
      </div>
      <CustomTable
        headers={headers}
        data={usedList?.data?.items}
        isLoading={isPending}
      />
      <div
        className="table-footer"
        style={{ marginTop: "30px", marginBottom: "20px" }}
      >
        <div>
          <span className="back-text" style={{ color: "#181D27" }}>
            {showing} {usedList?.data?.items?.length} {entries}{" "}
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
export default UsageList;
