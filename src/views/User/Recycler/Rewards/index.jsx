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
      <div className="reward-image">
        <img src="/images/image.png" alt="Reward" />
      </div>
      <div className="rewards-title">
        <h3>{reward.title}</h3>
        <h2>Via rewards</h2>
        <p>Claimed on {reward.claimedDate}</p>
      </div>
    </div>
    <div>
      <p>Status </p>
      <h2>{reward.status}</h2>
    </div>
    <div>
      <p>Validity</p>
      <h2>{reward.validity}</h2>
    </div>
    <div>
      <p>Point Spend </p>
      <h2>{reward.points}</h2>
    </div>
  </div>
);

const RewardsList = () => (
  <div className="rewards-list">
    {rewardsData.map((reward, index) => (
      <RewardItem key={index} reward={reward} />
    ))}
  </div>
);

export default RewardsList;
