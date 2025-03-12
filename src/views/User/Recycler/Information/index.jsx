import { useNavigate, useParams } from "react-router-dom";
import RecyclerInfoTopSection from "../Component/RecyclerInfoTopSection";
import { iconDelete } from "../../../../assets/images/icons";
import RecyclerInformation from "./RecyclerInformation";
import BusinessRegistration from "./BusinessRegistration";
import BusinessAddress from "./BusinessAddress";
import { useQuery } from "@tanstack/react-query";
import { getRecyclerDetails } from "../../../../query/users/Recycler/getRecyclerDataById/getRecyclerData.query";

const RecyclerInformationSection = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const { data } = useQuery({
    queryKey: ["getRecyclerDetails", id],
    queryFn: () => getRecyclerDetails({ id }),
    staleTime: 30000,
  });
  const businessDetails = data?.data?.businessDetails;
  const materialCreates = data?.data?.materialCreates;
  const fatLastUpdate = data?.data?.estPointsLastUpdate;
  const fatPoints = data?.data?.userTotalEstPoints;

  const businessDetailsData = {
    city: data?.data?.city,
    countryCode: data?.data?.countryCode,
    addressLine1: data?.data?.addressLine1,
    addressLine2: data?.data?.addressLine2,
    addressType: data?.data?.addressType,
    state: data?.data?.state,
    zipCode: data?.data?.zipCode,
    lattitude: data?.data?.lattitude,
    longitude: data?.data?.longitude,
  };

  return (
    <div className="user-profile-section">
      <div className="common-main-section">
        <div className="header-section">
          <button
            className="back-text"
            onClick={() => navigate("/user-Management/recycler")}
          >
            &larr; BACK
          </button>
          <div className="right-section">
            <button className="" style={{ border: "none" }}>
              <img src={iconDelete} alt="delete icon" /> Deactivate Account
            </button>
          </div>
        </div>
        <RecyclerInfoTopSection />
        <div className="recycler-information-section">
          <RecyclerInformation
            businessDetails={businessDetails || {}}
            materialData={materialCreates || {}}
            fatLastData={fatLastUpdate}
            fatPoints={fatPoints}
          />
        </div>
      </div>
      <div
        className="common-main-section"
        style={{ marginTop: "20px", minHeight: "0px" }}
      >
        <div className="recycler-details">
          <BusinessRegistration businessDetails={businessDetails || {}} />
        </div>
      </div>
      <BusinessAddress businessDetailsData={businessDetailsData} />
    </div>
  );
};

export default RecyclerInformationSection;
