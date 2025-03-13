/* eslint-disable react/prop-types */
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const MaterialCardComponent = ({ items = {}, index }) => {
  const { image = "/images/oilwaste.png", materialName = "Used Cooking Oil" } =
    items;
  return (
    <Card sx={{ maxWidth: 345, boxShadow: "none", width: "100%" }}>
      <CardActionArea>
        <CardMedia
          sx={{ borderRadius: "12px" }}
          component="img"
          height="200"
          image={image}
          alt={materialName}
        />
        <CardContent
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            padding: "16px 0px",
          }}
        >
          <Typography
            variant="body1"
            sx={{
              color: "#181D27",
              fontSize: "20px",
              fontWeight: "600",
            }}
          >
            Item {index + 1}:
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "#535862", fontSize: "14px", fontWeight: "400" }}
          >
            {materialName}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default MaterialCardComponent;
