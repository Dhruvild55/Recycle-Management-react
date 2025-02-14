import axiosInstance from "../../../axios";

export const updateRoles = async (data) => {
  const response = await axiosInstance.put(
    `/admin/updatepermission?culture=en`,
    data
  );
  return response.data;
};
