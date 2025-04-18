import axiosInstance from "../../../axios";

export const addSponsor = async (data) => {
  const res = await axiosInstance.post(
    `admin/create-Update-Sponsor?culture=en`,
    data,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
  return res.data;
};
