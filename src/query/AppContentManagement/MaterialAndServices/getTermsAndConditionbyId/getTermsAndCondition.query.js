import axiosInstance from "../../../../axios";

export const getTermsAndonditionbyId = async (data) => {
  const res = await axiosInstance.post(
    `/admin/getTermsAndConditionsByMyServiceId?culture=en`,
    data,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
  return res.data;
};
