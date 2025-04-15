import axiosInstance from "../../../../axios";

export const editTermsAndCondition = async (id, data) => {
  const res = await axiosInstance.put(
    `/admin/update-Terms/${id}?culture=en`,
    data
  );
  return res.data;
};
