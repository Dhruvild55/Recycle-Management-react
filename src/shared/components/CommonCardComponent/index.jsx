import { useQuery } from "@tanstack/react-query";
import { getFilePath } from "../../../query/getfilePath/filePath.query";

/* eslint-disable react/prop-types */
const CommonCardComponent = ({ image, title, description, isMaterial }) => {
  const { data: imgData } = useQuery({
    queryKey: ["fileData", image],
    queryFn: () => getFilePath({ image }),
  });
  return (
    <div className="card-section-1">
      <div className="card">
        {!isMaterial && (
          <img
            src={imgData || "/images/addressimg-2.png"}
            alt={title}
            className="card__image"
          />
        )}

        <div className="card__content">
          {title && <h3 className="card__title">{title}</h3>}
          {!isMaterial && <p className="card__description">{description}</p>}
        </div>
      </div>
    </div>
  );
};

export default CommonCardComponent;
