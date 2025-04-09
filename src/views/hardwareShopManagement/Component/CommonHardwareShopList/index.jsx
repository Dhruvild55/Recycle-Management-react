/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { FaPlus } from "react-icons/fa6";
import TopSection from "../TopSection";
import CustomTable from "../../../../shared/components/CustomTable";
import DatePicker from "../../../pointsTransactionManagement/components/DateRangPicker";
import FilterDropdown from "../../../../shared/components/FillerDropdown";
import { useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import SearchInput from "../../../../shared/components/SearchInput";
import useDebounce from "../../../../shared/hooks/useDebounce";
import Pagination from "../../../../shared/components/CustomPagination";
import { iconRightArrow } from "../../../../assets/images/icons";
import { deleteProductById } from "../../../../query/HardwareShopManagement/deleteProductByID/deleteProductById.query";
import { ReactToastify } from "../../../../shared/utils";

const CommonHardwareShopList = ({
  title,
  translations,
  navigate,
  route,
  tableHeaders,
  isDateAndtime,
  optionsData,
  getQueryFn,
  getQueryKey,
}) => {
  const [filterText, setFilter] = useState("");
  const [pageSize, setPageSize] = useState(10);
  const [pageNumber, setPageNumber] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [dateRange, setDateRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
  });
  const [isDateFilterActive, setIsDateFilterActive] = useState(false);

  const combinedSearchTerm = `${searchTerm}`.trim();
  const debouncedSearchQuery = useDebounce(combinedSearchTerm, 500);

  const formatEndDate = (date) => {
    const d = new Date(date);
    d.setHours(29, 29, 0, 0); // Set time to 22:59:00
    return d.toISOString(); // or format it as needed
  };

  const { data, refetch, isPending } = useQuery({
    queryKey: [
      getQueryKey,
      pageSize,
      pageNumber,
      debouncedSearchQuery,
      filterText,
      // Only include date if filter is empty
      ...(filterText === "" && isDateAndtime
        ? [
            isDateFilterActive ? dateRange?.startDate.toDateString() : "",
            isDateFilterActive ? formatEndDate(dateRange?.endDate) : "",
          ]
        : []),
    ],
    queryFn: () =>
      getQueryFn({
        pageNumber,
        pageSize,
        searchTerm: debouncedSearchQuery,
        filterText,
        ...(filterText === "" &&
          isDateFilterActive && {
            startDate: dateRange?.startDate.toDateString(),
            endDate: formatEndDate(dateRange?.endDate),
          }),
      }),
  });

  // ! Delete Product API
  const { mutate: deleteProductMutation } = useMutation({
    mutationFn: deleteProductById,
    onSuccess: (data) => {
      ReactToastify(data?.message, "success");
      refetch();
    },
    onError: (error) => {
      ReactToastify(error?.message, "error");
    },
  });

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
            dynamicWidth={400}
          />
        </div>
        {isDateAndtime && (
          <DatePicker
            dateRange={dateRange}
            setDateRange={(range) => {
              setDateRange(range);
              setIsDateFilterActive(true);
              setPageNumber(1);
            }}
          />
        )}
        <div className="tool-section">
          <FilterDropdown
            label="Filter"
            onFilterChange={(query) => {
              setFilter(query);
              setPageNumber(1);
            }}
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
      <CustomTable
        headers={tableHeaders(navigate, deleteProductMutation)}
        data={data?.data?.items}
        isLoading={isPending}
      />
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
