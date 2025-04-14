import { useLocation, useNavigate, useParams } from "react-router-dom";
import ButtonComponent from "../../../../../shared/components/Buttoncomponent";
import { iconBack, iconDelete } from "../../../../../assets/images/icons";
import { route } from "../../../../../shared/constants/AllRoutes";

const CollectorTopSection = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation(); // Get current URL path
  return (
    <>
      <div className="header-section">
        <div className="left-side">
          <button
            className="back-text"
            onClick={() => navigate(route.userManagement.Collector.List)}
          >
            <img src={iconBack} /> BACK
          </button>
        </div>
        <div className="right-side">
          <img src={iconDelete} style={{ cursor: "pointer" }} /> {"  "}
          <span>Suspend Collector Status</span>
        </div>
      </div>
      <div className="common-tab-section" style={{ marginBottom: "20px" }}>
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
    </>
  );
};

export default CollectorTopSection;
