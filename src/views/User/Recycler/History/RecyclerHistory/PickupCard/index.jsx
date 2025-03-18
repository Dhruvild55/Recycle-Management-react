/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {
  iconMarkerPin,
  iconTruck,
} from "../../../../../../assets/images/icons";
import ChipComponent from "../../../../../../shared/components/ChipComponent";

const PickUpCard = ({ data }) => {
  const { address, estPoints, pickupDate, pickupDateTime, pickupTimeOnly } =
    data;
  return (
    <div className="next-pickup-card">
      <div className="icon">
        <img src={iconTruck} alt="Truck Icon" />
      </div>
      <div className="content">
        <div className="content-header">
          <div className="title">Next Pickup</div>
          <ChipComponent label="On Schedule" color="green" />
        </div>
        <div className="location">
          <img src={iconMarkerPin} className="locationImg" /> {address}
        </div>
        <div className="date-time">
          <div className="date">{pickupDate}</div>
          <div className="time">{pickupTimeOnly}</div>
        </div>
      </div>
    </div>
  );
};

export default PickUpCard;
