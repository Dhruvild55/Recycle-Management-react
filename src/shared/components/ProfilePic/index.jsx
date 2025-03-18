/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Avatar } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { getFilePath } from "../../../query/getfilePath/filePath.query";
import { iconCamara } from "../../../assets/images/icons";

const ProfilePic = ({ size, image, name, isChange }) => {
  const { data, isLoading } = useQuery({
    queryKey: ["filePath", image],
    queryFn: () => getFilePath({ image }),
    enabled: !!image,
  });

  return (
    <div>
      <Avatar alt={name} src={data || ""} sx={{ width: size, height: size }} />
      {isChange && (
        <div
          style={{
            backgroundColor: "#1C6D70",
            borderRadius: "20px",
            padding: "4px 15px 15px 9px",
            width: "35px",
            height: "35px",
            position: "relative",
            left: "70px",
            bottom: "30px",
          }}
        >
          <img src={iconCamara} />
        </div>
      )}
    </div>
  );
};

export default ProfilePic;
