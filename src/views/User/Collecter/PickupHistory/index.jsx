import { useNavigate } from "react-router-dom";
import CollectorTopSection from "../Component/CollectorTopSection";
import { iconDelete } from "../../../../assets/images/icons";
import CustomTable from "../../../../shared/components/CustomTable";
import { PickupHistoryData, pickupHistoryHeader } from "./config";

const PickupHistory = () => {
  const navigate = useNavigate();
  return (
    <div className="user-profile-section">
      <div className="common-main-section">
        <div className="header-section">
          <div className="left-side">
            <button className="back-text" onClick={() => navigate(-1)}>
              &larr; BACK
            </button>
          </div>
          <div className="right-side">
            <img src={iconDelete} />
            <span>Suspend Collection Status</span>
          </div>
        </div>
        <CollectorTopSection />
        <div style={{ marginBottom: "10px" }}>
          <label className="primary-title">List of Recycler</label>
        </div>
        <CustomTable
          headers={pickupHistoryHeader(navigate)}
          data={PickupHistoryData}
        />
      </div>
    </div>
  );
};

export default PickupHistory;
