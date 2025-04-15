import axiosInstance from "../../../../axios";

export const getclearance = async (id, pageNumber, pageSize) => {
  const res = await axiosInstance.get(
    `admin/getCollectorClearance/${id}?PageNumber=${pageNumber}&PageSize=${pageSize}&culture=en`
  );
  return res.data;
};
