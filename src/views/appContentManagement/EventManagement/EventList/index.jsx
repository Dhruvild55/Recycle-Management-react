/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import useDebounce from "../../../../shared/hooks/useDebounce";
import { useQuery } from "@tanstack/react-query";
import AppContentManagementTopSection from "../../Components/AppContentManagementTopSection";
import SearchInput from "../../../../shared/components/SearchInput";
import FilterDropdown from "../../../../shared/components/FillerDropdown";
import { route } from "../../../../shared/constants/AllRoutes";
import { FaPlus } from "react-icons/fa6";
import { iconRightArrow } from "../../../../assets/images/icons";
import { getallEvents } from "../../../../query/AppContentManagement/EventManagement/getAllEvents/getAllEvents.query";
import BannerComponent from "../../BannerManagement/BannerList/BannerComponent";
import Pagination from "../../../../shared/components/CustomPagination";
import { Loader } from "../../../../shared/components/Loader";

const EventManagement = () => {
  const translations = useSelector((state) => state.settings.translations);
  const { filter, search, showing, entries, eventManagement, addEvent } =
    translations;
  const navigate = useNavigate();
  const [pageSize, setPageSize] = useState(10);
  const [pageNumber, setPageNumber] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterText, setFilter] = useState("All");

  const debouncedSearchQuery = useDebounce(searchTerm.trim(), 500);

  //! Get Event List API
  const { data: eventList, isPending } = useQuery({
    queryKey: [
      "getEventList",
      pageSize,
      pageNumber,
      debouncedSearchQuery,
      filterText,
    ],
    queryFn: () =>
      getallEvents({
        pageSize,
        pageNumber,
        searchTerm: debouncedSearchQuery,
        filterText,
      }),
  });

  const totalPages = Math.ceil((eventList?.data?.totalRecords || 1) / pageSize);

  return (
    <div className="common-main-section">
      <AppContentManagementTopSection />
      <div className="common-page-toolbar">
        <label className="primary-title">{eventManagement}</label>
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
              { value: "Publish", label: "Publish" },
              { value: "Unpublish", label: "Unpublish" },
            ]}
            onFilterChange={setFilter}
          />
        </div>
        <button
          className="add-btn"
          onClick={() =>
            navigate(route.appContentManagement.EventManagement.Add)
          }
        >
          {addEvent} <FaPlus style={{ fontSize: "15px" }} />
        </button>
      </div>

      {/* Show Loader While Fetching Data */}
      {isPending ? (
        <div className="loader-container">
          <Loader />
        </div>
      ) : (
        <>
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
            {eventList?.data?.items?.length > 0 ? (
              eventList.data.items.map((item) => (
                <BannerComponent key={item.id} items={item} isEvent={true} />
              ))
            ) : (
              <p className="no-data">No events found</p>
            )}
          </div>

          {/* Pagination */}
          <div className="table-footer">
            <span className="back-text">
              {showing} {eventList?.data?.items?.length} {entries} {"   "}
              <img src={iconRightArrow} alt="Arrow" />
            </span>
            <Pagination
              currentPage={pageNumber}
              totalPages={totalPages}
              onPageChange={setPageNumber}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default EventManagement;
