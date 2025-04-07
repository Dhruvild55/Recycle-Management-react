import axiosInstance from "../../../../axios";

export const usedPointsTransactionList = async ({
  pageSize,
  pageNumber,
  searchTerm,
  filterText,
  startDate,
  endDate,
}) => {
  const res = await axiosInstance.get(
    `/admin/used-points-Transaction-List?PageNumber=${pageNumber}&PageSize=${pageSize}&SearchTerm=${searchTerm}&StartDate=${startDate}&EndDate=${endDate}&culture=en`
  );
  return res.data;
};
