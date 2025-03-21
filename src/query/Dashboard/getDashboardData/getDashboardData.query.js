import axiosInstance from "../../../axios";

export const getDashboardData = async () => {
  const res = await axiosInstance.get(`/admin/get-dashboard-data?culture=en`);
  return res.data;
};
