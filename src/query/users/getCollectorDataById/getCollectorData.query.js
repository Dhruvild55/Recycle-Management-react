import axiosInstance from "../../../axios";

export const getCollectorDetails = async ({ id, pageNumber, pageSize }) => {
  console.log(pageNumber, pageSize);
  const response = await axiosInstance.get(
    `admin/getcollectoruserbyid/${id}?pageNumber=${pageNumber}&pageSize=${pageSize}&culture=en`
  );
  return response.data;
};
