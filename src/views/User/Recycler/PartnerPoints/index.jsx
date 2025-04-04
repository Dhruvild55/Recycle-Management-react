import { useNavigate } from "react-router-dom";
import { iconBack } from "../../../../assets/images/icons";
import TitleComponent from "../../../../shared/components/TitleComponent";
import RecyclerInfoTopSection from "../Component/RecyclerInfoTopSection";
import { route } from "../../../../shared/constants/AllRoutes";

const PartnerPoints = () => {
  const navigate = useNavigate();
  return (
    <div className="common-main-section">
      <button
        className="back-text"
        onClick={() => navigate(route.userManagement.Recycler.List)}
        style={{ marginBottom: "20px" }}
      >
        <img src={iconBack} />
        {"   "} BACK
      </button>
      <RecyclerInfoTopSection />
      <TitleComponent label="List of Partner Points" />
    </div>
  );
};

export default PartnerPoints;
