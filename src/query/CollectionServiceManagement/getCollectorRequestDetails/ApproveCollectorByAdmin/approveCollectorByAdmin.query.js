import axiosInstance from "../../../../axios";

export const approveCollectorByAdmin = async ({ payload, id }) => {
  const res = await axiosInstance.put(
    `/admin/Approve-Collector-By-Admin/${id}?culture=en`,
    payload
  );
  return res.data;
};
