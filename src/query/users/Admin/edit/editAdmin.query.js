import axiosInstance from "../../../../axios";

export const EditAdmin = async (id, data) => {
  const res = await axiosInstance.put(
    `admin/update-user/${id}&culture=en`,
    data,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
  return res.data;
};
