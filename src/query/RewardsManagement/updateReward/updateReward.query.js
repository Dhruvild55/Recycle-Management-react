import axiosInstance from "../../../axios";

export const updateReward = async (id, updatedData) => {
  console.log(id, updatedData);
  const res = await axiosInstance.put(
    `/admin/updateReward/${id}?culture=en`,
    updatedData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
  return res.data;
};
