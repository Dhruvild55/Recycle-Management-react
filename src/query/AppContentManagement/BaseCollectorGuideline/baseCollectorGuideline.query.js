import axiosInstance from "../../../axios";

export const baseGuideline = async () => {
  const res = await axiosInstance.get(
    "/admin/getAllCollector-BaseSignUpSteps?culture=en"
  );
  return res.data;
};
