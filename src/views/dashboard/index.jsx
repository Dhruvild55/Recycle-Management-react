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
        <div className="main-section">
          <div className="cards-container">
            <CardComponent />
          </div>
          <div className="chart-contant">
            <MixedChart />
            <BarChartComponent xPos={310} yPos={200} />
          </div>
        </div>
        {/* <div className="table-section">
          <div className="top-collecter-section">
            <div className="section-header">
              <h1>Top Collecter</h1>
              <div>
                <span>FILTER:</span>
                <select style={{ borderRadius: "10px", padding: "5px" }}>
                  <option>123</option>
                </select>
              </div>
            </div>
            <Table responsive>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Collection</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Asdfqwer</td>
                  <td>Collection : 20kg</td>
                </tr>
                <tr>
                  <td>Asdfqwer</td>
                  <td>Collection : 20kg</td>
                </tr>
                <tr>
                  <td>Asdfqwer</td>
                  <td>Collection : 20kg</td>
                </tr>
                <tr>
                  <td>Asdfqwer</td>
                  <td>Collection : 20kg</td>
                </tr>
              </tbody>
            </Table>
          </div>
          <div className="top-recycler-section">
            <div className="section-header">
              <h1>Top Collecter</h1>
              <div>
                <span>FILTER:</span>
                <select style={{ borderRadius: "10px", padding: "5px" }}>
                  <option>123</option>
                </select>
              </div>
            </div>
            <Table responsive>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Collection</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Asdfqwer</td>
                  <td>Collection : 20kg</td>
                </tr>
                <tr>
                  <td>Asdfqwer</td>
                  <td>Collection : 20kg</td>
                </tr>
                <tr>
                  <td>Asdfqwer</td>
                  <td>Collection : 20kg</td>
                </tr>
                <tr>
                  <td>Asdfqwer</td>
                  <td>Collection : 20kg</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Dashboard;
