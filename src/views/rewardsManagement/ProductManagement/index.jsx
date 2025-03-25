/* eslint-disable no-unused-vars */
import { FaPlus } from "react-icons/fa6";
import { useSelector } from "react-redux";
import CustomTable from "../../../shared/components/CustomTable";
import { headers } from "./confige";
import { useNavigate } from "react-router-dom";
import { route } from "../../../shared/constants/AllRoutes";
import { useQuery } from "@tanstack/react-query";
import { getAllRewards } from "../../../query/RewardsManagement/getAllRewards/getAllRewards.query";
import Pagination from "../../../shared/components/CustomPagination";
import { iconRightArrow } from "../../../assets/images/icons";
import { useState } from "react";
import { getRewardsCategory } from "../../../query/RewardsManagement/GetRewardsCategory/getRewardsCategory.query";
import useDebounce from "../../../shared/hooks/useDebounce";

const ProductManagement = () => {
  const translations = useSelector((state) => state.settings.translations);
  const [pageSize, setPageSize] = useState(10);
  const [pageNumber, setPageNumber] = useState(1);
  const [isDescendingOrder, setIsDescendingOrder] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selecteCategoryOpt, setSelectedCategoryOpt] = useState("All");
  const navigate = useNavigate();

  const combinedSearchTerm = `${searchQuery}`.trim();
  const debouncedSearchQuery = useDebounce(combinedSearchTerm, 500);

  const { data: categoryData, isLoading: isCategoryLoading } = useQuery({
    queryKey: ["getRewardsCategory"],
    queryFn: getRewardsCategory,
  });

  const { data, isPending } = useQuery({
    queryKey: [
      "getAllrewards",
      pageSize,
      pageNumber,
      isDescendingOrder,
      debouncedSearchQuery,
      selecteCategoryOpt,
    ],
    queryFn: () =>
      getAllRewards({
        pageSize,
        pageNumber,
        isDescendingOrder,
        selecteCategoryOpt,
        debouncedSearchQuery,
      }),
  });
  const rewadsData = data?.data?.items;
  const totalPages = Math.ceil((data?.data?.totalRecords || 1) / pageSize);

  return (
    <>
      <div className="common-page-toolbar">
        <label className="primary-title">List of Reward</label>
        <div className="tool-section">
          <input
            className="search-input"
            type="text"
            placeholder={translations.search}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <label className="back-text">{translations.filter}:</label>
          <select
            value={selecteCategoryOpt}
            onChange={(e) => setSelectedCategoryOpt(e.target.value)}
          >
            <option value="All">All</option>
            {isCategoryLoading ? (
              <option>Loading categories...</option>
            ) : (
              categoryData?.data?.map((category) => (
                <option key={category.categoryId} value={category.categoryId}>
                  {category.category}
                </option>
              ))
            )}
          </select>
        </div>
        <button
          className="add-btn"
          onClick={() =>
            navigate(route.rewardsManagement.ProductManagement.Add)
          }
        >
          {" "}
          Add Reward <FaPlus style={{ fontSize: "15px" }} />
        </button>
      </div>
      <CustomTable
        headers={headers(navigate)}
        data={rewadsData}
        isLoading={isPending}
      />
      <div className="table-footer">
        <div>
          <span className="back-text" style={{ color: "#181D27" }}>
            {translations.showing} {rewadsData?.length} {translations.entries}
          </span>{" "}
          <img src={iconRightArrow} />
        </div>
        <Pagination
          currentPage={pageNumber}
          totalPages={totalPages}
          onPageChange={setPageNumber}
        />
      </div>
    </>
  );
};

export default ProductManagement;
