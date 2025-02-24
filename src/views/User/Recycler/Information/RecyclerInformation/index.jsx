import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";
import ProfileCardComponent from "../../../../../shared/components/ProfileCardComponent";

const RecyclerInformation = () => {
  const data = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 },
  ];
  const COLORS = ["#7CCBBC", "#1F7F82", "#B1D33A", "#ABEFC6"];
  return (
    <div className="recycler-information">
      <ProfileCardComponent />
      <div className="information-details">
        <label className="primary-title">Recycler Information</label>
        <div className="center-section">
          <div className="pie-chart-section">
            <p>Material</p>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={data}
                  cx="50%" // Centering dynamically
                  cy="45%"
                  innerRadius={60}
                  outerRadius={80}
                  fill="#8884d8"
                  paddingAngle={0}
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="data-section">
              <div className="data-div">
                <div className="round-icon">22</div>
                <p>Clothing(kg)</p>
              </div>
              <div className="data-div">
                <div className="round-icon">22</div>
                <p>Used Cooking oil(kg)</p>
              </div>
            </div>
          </div>
          <div className="points-container">
            <div className="points-sec">
              <div className="top-section">
                <p>Fat Pointes</p>
              </div>
              <div className="middle-section">
                <img src="/images/points-badge.png" />
                <h1 className="points-text">18,000</h1>
              </div>
              <div className="bottom-section">
                <p>Last updated 24 Dec, 15:05</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecyclerInformation;

{
  /* <div className="profile-body">
<div>
  <ProfileCardComponent />
</div>
<div className="recyclers-info-section">
  <div>
    <label className="primary-title">Recycler Information</label>
  </div>
  <div className="recycler-details">
    <div className="recycle-info-details">
      <BarChartComponent isDashboard={false} />
    </div>
    <div className="pointes-container">
      <div className="pointes-sec">
        <div className="top-section">
          <p>Fat Pointes</p>
        </div>
        <div className="middle-section">
          <img src="/images/points-badge.png" />
          <h1 className="points-text">18,000</h1>
        </div>
        <div className="bottom-section">
          <p>Last updated 24 Dec, 15:05</p>
        </div>
      </div>
    </div>
  </div>
</div>
</div> */
}
