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
  const roleData =
    role === "Admin"
      ? "Admin"
      : role === "SuperAdmin"
      ? "Super Admin"
      : role === "All"
      ? ""
      : "";

  const response = await axiosInstance.get(
    `/admin/getadminlist?pageNumber=${pageNumber}&pageSize=${pageSize}&Role=${roleData}&SortOrder=${sortOrder}&SearchTerm=${encodeURIComponent(
      searchTerm
    )}&culture=en`
  );
  return response.data;
};
