/* eslint-disable no-undef */
import axiosInstance from "../../../axios";

export const getAdminList = async ({
  pageNumber,
  pageSize,
  isDescendingOrder,
  searchTerm = "",
  role,
}) => {
  const sortOrder = isDescendingOrder ? "email_desc" : "email_asc";

  const response = await axiosInstance.get(
    `/admin/getadminlist?pageNumber=${pageNumber}&pageSize=${pageSize}&Role=${role}&SortOrder=${sortOrder}&SearchTerm=${encodeURIComponent(
      searchTerm
    )}&culture=en`
  );
  return response.data;
};
