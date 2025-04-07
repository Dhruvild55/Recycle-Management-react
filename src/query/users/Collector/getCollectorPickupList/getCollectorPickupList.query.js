import axiosInstance from "../../../../axios";

export const getCollectorPickupList = async (id, pageSize, pageNumber) => {
  const res = await axiosInstance.get(
    `/admin/GetCollectorPickUpHistory/${id}?PageSize=${pageSize}&PageNumber=${pageNumber}&culture=en`
  );
  return res.data;
};
