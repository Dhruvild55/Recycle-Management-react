import axiosInstance from "../../../axios";

export const updateBannerAndEvent = async ({ formData, id }) => {
  const res = await axiosInstance.put(
    `/admin/update-BannerOrEvant/${id}`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
  return res.data;
};
