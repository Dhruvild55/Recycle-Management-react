/* eslint-disable no-unused-vars */
import { FaPlus } from "react-icons/fa6";
import { useSelector } from "react-redux";
import CustomTable from "../../../shared/components/CustomTable";
import { headers } from "./confige";
import { useNavigate } from "react-router-dom";
import { route } from "../../../shared/constants/AllRoutes";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getAllRewards } from "../../../query/RewardsManagement/getAllRewards/getAllRewards.query";
import Pagination from "../../../shared/components/CustomPagination";
import { iconRightArrow } from "../../../assets/images/icons";
import { useState } from "react";
import { getRewardsCategory } from "../../../query/RewardsManagement/GetRewardsCategory/getRewardsCategory.query";
import useDebounce from "../../../shared/hooks/useDebounce";
import { deleteRewards } from "../../../query/RewardsManagement/DeleteReward/deleteRewards.query";
import { ReactToastify } from "../../../shared/utils";
import RewardManagementTopSection from "../Component/RewardManagementtopSection";
import SearchInput from "../../../shared/components/SearchInput";
import FilterDropdown from "../../../shared/components/FillerDropdown";
import ButtonComponent from "../../../shared/components/Buttoncomponent";
import TitleComponent from "../../../shared/components/TitleComponent";

const ProductManagement = () => {
  const translations = useSelector((state) => state.settings.translations);
  const { search, filter } = translations;
  const [pageSize, setPageSize] = useState(10);
  const [pageNumber, setPageNumber] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterText, setFilter] = useState("");
  const navigate = useNavigate();

  const combinedSearchTerm = `${searchTerm}`.trim();
  const debouncedSearchQuery = useDebounce(combinedSearchTerm, 500);

  // ! get Rewards Category API
  const { data: categoryData, isLoading: isCategoryLoading } = useQuery({
    queryKey: ["getRewardsCategory"],
    queryFn: getRewardsCategory,
  });

  // ! get All Rewards API
  const { data, isPending, refetch } = useQuery({
    queryKey: [
      "getAllrewards",
      pageSize,
      pageNumber,
      debouncedSearchQuery,
      filterText,
    ],
    queryFn: () =>
      getAllRewards({
        pageSize,
        pageNumber,
        searchTerm: debouncedSearchQuery,
        filterText,
      }),
  });

  // ! Delete Rewards API
  const { mutate: deleteReward } = useMutation({
    mutationFn: deleteRewards,
    onSuccess: (data) => {
      refetch();
      ReactToastify(data?.message, "success");
    },
    onError: (error) => {
      console.log(error);
      ReactToastify(error?.message, "error");
    },
  });
  const rewadsData = data?.data?.items;
  const totalPages = Math.ceil((data?.data?.totalRecords || 1) / pageSize);

  return (
    <>
      <div className="common-main-section">
        <RewardManagementTopSection />
        <div className="common-page-toolbar">
          <TitleComponent label="List of Rewards" />
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
                ...(categoryData?.data?.map((category) => ({
                  value: category.categoryId,
                  label: category.category,
                })) || []),
              ]}
              onFilterChange={setFilter}
            />
          </div>
          <ButtonComponent
            label="Add Reward"
            className="add-btn"
            icon={<FaPlus style={{ fontSize: "15px" }} />}
            onClick={() =>
              navigate(route.rewardsManagement.ProductManagement.Add)
            }
          />
        </div>
        <CustomTable
          headers={headers(navigate, deleteReward)}
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
      </div>
    </>
  );
};

export default ProductManagement;
