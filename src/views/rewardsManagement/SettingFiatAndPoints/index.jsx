/* eslint-disable react/prop-types */
const SettingFiatAndPoints = () => {
  const items = [
    { id: 1, type: "Oil", points: 25 },
    { id: 2, type: "Oil", points: 25 },
    { id: 3, type: "Oil", points: 25 },
    { id: 4, type: "Oil", points: 25 },
    { id: 5, type: "Oil", points: 25 },
    { id: 6, type: "Oil", points: 25 },
  ];

  const Card = ({ type, points }) => {
    return (
      <div className="card">
        <h4>{type}</h4>
        <p>
          1 kg &nbsp; : &nbsp; <span className="points">{points} pts.</span>
        </p>
        <p className="domination">Points domination</p>
        <input type="text" value="0.00" readOnly />
      </div>
    );
  };
  return (
    <div className="fiat-points-section" style={{ marginTop: "30px" }}>
      <h1 className="primary-title">Fiat and denomination Management</h1>
      <div className="card-container">
        {items.map((item) => (
          <Card key={item.id} type={item.type} points={item.points} />
        ))}
      </div>
    </div>
  );
};

export default SettingFiatAndPoints;
