import axiosInstance from "../../../axios";

export const createCampaign = async (data) => {
  const response = await axiosInstance.post(
    `/admin/createcampaign?culture=en`,
    data,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
  return response.data;
};
