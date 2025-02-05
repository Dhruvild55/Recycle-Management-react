/* eslint-disable react/prop-types */
import { Avatar } from "@mui/material";

// COMPONENT

const ProfilePic = ({ size, image }) => {
  const defaultImg = "./images/profile-pic.png";
  return (
    <Avatar
      alt="Remy Sharp"
      src={image || defaultImg}
      sx={{ width: size, height: size }}
    />
  );
};

export default ProfilePic;
