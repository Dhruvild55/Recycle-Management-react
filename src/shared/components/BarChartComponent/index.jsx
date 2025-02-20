/* eslint-disable react/prop-types */
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";
import { iconDrop } from "../../../assets/images/icons";

const BarChartComponent = () => {
  const data = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 },
  ];

  const COLORS = ["#7CCBBC", "#1F7F82", "#B1D33A", "#ABEFC6"];

  return (
    <div
      className="chart-section"
      style={{ position: "relative", width: "100%", maxWidth: "400px" }}
    >
      <div className="chart-box" style={{ position: "relative" }}>
        <h2>Material</h2>
        {/* Responsive Pie Chart */}
        <ResponsiveContainer width="100%" height={200}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius="45%"
              outerRadius="70%"
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

        {/* Centered Icon */}
        <img
          src={iconDrop}
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(116%, -50%)",
            fontSize: "30px",
            color: "#555",
          }}
          alt="Center Icon"
        />
      </div>

      {/* Chart Data */}
      <div
        className="chart-data"
        style={{
          display: "flex",
          justifyContent: "space-between",
          paddingTop: "10px",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <div
            className="data-rounded"
            style={{
              borderRadius: "50%",
              backgroundColor: "#f0f0f0",
              padding: "10px",
              width: "40px",
              height: "40px",
              lineHeight: "40px",
            }}
          >
            11
          </div>
          <h2>14567</h2>
        </div>
        <div style={{ textAlign: "center" }}>
          <div
            className="data-rounded"
            style={{
              borderRadius: "50%",
              backgroundColor: "#f0f0f0",
              padding: "10px",
              width: "40px",
              height: "40px",
              lineHeight: "40px",
            }}
          >
            15
          </div>
          <h2>12340</h2>
        </div>
      </div>
    </div>
  );
};

export default BarChartComponent;
