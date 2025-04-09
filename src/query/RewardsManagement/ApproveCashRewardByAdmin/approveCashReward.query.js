import axiosInstance from "../../../axios";

export const approveCashReward = async (id, data) => {
  const res = await axiosInstance.put(
    `/admin/Approve-CashReward-By-Admin/2?culture=en`,
    data,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
  return res.data;
};
