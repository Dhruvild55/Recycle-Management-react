/* eslint-disable no-unused-vars */
import axiosInstance from "../../../axios";

export const getAllRewards = async ({
  pageSize,
  pageNumber,
  isDescendingOrder,
  selecteCategoryOpt,
  debouncedSearchQuery,
}) => {
  const category = selecteCategoryOpt === "All" ? " " : selecteCategoryOpt;
  const res = await axiosInstance.get(
    `admin/get-All-Rewards?PageNumber=${pageNumber}&SearchTerm=${debouncedSearchQuery}&Filter=${category}&PageSize=${pageSize}&culture=en'`
  );
  return res.data;
};

//
