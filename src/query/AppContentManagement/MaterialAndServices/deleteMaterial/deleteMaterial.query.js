import axiosInstance from "../../../../axios";

export const deleteMaterial = async (id) => {
  const res = await axiosInstance.delete(
    `/admin/delete-Material/${id}?culture=en`
  );
  return res.data;
};
