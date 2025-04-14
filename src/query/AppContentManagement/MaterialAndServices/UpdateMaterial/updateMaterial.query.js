import axiosInstance from "../../../../axios";

export const updateMaterial = async ({ id, updateData }) => {
  const res = await axiosInstance.put(
    `/admin/update-Material-ById/${id}?culture=en`,
    updateData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
  return res.data;
};
