import ProfileCardComponent from "../../../../../shared/components/ProfileCardComponent";
import FatPointComponent from "../../../../../shared/components/FatPointComponent";
import DataBarChartComponent from "./DataBarChartComponent";

const RecyclerInformation = () => {
  return (
    <div className="recycler-information row">
      <div className="col-lg-4  col-sm-12">
        <ProfileCardComponent />
      </div>
      <div className="information-details col-lg-8 col-sm-12">
        <label className="primary-title">Recycler Information</label>
        <div className="center-section row">
          <div className="pie-chart-section col-lg-7">
            <DataBarChartComponent />
          </div>
          <div className="points-container col-lg-5">
            <FatPointComponent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecyclerInformation;
