/* eslint-disable react/prop-types */
const FatPointComponent = ({ fatLastUpdate = "24 Dec, 15:05", points = 0 }) => {
  return (
    <div className="points-sec">
      <div className="top-section">
        <p>Fat Points</p>
      </div>
      <div className="middle-section">
        <img src="/images/points-badge.png" alt="Points Badge" />
        <h1 className="points-text">{points}</h1>
      </div>
      <div className="bottom-section">
        <p>Last updated: {fatLastUpdate}</p>
      </div>
    </div>
  );
};

export default FatPointComponent;
