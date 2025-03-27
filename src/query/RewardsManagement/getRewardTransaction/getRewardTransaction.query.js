import axiosInstance from "../../../axios";

export const getRewardTransaction = async ({
  pageSize,
  pageNumber,
  searchTerm,
  filterText,
}) => {
  const res = await axiosInstance.get(
    `admin/get-Reward-Transactions?PageNumber=${pageNumber}&PageSize=${pageSize}&SearchTerm=${searchTerm}&Filter=${filterText}&culture=en`
  );
  return res.data;
};
