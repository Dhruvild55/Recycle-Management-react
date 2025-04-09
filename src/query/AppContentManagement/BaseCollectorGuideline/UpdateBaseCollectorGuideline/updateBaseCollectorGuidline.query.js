import axiosInstance from "../../../../axios";

export const updateBaseCollectorGuidline = async ({ id, formData }) => {
  const res = await axiosInstance.put(
    `/admin/update-SignUpSteps/${id}?culture=en`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
  return res.data;
};
