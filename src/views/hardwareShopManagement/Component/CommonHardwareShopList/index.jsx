/* eslint-disable react/prop-types */
import { FaPlus } from "react-icons/fa6";
import TopSection from "../TopSection";
import CustomTable from "../../../../shared/components/CustomTable";
import DatePicker from "../../../pointsTransactionManagement/components/DateRangPicker";
import FilterDropdown from "../../../../shared/components/FillerDropdown";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import SearchInput from "../../../../shared/components/SearchInput";
import useDebounce from "../../../../shared/hooks/useDebounce";
import Pagination from "../../../../shared/components/CustomPagination";
import { iconRightArrow } from "../../../../assets/images/icons";

const CommonHardwareShopList = ({
  title,
  translations,
  navigate,
  route,
  Headers,
  isDateAndtime,
  optionsData,
  getQueryFn,
  getQueryKey,
}) => {
  const [filterText, setFilter] = useState("");
  const [pageSize, setPageSize] = useState(2);
  const [pageNumber, setPageNumber] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  const combinedSearchTerm = `${searchTerm}`.trim();
  const debouncedSearchQuery = useDebounce(combinedSearchTerm, 500);
  const { data } = useQuery({
    queryKey: [
      getQueryKey,
      pageSize,
      pageNumber,
      debouncedSearchQuery,
      filterText,
    ],
    queryFn: () =>
      getQueryFn({
        pageNumber,
        pageSize,
        searchTerm: debouncedSearchQuery,
        filterText,
      }),
  });

  console.log("data", data);

  const totalPages = Math.ceil((data?.data?.totalRecords || 1) / pageSize);

  return (
    <div className="common-main-section">
      <TopSection />
      <div className="common-page-toolbar">
        <label className="primary-title">{title}</label>
        <div className="tool-section">
          <SearchInput
            placeholder="Search"
            onSearch={(query) => {
              setSearchTerm(query);
              setPageNumber(1);
            }}
          />
        </div>
        {isDateAndtime && <DatePicker />}
        <div className="tool-section">
          <FilterDropdown
            label="Filter"
            onFilterChange={setFilter}
            options={optionsData?.map((item) => ({
              value: item.value,
              label: item.label,
            }))}
          />
        </div>
        {!isDateAndtime && (
          <button className="add-btn" onClick={() => navigate(route)}>
            {" "}
            Add Product <FaPlus style={{ fontSize: "15px" }} />
          </button>
        )}
      </div>
      <CustomTable headers={Headers} data={data?.data?.items} />
      <div className="table-footer">
        <div>
          <span className="back-text" style={{ color: "#181D27" }}>
            {translations.showing} {data?.data?.items?.length}{" "}
            {translations.entries}{" "}
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

export default CommonHardwareShopList;
