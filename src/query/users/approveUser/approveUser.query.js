import axiosInstance from "../../../axios";

export const approveUsers = async (data) => {
  const response = await axiosInstance.put(
    `/admin/ApproveUser?culture=en`,
    data
  );
  return response.data;
};
