import axiosInstance from "../../../axios";

export const getCollectorRequestList = async ({ pageNumber, pageSize }) => {
  const res = await axiosInstance.get(
    `/admin/get-Collector-Request-List?PageNumber=${pageNumber}&PageSize=${pageSize}&culture=en`
  );
  return res.data;
};
