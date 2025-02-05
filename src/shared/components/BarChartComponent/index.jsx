/* eslint-disable react/prop-types */
import { Cell, Pie, PieChart } from "recharts";
import { iconDrop } from "../../../assets/images/icons";

const BarChartComponent = ({ xPos, yPos }) => {
  const data = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 },
  ];

  const COLORS = ["#7CCBBC", "#1F7F82", "#B1D33A", "#ABEFC6"];

  return (
    <div className="chart-section">
      <div className="chart-box">
        <h2>Material</h2>
        {/* Pie Chart */}
        <PieChart width={xPos} height={yPos}>
          <Pie
            data={data}
            cx={120}
            cy={130}
            innerRadius={60}
            outerRadius={93}
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
        {/* Centered Icon */}
        <div>
          <img
            src={iconDrop}
            style={{
              position: "absolute",
              left: "51%",
              top: "58%",
              transform: "translate(-50%, -50%)",
              fontSize: "24px",
              color: "#555",
            }}
          />
        </div>
      </div>
      <div className="chart-data">
        <div>
          <div className="data-rounded">11</div>
          <h2>asdf</h2>
        </div>
        <div>
          <div className="data-rounded">15</div>
          <h2>asdf</h2>
        </div>
      </div>
    </div>
  );
};

export default BarChartComponent;
