/* eslint-disable no-unused-vars */
import { useQuery } from "@tanstack/react-query";
import { iconBack, iconDelete } from "../../../../assets/images/icons";
import CollectorTopSection from "../Component/CollectorTopSection";
import CollecterInformation from "./CollecterInformation";
import StorageAddressDetails from "./StorageComponent";
import { useNavigate, useParams } from "react-router-dom";
import { getCollectorDetails } from "../../../../query/users/getCollectorDataById/getCollectorData.query";
import { Loader } from "../../../../shared/components/Loader";
import { useState } from "react";
import VehicleCardComponent from "./VehicleCardComponent";
import { route } from "../../../../shared/constants/AllRoutes";

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
  const vehicles = userData?.vehicles;
  const totalPages = Math.ceil((pagination?.totalRecords || 1) / pageSize);

  const navigate = useNavigate();
  return (
    <div className="user-profile-section">
      <div className="common-main-section">
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
      <div
        className="common-main-section"
        style={{ marginTop: "10px", minHeight: "0px" }}
      >
        <label className="primary-title">Vehicle Detail</label>

        {isPending ? (
          <div className="loader-container">
            <Loader animation="border" width="50px" height="50px" />
          </div>
        ) : vehicles?.length === 0 ? (
          <div
            className="no-data-msg"
            style={{ marginTop: "20px", color: "#888" }}
          >
            No data available
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "30px",
              marginTop: "20px",
            }}
          >
            {vehicles.map((vehicle, index) => (
              <VehicleCardComponent
                key={index}
                brand={vehicle.brand}
                model={vehicle.model}
                color={vehicle.color}
                registrationNo={vehicle.registrationNo}
                vehicleImgPath={vehicle.vehicleImgPath}
                type={vehicle.type}
              />
            ))}
          </div>
        )}
      </div>

      <div
        className="common-main-section"
        style={{ marginTop: "10px", minHeight: "0px" }}
      >
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
