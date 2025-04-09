import axiosInstance from "../../../axios";

export const getOrderHistoryList = async ({
  pageNumber,
  pageSize,
  searchTerm,
  filterText,
  startDate,
  endDate,
}) => {
  const params = new URLSearchParams({
    PageNumber: pageNumber,
    PageSize: pageSize,
    SearchTerm: searchTerm,
    Filter: filterText,
    culture: "en",
  });

  if (filterText === "" && startDate && endDate) {
    params.append("StartDate", startDate);
    params.append("EndDate", endDate);
  }

  const res = await axiosInstance.get(
    `/admin/Get-Product-History?${params.toString()}`
  );
  return res.data;
};
