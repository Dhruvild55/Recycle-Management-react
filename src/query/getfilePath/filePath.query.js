import axiosInstance from "../../axios";

export const getFilePath = async ({ image }) => {
  if (!image) return "";

  try {
    const response = await axiosInstance.get(
      `/profile/getfile?filePath=${image}&culture=en`,
      { responseType: "blob" }
    );
    return URL.createObjectURL(response.data);
  } catch (error) {
    console.error("Error fetching image:", error);
    return "";
  }
};
