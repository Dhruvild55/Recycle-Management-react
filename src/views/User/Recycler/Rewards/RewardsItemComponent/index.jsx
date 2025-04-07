/* eslint-disable react/prop-types */
const RewardsItemComponent = ({ reward }) => {
  const formatDate = (dateString) => {
    if (!dateString || dateString === "0001-01-01T00:00:00") {
      return "Not Available";
    }
    const date = new Date(dateString);
    return date
      .toLocaleString("en-US", {
        year: "2-digit",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      })
      .replace(",", "");
  };
  return (
    <div className="reward-item">
      <div className="reward-details">
        <div className="reward-image ">
          <img src="/images/image.png" alt="Reward" />
        </div>
        <div className="rewards-title ">
          <h3>{reward.rewardName}</h3>
          <h2>Via rewards</h2>
          <p>Claimed on {formatDate(reward?.claimedOn)}</p>
        </div>
      </div>
      <div className="secondary-details">
        <div className="">
          <p>Status </p>
          <h2>{reward?.status}</h2>
        </div>
        <div className="">
          <p>Validity</p>
          <h2>{reward?.validity}</h2>
        </div>
        <div className="">
          <p>Point Spend </p>
          <h2>{reward?.pointSpent}</h2>
        </div>
      </div>
    </div>
  );
};

export default RewardsItemComponent;
