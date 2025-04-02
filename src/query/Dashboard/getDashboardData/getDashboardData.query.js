import axiosInstance from "../../../axios";

export const getDashboardData = async ({ filterText, filterRecycler }) => {
  const res = await axiosInstance.get(
    `/admin/get-dashboard-data?topCollectorFilter=${filterText}&topRecyclerFilter=${filterRecycler}&culture=en`
  );
  return res.data;
};
