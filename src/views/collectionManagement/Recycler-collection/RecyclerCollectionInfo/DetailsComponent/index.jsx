/* eslint-disable react/prop-types */
import FatPointComponent from "../../../../../shared/components/FatPointComponent";
import ProfilePic from "../../../../../shared/components/ProfilePic";
import { formatDate } from "../../../../../shared/constants/ValidationRules";

const DetailsComponent = ({ data }) => {
  const id =
    data?.collectorId.length > 10
      ? `${data?.collectorId.slice(0, 10)}...`
      : data?.collectorId;
  return (
    <div className="details-section row">
      <div className="col-lg-2">
        <ProfilePic size={120} image={data?.imagePath} />
      </div>
      <div className="col-lg-6">
        <div className="row mb-1">
          <div className="col-lg-5">
            <span>Recyler Name</span>
          </div>

          <div className="col-lg-7">
            <span>{data?.recyclerName}</span>
          </div>
        </div>

        <div className="row mb-1">
          <div className="col-lg-5">
            <span>Recyler ID</span>
          </div>

          <div className="col-lg-7">
            <span>{data?.recyclerId}</span>
          </div>
        </div>
        <div className="row mb-1">
          <div className="col-lg-5">
            <span>Collection ID</span>
          </div>

          <div className="col-lg-7">
            <span>{data?.collectionId}</span>
          </div>
        </div>
        <div className="row mb-1">
          <div className="col-lg-5">
            <span>Date & Time</span>
          </div>

          <div className="col-lg-7">
            <span>{formatDate(data?.timestamp)}</span>
          </div>
        </div>
        <div className="row mb-1">
          <div className="col-lg-5">
            <span>Address</span>
          </div>

          <div className="col-lg-7">
            <span>{data?.address}</span>
          </div>
        </div>
        <div className="row mb-4">
          <div className="col-lg-5">
            <span>State </span>
          </div>

          <div className="col-lg-7">
            <span>{data?.state}</span>
          </div>
        </div>
        <div className="row mb-1" style={{ borderTop: "1px solid #ddd" }}>
          <div className="col-lg-5 mt-4">
            <span>Collector</span>
          </div>

          <div className="col-lg-7 mt-4">
            <div
              className="d-flex gap-4 align-items-center"
              style={{
                backgroundColor: "",
                border: "1px solid #ABEFC6",
                padding: "15px",
                borderRadius: "10px",
              }}
            >
              <div>
                <ProfilePic size={50} image={data?.collectorImgPath} />
              </div>
              <div>
                <p
                  style={{
                    marginBottom: "0px",
                    fontSize: "14px",
                    fontWeight: "600",
                  }}
                >
                  {data?.collectorName}
                </p>
                <p style={{ marginBottom: "0px" }}>Collector ID :{id}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 d-flex justify-content-end">
        <FatPointComponent
          fatLastUpdate={data?.estPointsLastUpdate}
          points={data?.userTotalEstPoints}
        />
      </div>
    </div>
  );
};

export default DetailsComponent;
