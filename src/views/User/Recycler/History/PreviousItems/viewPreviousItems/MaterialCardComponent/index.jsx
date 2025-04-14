/* eslint-disable react/prop-types */
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { getFilePath } from "../../../../../../../query/getfilePath/filePath.query";

const MaterialCardComponent = ({ items, index }) => {
  const image = items?.image;
  const { data: materialImg } = useQuery({
    queryKey: ["materialImgkey", image],
    queryFn: () => getFilePath({ image }),
  });

  return (
    <Card sx={{ maxWidth: 345, boxShadow: "none", width: "100%" }}>
      <CardActionArea>
        <CardMedia
          sx={{ borderRadius: "12px" }}
          component="img"
          height="200"
          image={materialImg}
          alt={items.materialName}
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
            {items?.materialName}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default MaterialCardComponent;
