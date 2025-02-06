import axiosInstance from "../../../axios";

export const createUser = async (data) => {
  const response = await axiosInstance.post(
    `/admin/createaccount?culture=en`,
    data,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
  return response.data;
};
