import axiosInstance from "../../../../axios";

export const getCollectorIncentive = async ({ MyServiceId }) => {
  const res = await axiosInstance.get(
    `/admin/get-CallectionIncentive-List/${MyServiceId}?PageNumber=1&PageSize=10&culture=en`
  );
  return res.data;
};
