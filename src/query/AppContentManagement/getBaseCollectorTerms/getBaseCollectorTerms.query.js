import axiosInstance from "../../../axios";

export const getCollectorBaseTermsAndCondition = async () => {
  const res = await axiosInstance.get(
    `/admin/getAllCollector-BaseSignUpSteps?culture=en`
  );
  return res.data;
};
