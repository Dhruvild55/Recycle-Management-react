import axiosInstance from "../../../../axios";

export const addGuideline = async (data) => {
  console.log(data);
  const res = await axiosInstance.post(
    `/admin/createSignUpSteps?culture=en`,
    data,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
  return res.data;
};
