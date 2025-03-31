import axiosInstance from "../../../../axios";

export const deleteGuideline = async (id) => {
  const res = await axiosInstance.delete(
    `/admin/delete-SignUpStep/${id}?culture=en`
  );
  return res.data;
};
