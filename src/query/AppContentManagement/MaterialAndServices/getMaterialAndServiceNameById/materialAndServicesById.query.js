import axiosInstance from "../../../../axios";

export const getMaterialAndServicesById = async () => {
  const res = await axiosInstance.get(
    `/admin/getAllMaterialNameAndMyServicesId?culture=en`
  );
  return res.data;
};
