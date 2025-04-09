import axiosInstance from "../../../axios";

export const updateOrderHistoryDetails = async (id, formData) => {
  const res = await axiosInstance.put(
    `/admin/edit-Product-Order-Status/${id}?culture=en`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
  return res.data;
};
