import axiosInstance from "../../../../axios";

export const createTremsAndCondition = async (data) => {
  const res = await axiosInstance.post(
    `admin/createMyService-TermsAndCondition?culture=en`,
    data,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
  return res.data;
};
