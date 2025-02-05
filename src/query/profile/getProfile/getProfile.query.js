import axiosInstance from "../../../axios";

export const getProfile = async () => {
  const response = await axiosInstance.get(`/profile/getuser?culture=en`);
  return response.data;
};
