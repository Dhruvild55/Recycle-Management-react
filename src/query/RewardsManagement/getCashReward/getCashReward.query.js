import axiosInstance from "../../../axios";

export const getCashRewards = async ({
  pageSize,
  pageNumber,
  filterText,
  searchTerm,
}) => {
  const filter = filterText === "All" ? "" : filterText;
  const res = await axiosInstance.get(
    `/admin/get-All-Cash-Rewards?PageNumber=${pageNumber}&PageSize=${pageSize}&SearchTerm=${searchTerm}&Filter=${filter}&culture=en`
  );
  return res.data;
};
