import axiosInstance from "../../../../axios";

export const RecyclerDetailsById = async (id) => {
  const res = await axiosInstance.get(
    `/admin/GetRecyclerCollectionById/${id}?culture=en`
  );
  return res.data;
};
