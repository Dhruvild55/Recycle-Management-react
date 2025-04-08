import axiosInstance from "../../../axios";

export const getProductList = async ({
  pageNumber,
  pageSize,
  searchTerm,
  filterText,
}) => {
  console.log("getAllProducts");
  const res = await axiosInstance.get(
    `/admin/get-All-Products?PageNumber=${pageNumber}&PageSize=${pageSize}&SearchTerm=${searchTerm}&Filter=${filterText}&culture=en`
  );
  return res.data;
};
