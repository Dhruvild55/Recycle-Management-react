import axiosInstance from "../../../axios";

export const orderHistoryDetails = async (id) => {
  const res = await axiosInstance.get(
    `/admin/Get-Product-History-Details-ById/${id}?culture=en`
  );
  return res.data;
};
