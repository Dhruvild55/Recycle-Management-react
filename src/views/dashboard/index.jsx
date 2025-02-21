import { useEffect } from "react";
import CardComponent from "../../shared/components/CardComponent";
import MixedChart from "../../shared/components/MixedChart";
import BarChartComponent from "../../shared/components/BarChartComponent";

const Dashboard = () => {
  useEffect(() => {
    document.title = "Dashboard | Recycle Management ";
  }, []);

  return (
    <>
      <div className="dashboard-section">
        <div className="common-main-section">
          <div className="cards-container">
            <CardComponent />
          </div>
          <div className="chart-contant">
            <MixedChart />
            <div className="bar-chart">
              <BarChartComponent isDashboard={true} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
