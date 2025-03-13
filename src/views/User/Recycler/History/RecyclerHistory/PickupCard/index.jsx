/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {
  iconMarkerPin,
  iconTruck,
} from "../../../../../../assets/images/icons";

const PickUpCard = ({ data }) => {
  console.log(data);
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
          <div className="status">On Schedule</div>
        </div>
        <div className="location">
          <img src={iconMarkerPin} /> {address}
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
