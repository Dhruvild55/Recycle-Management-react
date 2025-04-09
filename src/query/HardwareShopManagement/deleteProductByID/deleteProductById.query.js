import axiosInstance from "../../../axios";

export const deleteProductById = async (id) => {
  const res = await axiosInstance.delete(
    `/admin/delete-Products-ById/${id}?culture=en`,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
  return res.data;
};
