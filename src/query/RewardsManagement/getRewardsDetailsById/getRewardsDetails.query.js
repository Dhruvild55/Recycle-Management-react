import axiosInstance from "../../../axios";

export const getRewardsDetails = async ({ id }) => {
  const res = await axiosInstance.get(
    `rewards/get-RewardsDetails-ById/${id}?culture=en`
  );
  return res.data;
};
