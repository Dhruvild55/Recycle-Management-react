import { useLocation, useNavigate, useParams } from "react-router-dom";
import ButtonComponent from "../../../../../shared/components/Buttoncomponent";

const TopSection = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation(); // Get current URL path
  return (
    <div className="common-tab-section">
      <ButtonComponent
        label="Sponsor Information"
        onClick={() =>
          navigate(`/sponsor-Management/list/view-sponsor-info/${id}`)
        }
        className={`btn${
          location.pathname.includes("/view-sponsor-info") ? " selected" : ""
        }`}
      />
      <ButtonComponent
        label="Partner Catelogue"
        onClick={() =>
          navigate(`/sponsor-Management/list/partner-catelogue/${id}`)
        }
        className={`btn${
          location.pathname.includes("/partner-catelogue") ? " selected" : ""
        }`}
      />
      <ButtonComponent
        label="Redemption History"
        onClick={() =>
          navigate(`/sponsor-Management/list/redimption-history/${id}`)
        }
        className={`btn${
          location.pathname.includes("/redimption-history") ? " selected" : ""
        }`}
      />
    </div>
  );
};

export default TopSection;
