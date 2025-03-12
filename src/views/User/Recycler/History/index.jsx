import { useNavigate } from "react-router-dom";
import RecyclerInfoTopSection from "../Component/RecyclerInfoTopSection";
import { iconDelete } from "../../../../assets/images/icons";
import RecyclerHistory from "./RecyclerHistory";
import PreviousItems from "./PreviousItems";

const RecyclerHistoryDetails = () => {
  const navigate = useNavigate();
  return (
    <div className="user-profile-section">
      <div className="common-main-section">
        <div className="header-section">
          <button
            className="back-text"
            onClick={() => navigate("/user-Management/recycler")}
          >
            &larr; BACK
          </button>
          <div className="right-section">
            <button className="" style={{ border: "none" }}>
              <img src={iconDelete} alt="delete icon" /> Deactivate Account
            </button>
          </div>
        </div>
        <RecyclerInfoTopSection />
        <div className="recycler-history">
          <label className="primary-title">Recycler History</label>
          <div className="card-wrapper">
            <RecyclerHistory />
          </div>
        </div>
      </div>
      <div className="recycler-history">
        <PreviousItems />
      </div>
    </div>
  );
};
export default RecyclerHistoryDetails;
