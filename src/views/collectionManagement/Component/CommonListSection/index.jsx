/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import CollectionManagementTopSection from "../CollectionManagementTopSection";
import { useSelector } from "react-redux";
import CustomTable from "../../../../shared/components/CustomTable";
import TitleComponent from "../../../../shared/components/TitleComponent";
import SearchInput from "../../../../shared/components/SearchInput";
import { useState } from "react";
import FilterDropdown from "../../../../shared/components/FillerDropdown";
import { useQuery } from "@tanstack/react-query";
import { iconRightArrow } from "../../../../assets/images/icons";
import useDebounce from "../../../../shared/hooks/useDebounce";
import Pagination from "../../../../shared/components/CustomPagination";

const CommonListSection = ({
  title,
  header,
  queryKey,
  fetchfunction,
  role,
}) => {
  const navigate = useNavigate();
  const [pageSize, setPageSize] = useState(10);
  const [pageNumber, setPageNumber] = useState(1);
  const [isDescendingOrder, setIsDescendingOrder] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterText, setFilter] = useState("All");
  const translations = useSelector((state) => state.settings.translations);

  const combinedSearchTerm = `${searchQuery}`.trim();
  const debouncedSearchQuery = useDebounce(combinedSearchTerm, 500);

  const { data, isPending } = useQuery({
    queryKey: [
      queryKey,
      pageSize,
      pageNumber,
      filterText,
      debouncedSearchQuery,
    ],
    queryFn: () =>
      fetchfunction({
        pageNumber,
        pageSize,
        searchTerm: debouncedSearchQuery,
        role: role,
      }),
  });
  console.log(data);
  const tableData = data?.data?.items || [];

  const totalPages = Math.ceil((data?.data?.totalRecords || 1) / pageSize);
  return (
    <div className="common-main-section">
      <CollectionManagementTopSection />
      <div className="common-page-toolbar">
        <TitleComponent label={title} />
        <div className="tool-section" style={{ gap: "110px" }}>
          <SearchInput placeholder="Serch" onSearch={setSearchQuery} />
          <FilterDropdown
            label="Filter"
            options={[{ value: "", label: "All" }]}
            onFilterChange={setFilter}
          />
        </div>
      </div>

      <CustomTable headers={header} data={tableData} isLoading={isPending} />
      <div className="table-footer">
        <div>
          <span className="back-text" style={{ color: "#181D27" }}>
            {translations.showing} {tableData.length} {translations.entries}{" "}
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

export default CommonListSection;
