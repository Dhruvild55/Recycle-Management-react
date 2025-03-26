import axiosInstance from "../../../../axios";

export const createEvent = async (data) => {
  const res = await axiosInstance.post(`/admin/createEvent?culture=en`, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return res.data;
};
