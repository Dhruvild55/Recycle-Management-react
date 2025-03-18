/* eslint-disable no-unused-vars */
import { useQuery } from "@tanstack/react-query";
import { iconDelete } from "../../../../assets/images/icons";
import CollectorTopSection from "../Component/CollectorTopSection";
import CollecterInformation from "./CollecterInformation";
import StorageAddressDetails from "./StorageComponent";
import { useNavigate, useParams } from "react-router-dom";
import { getCollectorDetails } from "../../../../query/users/getCollectorDataById/getCollectorData.query";
import { Loader } from "../../../../shared/components/Loader";
import { useState } from "react";

const CollecterProfile = () => {
  const { id } = useParams();
  const [pageSize, setPageSize] = useState(4);
  const [pageNumber, setPageNumber] = useState(1);

  const { data, isPending } = useQuery({
    queryKey: ["getCollectorDetails", id, pageNumber, pageSize],
    queryFn: () => getCollectorDetails({ id, pageSize, pageNumber }),
    staleTime: 30000,
  });

  const userData = data?.data?.userData;
  const pagination = userData?.pagination;
  const storage = userData?.storage;
  const totalPages = Math.ceil((pagination?.totalRecords || 1) / pageSize);

  const navigate = useNavigate();
  return (
    <div className="user-profile-section">
      <div className="common-main-section">
        <div className="header-section">
          <div className="left-side">
            <button className="back-text" onClick={() => navigate(-1)}>
              &larr; BACK
            </button>
          </div>
          <div className="right-side">
            <img src={iconDelete} />
            <span>Suspend Collection Status</span>
          </div>
        </div>
        <CollectorTopSection />
        {isPending ? (
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
        ) : (
          <CollecterInformation userData={userData} />
        )}
      </div>
      <div className="common-main-section" style={{ marginTop: "10px" }}>
        <label className="primary-title">Storage</label>
        <div style={{ marginTop: "20px" }}>
          <StorageAddressDetails
            storageData={storage}
            isPending={isPending}
            pageNumber={pageNumber}
            setPageNumber={setPageNumber}
            totalPages={totalPages}
          />
        </div>
      </div>
    </div>
  );
};

export default CollecterProfile;
