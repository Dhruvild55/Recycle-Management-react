import axiosInstance from "../../../axios";

export const getCashRewardsDetails = async (id) => {
  const res = await axiosInstance.get(
    `/admin/get-CashRewards-Details-ById/${id}?culture=en`
  );
  return res.data;
};
