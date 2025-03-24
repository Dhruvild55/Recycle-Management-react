import axiosInstance from "../../../axios";

export const createReward = async (data) => {
  const res = await axiosInstance.post(`/admin/createReward?culture=en`, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return res.data;
};
