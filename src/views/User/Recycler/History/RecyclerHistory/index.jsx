import { iconMarkerPin, iconTruck } from "../../../../../assets/images/icons";

const RecyclerHistory = () => {
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
          <img src={iconMarkerPin} /> Southpark Avenue
        </div>
        <div className="date-time">
          <div className="date">14 Dec 2024</div>
          <div className="time">6:00 - 6:30 PM</div>
        </div>
      </div>
    </div>
  );
};

export default RecyclerHistory;
