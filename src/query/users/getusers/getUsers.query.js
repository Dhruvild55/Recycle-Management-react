import axiosInstance from "../../../axios";

export const usersList = async ({
  pageNumber,
  pageSize,
  isDescendingOrder,
}) => {
  const sortOrder = isDescendingOrder ? "email_desc" : "email_aesc";
  const response = await axiosInstance.get(
    `/admin/userlist?pageNumber=${pageNumber}&pageSize=${pageSize}&SortOrder=${sortOrder}&culture=en`
  );
  return response.data;
};

//&Role=""
