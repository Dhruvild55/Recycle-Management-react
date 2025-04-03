import { useQuery } from "@tanstack/react-query";
import { getFilePath } from "../../../../../query/getfilePath/filePath.query";

/* eslint-disable react/prop-types */
const CollectionHubCard = ({ image, title, address }) => {
  const { data } = useQuery({
    queryKey: ["getImage", image],
    queryFn: () => getFilePath({ image: image }),
  });
  console.log(data);
  return (
    <div className="collection-hub-card">
      <div className="card-image">
        <img src={data} alt="Collection Hub" />
      </div>
      <div className="card-content">
        <h3>{title}</h3>
        <p>{address}</p>
      </div>
    </div>
  );
};

export default CollectionHubCard;
