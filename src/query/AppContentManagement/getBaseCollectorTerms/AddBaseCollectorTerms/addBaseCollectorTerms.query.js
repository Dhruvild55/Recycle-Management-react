import axiosInstance from "../../../../axios";

export const addBaseTerms = async (data) => {
  const res = await axiosInstance.post(
    `/admin/createCollector-BaseTermsAndCondition?culture=en`,
    data,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
  res.data;
};
