/* eslint-disable react/prop-types */
import { useQuery } from "@tanstack/react-query";
import { iconEdit } from "../../../../../assets/images/icons";
import { getFilePath } from "../../../../../query/getfilePath/filePath.query";
import { useSelector } from "react-redux";

const BannerComponent = ({ items, isEvent }) => {
  const translations = useSelector((state) => state.settings.translations);
  const { state, postCode } = translations;
  const { imagePath, title, sortingPriority, description, status } = items;
  const image = imagePath;
  const { data: ImageData } = useQuery({
    queryKey: ["imageData", image],
    queryFn: () => getFilePath({ image }),
  });
  return (
    <div className="banner-component">
      <div className="img">
        <img src={ImageData} alt="Banner" />
      </div>
      <div className="details">
        <div className="title-section">
          <div>
            <p className="sorting-priority">
              Sorting Priority : {sortingPriority}
            </p>
            <p className="title">{title}</p>
          </div>
          <div>
            <img src={iconEdit} alt="Edit" className="edit-icon" />
          </div>
        </div>
        <div className="banner-description">
          <p className="description">{description}</p>
        </div>
        {isEvent && (
          <div className="state-details">
            <div className="details">
              <label className="title">{state}</label>
              <br></br>
              <label className="data">Kuala Lumpur</label>
            </div>
            <div className="details">
              <label className="title">{postCode}</label>
              <br></br>
              <label className="data">Kuala Lumpur</label>
            </div>
          </div>
        )}

        <div className="banner-status">
          <p className="status-label">Status :</p>
          <div
            className={`status-value ${
              status === "Publish" ? " dark" : " light"
            }`}
          >
            {status}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerComponent;
