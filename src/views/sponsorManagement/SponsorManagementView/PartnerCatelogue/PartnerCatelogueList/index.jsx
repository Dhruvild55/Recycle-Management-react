import { useNavigate } from "react-router-dom";
import { iconBack } from "../../../../../assets/images/icons";
import TopSection from "../../Component/TopSection";
import { useSelector } from "react-redux";
import { FaPlus } from "react-icons/fa6";
import CatelogueComponent from "./CatelogueListComponent";

const PartnerCatelogueList = () => {
  const navigate = useNavigate();
  const translations = useSelector((state) => state.settings.translations);
  const rewardsData = [
    {
      title: "5% Subway Discount",
      claimedDate: "12/12/12 15:00",
      status: "Claimed",
      validity: "4 Days",
      points: "100 Points",
    },
    {
      title: "5% Subway Discount",
      claimedDate: "12/12/12 15:00",
      status: "Claimed",
      validity: "4 Days",
      points: "100 Points",
    },
    {
      title: "5% Subway Discount",
      claimedDate: "12/12/12 15:00",
      status: "Claimed",
      validity: "4 Days",
      points: "100 Points",
    },
    {
      title: "5% Subway Discount",
      claimedDate: "12/12/12 15:00",
      status: "Claimed",
      validity: "4 Days",
      points: "100 Points",
    },
  ];

  return (
    <div className="common-main-section">
      <div className="partner-catelogue-section">
        <button
          className="back-text"
          style={{ marginBottom: "20px" }}
          onClick={() => navigate(-1)}
        >
          <img src={iconBack} /> Back
        </button>
        <TopSection />
        <div
          className="common-page-toolbar"
          style={{ marginTop: "20px", marginBottom: "30px" }}
        >
          <label className="primary-title"> Partner Catelogue</label>
          <div className="tool-section">
            <input
              className="search-input"
              type="text"
              placeholder={translations.search}
            />
          </div>
          <select>
            <option>All</option>
          </select>
          <label className="back-text">{translations.filter}:</label>
          <button
            className="add-btn"
            onClick={() =>
              navigate("/sponsor-Management/list/partner-catelogue/add")
            }
          >
            Add Catelogue <FaPlus style={{ fontSize: "15px" }} />
          </button>
        </div>
        <div className="">
          {rewardsData.map((reward, index) => (
            <CatelogueComponent key={index} reward={reward} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnerCatelogueList;
