import axiosInstance from "../../../../axios";

export const getMaterialAndServices = async () => {
  const res = await axiosInstance.get(
    `/admin/getAllMaterialServiceAndManagement?culture=en`
  );
  return res.data;
};
