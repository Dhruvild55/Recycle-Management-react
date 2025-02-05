import axiosInstance from "../../../axios";

export const createUser = async (data) => {
  const response = await axiosInstance.post(
    `/admin/createaccount?culture=en`,
    data
  );
  return response.data;
};
