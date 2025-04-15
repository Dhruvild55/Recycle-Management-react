import axiosInstance from "../../../../axios";

export const deleteTerms = async (id) => {
  const res = await axiosInstance.delete(
    `/admin/delete-Terms/${id}?culture=en`
  );
  return res.data;
};
