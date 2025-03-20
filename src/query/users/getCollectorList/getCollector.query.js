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
  const roleData =
    role === "B2C Collector"
      ? "B2C Collector"
      : role === "B2B Collector"
      ? "B2B Collector"
      : role === "All"
      ? ""
      : "";

  const response = await axiosInstance.get(
    `/admin/getcollectorlist?pageNumber=${pageNumber}&pageSize=${pageSize}&Role=${roleData}&SortOrder=${sortOrder}&SearchTerm=${encodeURIComponent(
      searchTerm
    )}&culture=en`
  );
  return response.data;
};
