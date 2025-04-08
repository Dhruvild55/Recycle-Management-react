import axiosInstance from "../../../../axios";

export const getHardwareList = async ({ id, pageNumber, pageSize }) => {
  const res = await axiosInstance.get(
    `/admin/getRecyclerProductHistory/${id}?PageSize=${pageSize}&PageNumber=${pageNumber}&culture=en`
  );
  return res.data;
};
