import BarChartComponent from "../../../shared/components/BarChartComponent";
import MixedChart from "../../../shared/components/MixedChart";

const ChartSection = () => (
  <div className="chart-contant">
    <MixedChart />
    <div className="bar-chart">
      <BarChartComponent isDashboard />
    </div>
  </div>
);

export default ChartSection;
