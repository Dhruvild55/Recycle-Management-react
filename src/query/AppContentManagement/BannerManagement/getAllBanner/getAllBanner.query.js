import axiosInstance from "../../../../axios";

export const getBannerList = async ({
  pageSize,
  pageNumber,
  searchTerm,
  filterText,
}) => {
  const filter = filterText === "All" ? " " : filterText;
  const res = await axiosInstance.get(
    `/admin/get-All-Banners?PageNumber=${pageNumber}&PageSize=${pageSize}&Filter=${filter}&SearchTerm=${searchTerm}&culture=en`
  );
  return res.data;
};
