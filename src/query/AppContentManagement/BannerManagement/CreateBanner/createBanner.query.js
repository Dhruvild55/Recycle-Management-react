import axiosInstance from "../../../../axios";

export const CreateBanner = async (data) => {
  console.log(data);
  const res = await axiosInstance.post(`/admin/createBanner?culture=en`, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return res.data;
};
