import axiosInstance from "../../../../axios";

export const createCollectorIncentive = async (data) => {
  const res = await axiosInstance.put(
    `/admin/create-Or-Update-callection-Incentive?culture=en`,
    data,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
  return res.data;
};
