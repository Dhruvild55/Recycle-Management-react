import axiosInstance from "../../../axios";

export const getRewardsDetails = async ({ id }) => {
  const res = await axiosInstance.get(
    `admin/get-RewardsDetails-ById/${id}?culture=en`
  );
  return res.data;
};
