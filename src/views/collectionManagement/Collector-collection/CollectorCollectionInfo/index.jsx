/* eslint-disable react/prop-types */
import { useNavigate, useParams } from "react-router-dom";
import ProfilePic from "../../../../shared/components/ProfilePic";
import { iconBack } from "../../../../assets/images/icons";
import CollectionHubCard from "./CollectionHubComponent";
import { useQuery } from "@tanstack/react-query";
import { gteCollectorCollectionDetails } from "../../../../query/CollectionManagement/Collector/getCollectorDetails/getCollectorCollectionDetails.query";
import { getFilePath } from "../../../../query/getfilePath/filePath.query";

const CollectorCollectionInfo = () => {
  const navigate = useNavigate();
  const params = useParams();
  const { id } = params;

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
  const { data } = useQuery({
    queryKey: ["collectionCollectorDetails", id],
    queryFn: () => gteCollectorCollectionDetails(id),
  });

  const MaterialCard = ({ material }) => {
    const { data: imgData } = useQuery({
      queryKey: ["getWasteimg", material.img],
      queryFn: () => getFilePath({ image: material.img }),
      enabled: !!material.img,
    });
    return (
      <div className="collection-card">
        <img src={imgData} alt="Oil Waste" className="collection-image" />
        <div className="collection-details">
          <div className="detail">
            <span className="label">Collection ID</span>
            <span className="value">{material.collectionId}</span>
          </div>
          <div className="detail">
            <span className="label">Material Type</span>
            <span className="value">{material.materialType}</span>
          </div>
          <div className="detail">
            <span className="label">Material Weight (kg)</span>
            <span className="value">{material.weight}</span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="common-main-section" style={{ minHeight: "0px" }}>
        <div
          className="common-page-toolbar"
          style={{ marginTop: "0px", padding: "7px 0px" }}
        >
          <div>
            <button className="back-text" onClick={() => navigate(-1)}>
              <img src={iconBack} /> {"   "}
              BACK
            </button>
          </div>
        </div>
        <div style={{ marginTop: "20px", marginBottom: "20px" }}>
          <h1 className="primary-title"> Collector Collection Information</h1>
        </div>
        <div
          className="collector-collection row mt-5"
          style={{ paddingBottom: "30px" }}
        >
          <div className="col-lg-2">
            <ProfilePic size={120} image={data?.data?.collectorImg} />
          </div>
          <div className="col-lg-6">
            <div className="row mb-2">
              <div className="col-lg-4">
                <span style={{ fontSize: "14px", fontWeight: "600" }}>
                  Collector Name
                </span>
              </div>
              <div className="col-lg-4">
                <span style={{ fontSize: "14px", fontWeight: "400" }}>
                  {data?.data?.collectorName}
                </span>
              </div>
            </div>
            <div className="row mb-2">
              <div className="col-lg-4">
                <span style={{ fontSize: "14px", fontWeight: "600" }}>
                  Collector Id
                </span>
              </div>
              <div className="col-lg-4">
                <span style={{ fontSize: "14px", fontWeight: "400" }}>
                  {data?.data?.collectorId}
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
            <div className="row mb-2">
              <div className="col-lg-4">
                <span style={{ fontSize: "14px", fontWeight: "600" }}>
                  State
                </span>
              </div>
              <div className="col-lg-4">
                <span style={{ fontSize: "14px", fontWeight: "400" }}>
                  {data?.data?.collectorState}
                </span>
              </div>
            </div>
          </div>
          <div className="collector-section col-lg-4">
            <CollectionHubCard
              image={data?.data?.collectionHubAddress?.addressImg}
              address={data?.data?.collectionHubAddress?.address}
              title="Collection Hub Address"
            />
          </div>
        </div>
      </div>
      <div
        className="common-main-section"
        style={{ marginTop: "20px", minHeight: "0px" }}
      >
        <div style={{ marginBottom: "20px" }}>
          <h1 className="primary-title"> Recycler Information</h1>
        </div>
        <div
          className="collector-collection row mt-5"
          style={{ paddingBottom: "30px" }}
        >
          <div className="col-lg-2">
            <ProfilePic size={120} image={data?.data?.collectorImg} />
          </div>
          <div className="col-lg-6">
            <div className="row mb-2 ">
              <div className="col-lg-4">
                <span style={{ fontSize: "14px", fontWeight: "600" }}>
                  Recycler Name
                </span>
              </div>
              <div className="col-lg-4">
                <span style={{ fontSize: "14px", fontWeight: "400" }}>
                  {data?.data?.recyclerName}
                </span>
              </div>
            </div>
            <div className="row mb-2">
              <div className="col-lg-4">
                <span style={{ fontSize: "14px", fontWeight: "600" }}>
                  Recycler Id
                </span>
              </div>
              <div className="col-lg-4">
                <span style={{ fontSize: "14px", fontWeight: "400" }}>
                  {data?.data?.recyclerId}
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
            <div className="row mb-2">
              <div className="col-lg-4">
                <span style={{ fontSize: "14px", fontWeight: "600" }}>
                  State
                </span>
              </div>
              <div className="col-lg-4">
                <span style={{ fontSize: "14px", fontWeight: "400" }}>
                  {data?.data?.recyclerState}
                </span>
              </div>
            </div>
          </div>
          <div className="collector-section col-lg-4">
            <CollectionHubCard
              image={data?.data?.recyclerAddress?.addressImg}
              address={data?.data?.recyclerAddress?.address}
              title="Recycler Address"
            />
          </div>
        </div>
      </div>
      <div
        className="common-main-section"
        style={{ marginTop: "20px", minHeight: "0px" }}
      >
        <h1 className="primary-title">Material Collection</h1>
        <div className="material-section">
          <div className="material-collection">
            <div className="collection-grid">
              {data?.data?.materils.length > 0 ? (
                data?.data?.materils?.map((material, index) => (
                  <MaterialCard key={index} material={material} />
                ))
              ) : (
                <p>No Data available</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CollectorCollectionInfo;
