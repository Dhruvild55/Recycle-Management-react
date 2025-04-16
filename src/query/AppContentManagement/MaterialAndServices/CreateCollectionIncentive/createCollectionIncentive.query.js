import axiosInstance from "../../../../axios";

export const createCollectorIncentive = async (data) => {
  const res = await axiosInstance.post(
    `/admin/callection-Incentive?culture=en`,
    data,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
  return res.data;
};
