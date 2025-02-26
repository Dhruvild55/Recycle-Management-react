/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Avatar } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { getFilePath } from "../../../query/getfilePath/filePath.query";

const ProfilePic = ({ size, image, name }) => {
  const { data, isLoading } = useQuery({
    queryKey: ["filePath", image],
    queryFn: () => getFilePath({ image }),
    enabled: !!image,
  });

  return (
    <Avatar alt={name} src={image || ""} sx={{ width: size, height: size }} />
  );
};

export default ProfilePic;
