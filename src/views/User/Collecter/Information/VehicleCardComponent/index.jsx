/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useQuery } from "@tanstack/react-query";
import { getFilePath } from "../../../../../query/getfilePath/filePath.query";

const VehicleCardComponent = ({
  brand,
  model,
  color,
  registrationNo,
  vehicleImgPath,
  type,
}) => {
  const image = vehicleImgPath;

  const { data: imagesData, isLoading } = useQuery({
    queryKey: ["filePath1", image],
    queryFn: () => getFilePath({ image }),
    enabled: !!image,
  });
  return (
    <div className="card-section-1">
      <div className="card">
        <img src={imagesData} alt={brand} className="card__image" />
        <div className="card__content row">
          <div className="col-lg-5">
            <p className="title">Type</p>
            <p className="title">Brand</p>
            <p className="title">Model</p>
            <p className="title">Color</p>
            <p className="title">Registration No.</p>
          </div>
          <div className="col-lg-1">
            <p>:</p>
            <p>:</p>
            <p>:</p>
            <p>:</p>
            <p>:</p>
          </div>
          <div className="col-lg-4">
            <p className="detail">{type}</p>
            <p className="detail">{brand}</p>
            <p className="detail">{model}</p>
            <p className="detail">{color}</p>
            <p className="detail">{registrationNo}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default VehicleCardComponent;
