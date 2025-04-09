import axiosInstance from "../../../axios";

export const createAndUpdateProduct = async (data) => {
  const res = await axiosInstance.post(
    `/admin/create-Update-Product?culture=en`,
    data,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
  return res.data;
};
