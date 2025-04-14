import { useQuery } from "@tanstack/react-query";
import { getFilePath } from "../../../../query/getfilePath/filePath.query";

/* eslint-disable react/prop-types */
const CollecterAddressComponent = ({ userData }) => {
  const { data: imgData } = useQuery({
    queryKey: ["collectorAddressImg"],
    queryFn: () => getFilePath({ image: userData?.addressImgPath }),
  });
  return (
    <div className="collector-address">
      <div className="image-container">
        <img src={imgData || "/images/addressImg.png"} alt="House" />
      </div>
      <div className="address-details">
        <h2>Collector Address</h2>
        <p>{userData?.address}</p>
      </div>
    </div>
  );
};

export default CollecterAddressComponent;
