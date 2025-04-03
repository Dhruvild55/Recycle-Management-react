import axiosInstance from "../../../../axios";

export const getRewardsData = async ({ id, pageSize, pageNumber }) => {
  const res = await axiosInstance.get(
    `/admin/getRecyclerRewards/${id}?PageNumber=${pageNumber}&PageSize=${pageSize}&culture=en`
  );
  return res.data;
};
