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
import { useQuery } from "@tanstack/react-query";
import { getBannerList } from "../../../../query/AppContentManagement/BannerManagement/getAllBanner/getAllBanner.query";
import SearchInput from "../../../../shared/components/SearchInput";
import useDebounce from "../../../../shared/hooks/useDebounce";
import FilterDropdown from "../../../../shared/components/FillerDropdown";

const BannerList = () => {
  const translations = useSelector((state) => state.settings.translations);
  const { filter, search, showing, entries, addBanner, bannerManagement } =
    translations;
  const navigate = useNavigate();
  const [pageSize, setPageSize] = useState(10);
  const [pageNumber, setPageNumber] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterText, setFilter] = useState("All");

  const combinedSearchTerm = `${searchTerm}`.trim();
  const debouncedSearchQuery = useDebounce(combinedSearchTerm, 500);

  //! get banner List API
  const { data: bannerList, isPending } = useQuery({
    queryKey: [
      "getBannerList",
      pageSize,
      pageNumber,
      debouncedSearchQuery,
      filterText,
    ],
    queryFn: () =>
      getBannerList({
        pageSize,
        pageNumber,
        searchTerm: debouncedSearchQuery,
        filterText,
      }),
  });

  const totalPages = Math.ceil(
    (bannerList?.data?.totalRecords || 1) / pageSize
  );
  return (
    <div className="common-main-section">
      <AppContentManagementTopSection />
      <div className="common-page-toolbar">
        <label className="primary-title">{bannerManagement}</label>
        <div className="tool-section">
          <SearchInput placeholder={search} onSearch={setSearchTerm} />
          <FilterDropdown
            label={filter}
            options={[
              { value: "", label: "All" },
              { value: "Publish", label: "Publish" },
              { value: "Unpublish", label: "Unpublish" },
            ]}
            onFilterChange={setFilter}
          />
        </div>
        <button
          className="add-btn"
          onClick={() =>
            navigate(route.appContentManagement.BannerManagement.Add)
          }
        >
          {" "}
          {addBanner} <FaPlus style={{ fontSize: "15px" }} />
        </button>
      </div>
      <div
        className="banner-section"
        style={{
          marginTop: "30px",
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          columnGap: "10px",
          rowGap: "50px",
        }}
      >
        {bannerList?.data?.items?.length > 0 ? (
          bannerList?.data?.items?.map((items) => {
            return <BannerComponent key={items.id} items={items} />;
          })
        ) : (
          <div
            style={{
              display: "flex",
              height: "200px",
            }}
          >
            <label className="primary-title">Data is not Available</label>
          </div>
        )}
      </div>
      <div
        className="table-footer"
        style={{ marginTop: "30px", marginBottom: "20px" }}
      >
        <div>
          <span className="back-text" style={{ color: "#181D27" }}>
            {showing} {bannerList?.data?.items?.length} {entries}{" "}
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
