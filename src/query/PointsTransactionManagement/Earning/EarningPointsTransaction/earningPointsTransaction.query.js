import axiosInstance from "../../../../axios";

export const earningPointsTransaction = async ({
  pageSize,
  pageNumber,
  searchTerm,
  filterText,
  startDate,
  endDate,
}) => {
  const res = await axiosInstance.get(
    `/admin/earning-points-Transaction-List?PageNumber=${pageNumber}&PageSize=${pageSize}&SearchTerm=${searchTerm}&Filter=${filterText}&StartDate=${startDate}&EndDate=${endDate}&culture=en`
  );
  return res.data;
};
