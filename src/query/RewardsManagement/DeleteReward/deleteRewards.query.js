import axiosInstance from "../../../axios";

export const deleteRewards = async (id) => {
  const res = await axiosInstance.delete(
    `/admin/delete-Rewards-ById/${id}?culture=en`
  );
  return res.data;
};
