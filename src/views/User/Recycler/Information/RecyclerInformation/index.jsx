/* eslint-disable react/prop-types */
import ProfileCardComponent from "../../../../../shared/components/ProfileCardComponent";
import FatPointComponent from "../../../../../shared/components/FatPointComponent";
import DataBarChartComponent from "./DataBarChartComponent";
import { Loader } from "../../../../../shared/components/Loader";

const RecyclerInformation = ({
  businessDetails,
  materialData,
  fatLastData,
  fatPoints,
  isPending,
}) => {
  if (isPending) {
    return (
      <div
        className="container-fluid"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "40vh",
        }}
      >
        <Loader animation="border" width="50px" height="50px" />
      </div>
    );
  }

  return (
    <div className="recycler-information row">
      <div className="col-lg-4 col-sm-12">
        <ProfileCardComponent
          userData={businessDetails?.applicationUser || {}}
        />
      </div>
      <div className="information-details col-lg-8 col-sm-12">
        <label className="primary-title">Recycler Information</label>
        <div className="row">
          <div className="pie-chart-section col-lg-6">
            <DataBarChartComponent material={materialData} />
          </div>
          <div className="points-container col-lg-6">
            <FatPointComponent fatLastUpdate={fatLastData} points={fatPoints} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecyclerInformation;
