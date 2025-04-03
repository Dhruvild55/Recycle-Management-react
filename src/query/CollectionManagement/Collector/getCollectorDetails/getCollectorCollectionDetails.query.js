import axiosInstance from "../../../../axios";

export const gteCollectorCollectionDetails = async (id) => {
  const res = await axiosInstance.get(
    `/admin/GetCollectorCollectionById/${id}?culture=en`
  );
  return res.data;
};
