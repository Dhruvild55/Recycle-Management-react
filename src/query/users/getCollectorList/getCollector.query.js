/* eslint-disable no-undef */
import axiosInstance from "../../../axios";

export const getCollectorList = async ({
  pageNumber,
  pageSize,
  isDescendingOrder,
  searchTerm = "",
  role,
}) => {
  const sortOrder = isDescendingOrder ? "email_desc" : "email_aesc";

  const response = await axiosInstance.get(
    `/admin/getcollectorlist?pageNumber=${pageNumber}&pageSize=${pageSize}&Role=${role}&SortOrder=${sortOrder}&SearchTerm=${encodeURIComponent(
      searchTerm
    )}&culture=en`
  );
  return response.data;
};
