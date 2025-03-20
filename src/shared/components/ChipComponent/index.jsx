/* eslint-disable react/prop-types */
import { Chip } from "@mui/material";

const ChipComponent = ({ label, color }) => {
  return (
    <Chip
      label={label}
      variant="outlined"
      className="custom-chip"
      sx={{
        fontFamily: "Inter",
        padding: "4px 8px", // Adjust padding
        borderRadius: "16px", // Optional: Change border radius
        fontSize: "12px",
        fontWeight: "500",
        backgroundColor:
          color === "yellow"
            ? "#FFFAEB"
            : color === "green"
            ? "#ECFDF3"
            : color === "blue"
            ? "#EFF8FF"
            : "",
        color:
          color === "yellow"
            ? "#B54708"
            : color === "green"
            ? "#067647"
            : color === "blue"
            ? "#175CD3"
            : "",
        borderColor:
          color === "yellow"
            ? "#FEDF89"
            : color === "green"
            ? "#ABEFC6"
            : color === "blue"
            ? "#B2DDFF"
            : "",
      }}
    />
  );
};

//
export default ChipComponent;
