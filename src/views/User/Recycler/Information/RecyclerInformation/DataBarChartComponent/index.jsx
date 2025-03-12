/* eslint-disable react/prop-types */
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";
import { iconDrop } from "../../../../../../assets/images/icons";

const DataBarChartComponent = ({ material = [] }) => {
  const defaultData = [
    { name: "Oil", value: 10 },
    { name: "Paper", value: 15 },
  ];

  const formattedMaterial =
    Array.isArray(material) && material.length > 0 ? material : defaultData;

  const data = formattedMaterial.map((item) => ({
    name: item.materialTypeName || item.name,
    value: item.totalWeight || item.value,
  }));

  const COLORS = ["#7CCBBC", "#1F7F82", "#B1D33A", "#ABEFC6"];

  return (
    <>
      <p>Material</p>
      <div>
        <ResponsiveContainer width="80%" height={200}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="45%"
              innerRadius={60}
              outerRadius={90}
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
        <img
          src={iconDrop}
          style={{
            position: "absolute",
            left: "31%",
            top: "38%",
            transform: "translate(116%, -50%)",
            fontSize: "30px",
            color: "#555",
          }}
          alt="Center Icon"
        />
      </div>

      {/* Legend Section */}
      <div className="data-section">
        {data.map((item, index) => (
          <div className="data-div" key={index}>
            <div
              className="round-icon"
              style={{ backgroundColor: COLORS[index % COLORS.length] }}
            >
              {item.value}
            </div>
            <p>{item.name} (kg)</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default DataBarChartComponent;
