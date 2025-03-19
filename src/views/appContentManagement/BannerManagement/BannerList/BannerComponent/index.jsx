import { bannerImage } from "../../../../../assets/images";
import { iconEdit } from "../../../../../assets/images/icons";

const BannerComponent = () => {
  return (
    <div className="banner-component">
      <div className="img">
        <img src={bannerImage} alt="Banner" />
      </div>
      <div className="details">
        <div className="title-section">
          <div>
            <p className="sorting-priority">Sorting Priority : 100</p>
            <p className="title">The Best Dishes of Brazil</p>
          </div>
          <div>
            <img src={iconEdit} alt="Edit" className="edit-icon" />
          </div>
        </div>
        <div className="banner-description">
          <p>
            Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate
            eleifend tellus. Aenean leo ligula, porttitor eu, cons
          </p>
        </div>
        <div className="banner-status">
          <p className="status-label">Status :</p>
          <div className="status-value">Unpublish</div>
        </div>
      </div>
    </div>
  );
};

export default BannerComponent;
