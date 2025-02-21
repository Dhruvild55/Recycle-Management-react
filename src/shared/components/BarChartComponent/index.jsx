/* eslint-disable react/prop-types */
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";
import { iconDrop } from "../../../assets/images/icons";
import { BsCircleFill } from "react-icons/bs";

const BarChartComponent = ({ isDashboard }) => {
  console.log(isDashboard);
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
      <div className="chart-title">
        <p>Oil Waste</p>
      </div>
      <div className="chart-box" style={{ position: "relative" }}>
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
            left: "38%",
            top: "50%",
            transform: "translate(116%, -50%)",
            fontSize: "30px",
            color: "#555",
          }}
          alt="Center Icon"
        />
      </div>
      {isDashboard && (
        <div className="chart-data">
          <div className="row">
            <div className="col">
              <p className="oil-value">14567</p>
              <div className="oil-type-section">
                <BsCircleFill style={{ fontSize: "8px", color: "#7CCBBC" }} />
                <p className="oil-type">Coocking oil</p>
              </div>
            </div>
            <div className="col">
              <p className="oil-value">14567</p>
              <div className="oil-type-section">
                <BsCircleFill style={{ fontSize: "8px", color: "#7CCBBC" }} />
                <p className="oil-type">Coocking oil</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <p className="oil-value">14567</p>
              <div className="oil-type-section">
                <BsCircleFill style={{ fontSize: "8px", color: "#7CCBBC" }} />
                <p className="oil-type">Coocking oil</p>
              </div>
            </div>
            <div className="col">
              <p className="oil-value">14567</p>
              <div className="oil-type-section">
                <BsCircleFill style={{ fontSize: "8px", color: "#7CCBBC" }} />
                <p className="oil-type">Coocking oil</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BarChartComponent;
