import axiosInstance from "../../../axios";

export const deleteUser = async (data) => {
  const response = await axiosInstance.put(
    `/admin/deleteuser?culture=en`,
    data,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
  return response.data;
};
