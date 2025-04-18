import axiosInstance from "../../../axios";

export const getFiatPoints = async () => {
  const res = await axiosInstance.get(`/admin/getFiatAndPoints?culture=en`);
  return res.data;
};
