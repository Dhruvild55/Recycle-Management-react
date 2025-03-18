import axiosInstance from "../../../../axios";

export const deleteMaterial = async (id) => {
  console.log(id);
  const res = await axiosInstance.delete(
    `/admin/delete-Material/${id}?culture=en`
  );
  return res.data;
};
