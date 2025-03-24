/* eslint-disable no-undef */

import axiosInstance from "../../../../axios";

export const getRecyclerList = async ({
  pageNumber,
  pageSize,
  searchTerm = "",
  isDescendingOrder,
  role,
}) => {
  const sortOrder = isDescendingOrder ? "email_desc" : "email_aesc";
  const roleData =
    role === "B2B Recycler"
      ? "B2B Recycler"
      : role === "B2C Recycler"
      ? "B2C Recycler"
      : role === "All"
      ? ""
      : "";
  const response = await axiosInstance.get(
    `/admin/getrecyclerlist?pageNumber=${pageNumber}&pageSize=${pageSize}&Role=${roleData}&SortOrder=${sortOrder}&SearchTerm=${encodeURIComponent(
      searchTerm
    )}&culture=en`
  );
  return response.data;
};
