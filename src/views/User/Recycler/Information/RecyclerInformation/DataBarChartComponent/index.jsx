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
      <div
        style={{
          border: "1px solid #E9EAEB",
        }}
      >
        <p
          className="heading-text"
          style={{ paddingLeft: "20px", marginTop: "10px" }}
        >
          Material
        </p>
        <ResponsiveContainer width="100%" height={200}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="45%"
              innerRadius={50}
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
        <img
          src={iconDrop}
          style={{
            position: "absolute",
            left: "42%",
            top: "36%",
            transform: "translate(116%, -50%)",
            fontSize: "30px",
            color: "#555",
          }}
          alt="Center Icon"
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "15px",
            marginTop: "20px",
          }}
        >
          {data.map((item, index) => {
            console.log(item);
            return (
              <>
                <div
                  className=""
                  style={{
                    width: "55px",
                    backgroundColor: COLORS[index % COLORS.length],
                    height: "55px",
                    borderRadius: "30px",
                    padding: "15px 17px 15px 17px",
                    color: COLORS[index + (1 % COLORS.length)],
                    fontSize: "16px",
                    fontWeight: "600",
                  }}
                >
                  {item.value}
                </div>
                <p style={{ marginBottom: "0px" }}>{item.name} (kg)</p>
              </>
            );
          })}
        </div>
      </div>

      {/* Legend Section */}
      {/* <div className="data-section" style={{ display: "flex", gap: "20px"  }}>
        {data.map((item, index) => (
          <div className="data-div" style={{ width: "30px" }} key={index}>
            <div
              className="round-icon"
              style={{ backgroundColor: COLORS[index % COLORS.length] }}
            >
              {item.value}
            </div>
            <p>{item.name} (kg)</p>
          </div>
        ))}
      </div> */}
    </>
  );
};

export default DataBarChartComponent;
