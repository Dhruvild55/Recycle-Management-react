/* eslint-disable react/prop-types */
import { Avatar } from "@mui/material";

// COMPONENT

const ProfilePic = ({ size }) => {
  return (
    <Avatar
      alt="Remy Sharp"
      src="./images/profile-pic.png"
      sx={{ width: size, height: size }}
    />
  );
};

export default ProfilePic;
