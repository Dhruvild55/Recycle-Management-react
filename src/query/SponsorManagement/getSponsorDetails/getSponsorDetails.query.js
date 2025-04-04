import axiosInstance from "../../../axios";

export const getSponsorDetails = async (id) => {
  const res = await axiosInstance.get(
    `/admin/get-Sponsers-Details-ById/${id}?culture=en`
  );
  return res.data;
};
