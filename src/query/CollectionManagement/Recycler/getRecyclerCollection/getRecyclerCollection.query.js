import axiosInstance from "../../../../axios";

export const getRecyclerCollection = async ({
  pageNumber,
  pageSize,
  searchTerm,
  role,
}) => {
  const res = await axiosInstance.get(
    `/admin/GetRecyclerCollections?PageNumber=${pageNumber}&PageSize=${pageSize}&SearchTerm=${searchTerm}&Role=${role}&culture=en`
  );
  return res.data;
};
