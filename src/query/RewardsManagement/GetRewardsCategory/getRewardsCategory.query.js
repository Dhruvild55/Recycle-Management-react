import axiosInstance from "../../../axios";

export const getRewardsCategory = async () => {
  const res = await axiosInstance.get(
    `admin/get-All-RewardCategories?culture=en`,
    {}
  );
  return res.data;
};
