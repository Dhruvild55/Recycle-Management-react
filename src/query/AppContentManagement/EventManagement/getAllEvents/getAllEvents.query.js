import axiosInstance from "../../../../axios";

export const getallEvents = async ({
  pageSize,
  pageNumber,
  searchTerm,
  filterText,
}) => {
  const filter = filterText === "All" ? "" : filterText;
  const res = await axiosInstance.get(
    `/admin/get-All-Events?PageNumber=${pageNumber}&PageSize=${pageSize}&SearchTerm=${searchTerm}&Filter=${filter}&culture=en`
  );
  return res.data;
};
