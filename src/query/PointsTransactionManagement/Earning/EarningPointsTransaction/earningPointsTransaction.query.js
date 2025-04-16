import axiosInstance from "../../../../axios";

export const earningPointsTransaction = async () => {
  const res = await axiosInstance.get(
    `/admin/earning-points-Transaction-List?PageNumber=1&PageSize=10&SearchTerm=&culture=en`
  );
  return res.data;
};
