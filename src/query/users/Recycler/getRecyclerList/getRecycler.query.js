/* eslint-disable no-undef */

import axiosInstance from "../../../../axios";

export const getRecyclerList = async ({
  pageNumber,
  pageSize,
  searchTerm = "",
  isDescendingOrder,
}) => {
  const sortOrder = isDescendingOrder ? "email_desc" : "email_aesc";

  const response = await axiosInstance.get(
    `/admin/getrecyclerlist?pageNumber=${pageNumber}&pageSize=${pageSize}&SortOrder=${sortOrder}&SearchTerm=${encodeURIComponent(
      searchTerm
    )}&culture=en`
  );
  return response.data;
};
