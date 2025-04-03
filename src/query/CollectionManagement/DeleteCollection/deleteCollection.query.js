import axiosInstance from "../../../axios";

export const deleteCollection = async (id) => {
  const res = await axiosInstance.delete(
    `/admin/delete-Collection/${id}?culture=en`
  );
  return res.data;
};
