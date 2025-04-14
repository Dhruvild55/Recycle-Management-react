/* eslint-disable react/prop-types */
import CollectionHubCard from "../../../views/collectionManagement/Collector-collection/CollectorCollectionInfo/CollectionHubComponent";
import ProfilePic from "../ProfilePic";

const CollectionDetailsComponent = ({ data, isRecyclerDetail }) => {
  const formatDate = (dateString) => {
    if (!dateString || dateString === "0001-01-01T00:00:00") {
      return "Not Available";
    }
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "2-digit",
    });
  };
  return (
    <div
      className="collector-collection row mt-5"
      style={{ paddingBottom: "30px" }}
    >
      <div className="col-lg-2">
        <ProfilePic size={120} image={data?.data?.recyclerImg} />
      </div>
      <div className="col-lg-6">
        <div className="row mb-2">
          <div className="col-lg-4">
            <span style={{ fontSize: "14px", fontWeight: "600" }}>
              {isRecyclerDetail ? "Recycler Name" : "Collector Name"}
            </span>
          </div>
          <div className="col-lg-4">
            <span style={{ fontSize: "14px", fontWeight: "400" }}>
              {isRecyclerDetail
                ? data?.data?.recyclerName
                : data?.data?.collectorName}
            </span>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-lg-4">
            <span style={{ fontSize: "14px", fontWeight: "600" }}>
              {isRecyclerDetail ? "Recycler Id" : "Collector Id"}
            </span>
          </div>
          <div className="col-lg-4">
            <span style={{ fontSize: "14px", fontWeight: "400" }}>
              {isRecyclerDetail
                ? data?.data?.recyclerId
                : data?.data?.collectorId}
            </span>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-lg-4">
            <span style={{ fontSize: "14px", fontWeight: "600" }}>
              Collection Id
            </span>
          </div>
          <div className="col-lg-4">
            <span style={{ fontSize: "14px", fontWeight: "400" }}>
              {data?.data?.collectionId}
            </span>
          </div>
        </div>
        {isRecyclerDetail && (
          <div className="row mb-2">
            <div className="col-lg-4">
              <span style={{ fontSize: "14px", fontWeight: "600" }}>
                Date & Time
              </span>
            </div>
            <div className="col-lg-4">
              <span style={{ fontSize: "14px", fontWeight: "400" }}>
                {formatDate(data?.data?.timestamp)}
              </span>
            </div>
          </div>
        )}
        <div className="row mb-2">
          <div className="col-lg-4">
            <span style={{ fontSize: "14px", fontWeight: "600" }}>State</span>
          </div>
          <div className="col-lg-4">
            <span style={{ fontSize: "14px", fontWeight: "400" }}>
              {isRecyclerDetail
                ? data?.data?.recyclerState
                : data?.data?.collectorState}
            </span>
          </div>
        </div>
      </div>
      <div className="collector-section col-lg-4">
        <CollectionHubCard data={data} isrecycler={isRecyclerDetail} />
      </div>
    </div>
  );
};

export default CollectionDetailsComponent;
