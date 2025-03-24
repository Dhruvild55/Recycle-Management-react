import axiosInstance from "../../../../axios";

export const EditAdmin = async () => {
  const res = await axiosInstance.put(`admin/update-user/&culture=en`);
  return res.data;
};
