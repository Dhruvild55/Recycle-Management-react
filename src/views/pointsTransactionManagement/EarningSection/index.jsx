import { useSelector } from "react-redux";
import TopSection from "../components/TopSection";
import DatePicker from "../components/DateRangPicker";
import CustomTable from "../../../shared/components/CustomTable";
import { data, headers } from "./config";

const EarningSection = () => {
  const translations = useSelector((state) => state.settings.translations);
  return (
    <div className="common-main-section">
      <TopSection />
      <div className="common-page-toolbar">
        <label className="primary-title"> List of User Name</label>
        <div className="tool-section">
          <input
            className="search-input"
            type="text"
            placeholder={translations.search}
            style={{ minWidth: "500px" }}
          />
        </div>
        <DatePicker />
        <div className="tool-section">
          <label className="back-text">{translations.filter}:</label>
          <select>
            <option>All</option>
          </select>
        </div>
      </div>
      <CustomTable headers={headers} data={data} />
    </div>
  );
};

export default EarningSection;
