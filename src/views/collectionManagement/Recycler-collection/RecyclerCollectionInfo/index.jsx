/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useNavigate, useParams } from "react-router-dom";
import { iconBack } from "../../../../assets/images/icons";
import TitleComponent from "../../../../shared/components/TitleComponent";
import DetailsComponent from "./DetailsComponent";
import { useQuery } from "@tanstack/react-query";
import { RecyclerDetailsById } from "../../../../query/CollectionManagement/Recycler/GetRecyclerDetails/getRecyclerDetails.query";
import { getFilePath } from "../../../../query/getfilePath/filePath.query";

const RecyclerCollectionInfo = () => {
  const navigate = useNavigate();
  const params = useParams();
  const { id } = params;

  const { data, isPending } = useQuery({
    queryKey: ["recyclerCollectionDetails", id],
    queryFn: () => RecyclerDetailsById(id),
  });

  const recyclerCollectionData = data?.data;
  const materialData = data?.data?.materils;

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
      <div className="common-main-section">
        <button className="back-text" onClick={() => navigate(-1)}>
          <img src={iconBack} /> {"     "}
          BACK
        </button>
        <div className="common-page-toolbar" style={{ padding: "7px 0px" }}>
          <TitleComponent label="Recycler Collection Information" />
        </div>
        <DetailsComponent data={recyclerCollectionData} />
      </div>
      <div
        className="common-main-section"
        style={{ marginTop: "20px", minHeight: "0px" }}
      >
        <h1 className="primary-title">Material Collection</h1>
        <div className="material-section">
          <div className="collection-grid">
            {materialData?.length > 0 ? (
              materialData?.map((material, index) => (
                <MaterialCard key={index} material={material} />
              ))
            ) : (
              <p>No Data available</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default RecyclerCollectionInfo;
