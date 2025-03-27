import axiosInstance from "../../../axios";

export const getRewardTransactionDetails = async (id) => {
  const res = await axiosInstance.get(
    `/admin/get-Rewards-Transaction-Details-ById/${id}?culture=en`
  );
  return res.data;
};
