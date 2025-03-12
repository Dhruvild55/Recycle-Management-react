import axiosInstance from "../../../../axios";

export const getRecyclerDetails = async ({ id }) => {
  const response = await axiosInstance.get(
    `admin/getrecycleruserbyid/${id}?culture=en`
  );
  return response.data;
};
