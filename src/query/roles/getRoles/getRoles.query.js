import axiosInstance from "../../../axios";
export const getRoles = async () => {
  const response = await axiosInstance.get(`/admin/getroles?culture=en`, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
  return response.data;
};
