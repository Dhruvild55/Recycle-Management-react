import axiosInstance from "../../axios";

export const loginUser = async (formData) => {
  const respose = await axiosInstance.post("/auth/login?culture=en", formData);
  return respose.data;
};
