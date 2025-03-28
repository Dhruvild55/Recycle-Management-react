/* eslint-disable no-unused-vars */
import axiosInstance from "../../../axios";

export const getAllRewards = async ({
  pageSize,
  pageNumber,
  searchTerm,
  filterText,
}) => {
  const category = filterText === "All" ? " " : filterText;
  const res = await axiosInstance.get(
    `admin/get-All-Rewards?PageNumber=${pageNumber}&SearchTerm=${searchTerm}&Filter=${category}&PageSize=${pageSize}&culture=en'`
  );
  return res.data;
};

//
