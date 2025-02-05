import {
  LineChart,
  Line,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", actual: 4000, target: 2400 },
  { name: "Feb", actual: 3000, target: 1398 },
  { name: "Mar", actual: 2000, target: 9800 },
  { name: "Apr", actual: 2780, target: 3908 },
  { name: "May", actual: 1890, target: 4800 },
  { name: "Jun", actual: 2390, target: 3800 },
  { name: "Jul", actual: 3490, target: 4300 },
  { name: "Aug", actual: 4000, target: 2400 },
  { name: "Sep", actual: 3000, target: 1398 },
  { name: "Oct", actual: 2000, target: 9800 },
  { name: "Nov", actual: 2780, target: 3908 },
  { name: "Dec", actual: 1890, target: 4800 },
];

const MixedChart = () => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="actual"
          stroke="#82ca9d"
          dot={{ r: 6 }}
          activeDot={{ r: 8 }}
        />
        <AreaChart data={data}>
          <Area
            type="monotone"
            dataKey="target"
            stroke="#8884d8"
            fill="#8884d8"
            fillOpacity={0.3}
          />
        </AreaChart>
      </LineChart>
    </ResponsiveContainer>
  );
};

export default MixedChart;
