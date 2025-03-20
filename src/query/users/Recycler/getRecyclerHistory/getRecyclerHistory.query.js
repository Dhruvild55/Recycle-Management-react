import axiosInstance from "../../../../axios";
export const getRecyclerHistory = async ({ id, pageSize, pageNumber }) => {
  const response = await axiosInstance.get(
    `/admin/getRecyclerPickupHistory/${id}?pageNumber=${pageNumber}&pageSize=${pageSize}&culture=en`
  );
  return response.data;
};
