import axiosInstance from "../../../../axios";

export const updateGuideline = async ({ id, submitData }) => {
  const res = await axiosInstance.put(
    `/admin/update-SignUpSteps/${id}?culture=en`,
    submitData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
  return res.data;
};
