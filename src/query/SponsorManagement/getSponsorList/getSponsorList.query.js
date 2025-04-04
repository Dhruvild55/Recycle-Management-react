import axiosInstance from "../../../axios";

export const getSponsorList = async ({ pageNumber, pageSize, searchTerm }) => {
  const res = await axiosInstance.get(
    `/admin/get-Sponsors-List?PageNumber=${pageNumber}&PageSize=${pageSize}&SearchTerm=${searchTerm}&culture=en`
  );
  return res.data;
};
