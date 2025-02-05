import axiosInstance from "../../../axios";

export const getPermission = async ({ role }) => {
  const response = await axiosInstance.get(
    `/admin/getpermissions?roleName=${role}&culture=en`
  );
  return response.data;
};
