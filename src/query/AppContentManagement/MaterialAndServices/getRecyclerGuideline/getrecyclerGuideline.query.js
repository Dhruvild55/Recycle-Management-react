import axiosInstance from "../../../../axios";

export const getRecyclerGuideline = async (data) => {
  const res = await axiosInstance.post(
    `/admin/getSignUpStepsForRecycler?culture=en`,
    data,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
  return res.data;
};
