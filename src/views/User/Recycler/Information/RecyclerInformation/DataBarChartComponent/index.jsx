import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";
import { iconDrop } from "../../../../../../assets/images/icons";

const DataBarChartComponent = () => {
  const data = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 },
  ];
  const COLORS = ["#7CCBBC", "#1F7F82", "#B1D33A", "#ABEFC6"];
  return (
    <>
      <p>Material</p>
      <div>
        <ResponsiveContainer width="80%" height={200}>
          <PieChart>
            <Pie
              data={data}
              cx="50%" // Centering dynamically
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
    </>
  );
};
export default DataBarChartComponent;
