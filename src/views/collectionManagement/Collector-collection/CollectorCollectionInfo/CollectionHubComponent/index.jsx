import { useQuery } from "@tanstack/react-query";
import { getFilePath } from "../../../../../query/getfilePath/filePath.query";

/* eslint-disable react/prop-types */
const CollectionHubCard = ({ data, isrecycler }) => {
  const { data: imgData } = useQuery({
    queryKey: ["getImage", isrecycler],
    queryFn: () =>
      getFilePath({
        image: isrecycler
          ? data?.data?.recyclerAddress.addressImg
          : data?.data?.collectionHubAddress.addressImg,
      }),
  });
  return (
    <div className="collection-hub-card">
      <div className="card-image">
        <img src={imgData} alt="Collection Hub" />
      </div>
      <div className="card-content">
        <h3>
          {isrecycler ? "Recycler Information" : "Collection Hub Information"}:
        </h3>
        <p>
          {isrecycler
            ? data?.data?.recyclerAddress?.address
            : data?.data?.collectionHubAddress?.address}
        </p>
      </div>
    </div>
  );
};

export default CollectionHubCard;
