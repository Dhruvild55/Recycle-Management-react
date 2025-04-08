import axiosInstance from "../../../axios";

export const getCollectorRequestDetails = async (id) => {
  const res = await axiosInstance.get(
    `/admin/get-Collector-Request-Details-ById/${id}?culture=en`
  );
  return res.data;
};
