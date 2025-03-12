import axiosInstance from "../../../../axios";

export const getRecyclerHistoryData = async ({ id }) => {
  const response = await axiosInstance.get(
    `/admin/getRecyclerPickupDropsHistoryById/${id}?culture=en`
  );
  return response.data;
};
