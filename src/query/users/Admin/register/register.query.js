import axiosInstance from "../../../../axios";

export const RegisterAdmin = async (data) => {
  const response = await axiosInstance.post(`/auth/register?culture=en`, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data;
};
