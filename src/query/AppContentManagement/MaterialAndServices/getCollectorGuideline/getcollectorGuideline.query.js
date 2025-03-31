import axiosInstance from "../../../../axios";

export const getCollectorGuideline = async (data) => {
  const res = await axiosInstance.post(
    `admin/getSignUpStepsForCollector?culture=en`,
    data,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
  return res.data;
};
