import { useNavigate, useParams, useLocation } from "react-router-dom";
import ButtonComponent from "../../../../../shared/components/Buttoncomponent";

const RecyclerInfoTopSection = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation(); // Get current URL path

  return (
    <div className="tabs-section">
      <ButtonComponent
        label="Recycler Information"
        onClick={() => navigate(`/user-Management/recycler/details/${id}`)}
        className={`btn${
          location.pathname.includes("/details") ? " selected" : ""
        }`}
      />
      <ButtonComponent
        label="Recycler History"
        onClick={() => navigate(`/user-Management/recycler/history/${id}`)}
        className={`btn${
          location.pathname.includes("/history") ? " selected" : ""
        }`}
      />
      <ButtonComponent
        label="Rewards"
        onClick={() => navigate(`/user-Management/recycler/rewards/${id}`)}
        className={`btn${
          location.pathname.includes("/rewards") ? " selected" : ""
        }`}
      />
      <ButtonComponent
        label="Hardware"
        onClick={() => navigate(`/user-Management/recycler/hardware/${id}`)}
        className={`btn${
          location.pathname.includes("/hardware") ? " selected" : ""
        }`}
      />
    </div>
  );
};

export default RecyclerInfoTopSection;
