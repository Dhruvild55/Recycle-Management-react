import axiosInstance from "../../../../axios";

export const getCollectorCollection = async ({
  pageNumber,
  pageSize,
  searchTerm,
  role,
}) => {
  const res = await axiosInstance.get(
    `/admin/GetCollectorCollections?PageNumber=${pageNumber}&PageSize=${pageSize}&SearchTerm=${searchTerm}&Role=${role}&culture=en`
  );
  return res.data;
};
