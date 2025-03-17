import { useLocation, useNavigate, useParams } from "react-router-dom";
import ButtonComponent from "../../../../../shared/components/Buttoncomponent";

const CollectorTopSection = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation(); // Get current URL path
  return (
    <div className="tabs-section">
      <ButtonComponent
        label="Collector Information"
        onClick={() => navigate(`/user-Management/collector/details/${id}`)}
        className={`btn${
          location.pathname.includes("/details") ? " selected" : ""
        }`}
      />
      <ButtonComponent
        label="Pickup History"
        onClick={() =>
          navigate(`/user-Management/collector/pickupHistory/${id}`)
        }
        className={`btn${
          location.pathname.includes("/pickupHistory") ? " selected" : ""
        }`}
      />
      <ButtonComponent
        label="Clearance"
        onClick={() => navigate(`/user-Management/collector/clearance/${id}`)}
        className={`btn${
          location.pathname.includes("/clearance") ? " selected" : ""
        }`}
      />
    </div>
  );
};

export default CollectorTopSection;
