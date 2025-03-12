import { useNavigate } from "react-router-dom";
import { iconDelete } from "../../../../assets/images/icons";
import RecyclerInfoTopSection from "../Component/RecyclerInfoTopSection";

/* eslint-disable react/prop-types */
const rewardsData = [
  {
    title: "5% Subway Discount",
    claimedDate: "12/12/12 15:00",
    status: "Claimed",
    validity: "4 Days",
    points: "100 Points",
  },
  {
    title: "5% Subway Discount",
    claimedDate: "12/12/12 15:00",
    status: "Claimed",
    validity: "4 Days",
    points: "100 Points",
  },
  {
    title: "5% Subway Discount",
    claimedDate: "12/12/12 15:00",
    status: "Claimed",
    validity: "4 Days",
    points: "100 Points",
  },
  {
    title: "5% Subway Discount",
    claimedDate: "12/12/12 15:00",
    status: "Claimed",
    validity: "4 Days",
    points: "100 Points",
  },
];

const RewardItem = ({ reward }) => (
  <div className="reward-item">
    <div className="reward-details">
      <div className="reward-image ">
        <img src="/images/image.png" alt="Reward" />
      </div>
      <div className="rewards-title ">
        <h3>{reward.title}</h3>
        <h2>Via rewards</h2>
        <p>Claimed on {reward.claimedDate}</p>
      </div>
    </div>
    <div className="secondary-details">
      <div className="">
        <p>Status </p>
        <h2>{reward.status}</h2>
      </div>
      <div className="">
        <p>Validity</p>
        <h2>{reward.validity}</h2>
      </div>
      <div className="">
        <p>Point Spend </p>
        <h2>{reward.points}</h2>
      </div>
    </div>
  </div>
);

const RewardsList = () => {
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
        <label className="primary-title">Rewards History</label>
        <div className="rewards-list">
          {rewardsData.map((reward, index) => (
            <RewardItem key={index} reward={reward} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RewardsList;
