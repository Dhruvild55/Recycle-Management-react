import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";

const data = [
  { month: "Jan '24", actual: 5000, expected: 4000 },
  { month: "Feb '24", actual: 8000, expected: 6000 },
  { month: "Mar '24", actual: 12000, expected: 9000 },
  { month: "Apr '24", actual: 18000, expected: 12000 },
  { month: "May '24", actual: 24000, expected: 16000 },
  { month: "Jun '24", actual: 27000, expected: 19000 },
  { month: "Jul '24", actual: 28549, expected: 21391 }, // Highlighted data point
  { month: "Aug '24", actual: 30000, expected: 23000 },
  { month: "Sep '24", actual: 32000, expected: 25000 },
  { month: "Oct '24", actual: 35000, expected: 28000 },
  { month: "Nov '24", actual: 37000, expected: 30000 },
  { month: "Dec '24", actual: 42000, expected: 33000 },
];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div
        className="custom-tooltip"
        style={{
          background: "#fff",
          padding: "10px",
          borderRadius: "5px",
          boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
        }}
      >
        <p>
          <strong>{payload[0].payload.month}</strong>
        </p>
        <p>Actual: {payload[0].value}</p>
        <p>Expected: {payload[1]?.value}</p>
      </div>
    );
  }
  return null;
};

const MixedChart = () => {
  return (
    <ResponsiveContainer width="100%" height={450}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip content={<CustomTooltip />} />
        <ReferenceLine
          x="Jul '24"
          stroke="#C9FFDF"
          strokeWidth={50}
          label={{
            position: "insideTop",
            fill: "#C9FFDF",
          }}
        />
        <Line
          type="monotone"
          dataKey="actual"
          stroke="#1F7F82"
          strokeWidth={2}
        />
        <Line
          type="monotone"
          dataKey="expected"
          stroke="#C5E4CC"
          strokeWidth={2}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default MixedChart;
