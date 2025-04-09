/* eslint-disable react/prop-types */
import { useNavigate, useParams } from "react-router-dom";
import { iconBack } from "../../../../../assets/images/icons";
import { useQuery } from "@tanstack/react-query";
import { getCollectorPickupDetails } from "../../../../../query/users/Collector/getCollectorPickupDetails/getCollectorPickupDetails.query";
import { getFilePath } from "../../../../../query/getfilePath/filePath.query";
import CollectionDetailsComponent from "../../../../../shared/components/CollectionDetailsComponent";

const PickupHistoryDetails = () => {
  const navigate = useNavigate();
  const params = useParams();
  const { id } = params;

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

  const { data } = useQuery({
    queryKey: ["getPickupDetails", id],
    queryFn: () => getCollectorPickupDetails(id),
  });

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
        <CollectionDetailsComponent data={data} isRecyclerDetail={false} />
      </div>
      <div
        className="common-main-section"
        style={{ marginTop: "20px", minHeight: "0px" }}
      >
        <div style={{ marginBottom: "20px" }}>
          <h1 className="primary-title"> Recycler Information</h1>
        </div>
        <CollectionDetailsComponent data={data} isRecyclerDetail={true} />
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

export default PickupHistoryDetails;
