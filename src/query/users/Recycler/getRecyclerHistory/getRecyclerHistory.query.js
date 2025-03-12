import axiosInstance from "../../../../axios";
export const getRecyclerHistory = async ({ id }) => {
  const response = await axiosInstance.get(
    `/admin/getRecyclerPickupDropsHistory/${id}?culture=en`
  );
  return response.data;
};
