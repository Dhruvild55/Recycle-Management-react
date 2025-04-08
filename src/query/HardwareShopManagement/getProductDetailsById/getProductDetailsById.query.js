import axiosInstance from "../../../axios";

export const getProductDetails = async (id) => {
  const res = await axiosInstance.get(
    `/admin/get-Products-ById/${id}?culture=en`
  );
  return res.data;
};
