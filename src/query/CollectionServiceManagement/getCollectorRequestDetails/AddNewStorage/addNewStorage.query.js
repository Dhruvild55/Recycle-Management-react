import axiosInstance from "../../../../axios";

export const AddStorage = async ({ collectorId, materialId, kg }) => {
  console.log(collectorId, materialId, kg);
  const data = {
    materialMasterId: materialId,
    current: 0,
    min: 0,
    max: kg,
    isApproved: true,
    approvedBy: collectorId,
  };
  const res = await axiosInstance.post(
    `/storage/addnewstorage?culture=en`,
    data
  );
  return res.data;
};
