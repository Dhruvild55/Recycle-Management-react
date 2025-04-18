import axiosInstance from "../../../axios";

export const updateFiatPoints = async (payload) => {
  const res = await axiosInstance.post(
    `admin/updateFiatAndPoints?culture=en`,
    payload
  );
  return res.data;
};
