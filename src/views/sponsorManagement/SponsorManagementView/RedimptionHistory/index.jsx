import { useNavigate } from "react-router-dom";
import { iconBack } from "../../../../assets/images/icons";
import TopSection from "../Component/TopSection";
import { useSelector } from "react-redux";
import CustomTable from "../../../../shared/components/CustomTable";
import { HeadersData, RedimptionHistoryData } from "./config";

const RedimptionHistory = () => {
  const navigate = useNavigate();
  const translations = useSelector((state) => state.settings.translations);
  return (
    <div className="common-main-section">
      <div className="redimption-history-section">
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
          <label className="primary-title"> Redemption History</label>
          <div>
            <input
              className="search-input"
              type="text"
              placeholder={translations.search}
            />
          </div>
          <div>
            <label className="back-text">{translations.filter}:</label>
            <select>
              <option>All</option>
            </select>
          </div>
        </div>
      </div>
      <CustomTable headers={HeadersData} data={RedimptionHistoryData} />
    </div>
  );
};

export default RedimptionHistory;
