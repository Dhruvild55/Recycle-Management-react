import axiosInstance from "../../../../axios";

export const getCollectorPickupDetails = async (id) => {
  const res = await axiosInstance.get(
    `/admin/GetCollectorPickUpHistoryById/${id}?culture=en`
  );
  return res.data;
};
