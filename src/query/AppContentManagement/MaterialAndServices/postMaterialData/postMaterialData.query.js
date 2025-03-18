import axiosInstance from "../../../../axios";

export const postMaterialData = async (data) => {
  const response = await axiosInstance.post(
    `/admin/createMaterial?culture=en`,
    data,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
  return response.data;
};
