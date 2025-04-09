import axiosInstance from "../../../axios";

export const getCollectorBaseTermsAndCondition = async () => {
  const res = await axiosInstance.get(
    `/admin/getAllCollector-BaseTermsAndConditions`
  );
  return res.data;
};
