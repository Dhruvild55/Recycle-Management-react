import axiosInstance from "../../../../axios";

export const createBaseGuideline = async (data) => {
  const res = await axiosInstance.post(
    `/admin/createCollector-BaseSignUpSteps?culture=en`,
    data,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
  return res.data;
};
