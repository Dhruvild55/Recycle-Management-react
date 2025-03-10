/* eslint-disable no-undef */
import axiosInstance from "../../../axios";

export const getRecyclerList = async ({
  pageNumber,
  pageSize,
  isDescendingOrder,
  role,
}) => {
  const sortOrder = isDescendingOrder ? "email_desc" : "email_aesc";

  const response = await axiosInstance.get(
    `/admin/getrecyclerlist?pageNumber=${pageNumber}&pageSize=${pageSize}&Role=${role}&SortOrder=${sortOrder}&culture=en`
  );
  return response;
};
