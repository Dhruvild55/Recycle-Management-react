/* eslint-disable react/prop-types */
import { FaPlus } from "react-icons/fa6";
import TopSection from "../TopSection";
import CustomTable from "../../../../shared/components/CustomTable";
import DatePicker from "../../../pointsTransactionManagement/components/DateRangPicker";

const CommonHardwareShopList = ({
  title,
  translations,
  navigate,
  route,
  Headers,
  data,
  isDateAndtime,
}) => {
  return (
    <div className="common-main-section">
      <TopSection />
      <div className="common-page-toolbar">
        <label className="primary-title">{title}</label>
        <div className="tool-section">
          <input
            className="search-input"
            type="text"
            placeholder={translations.search}
            style={{ minWidth: isDateAndtime ? "400px" : "500px" }}
          />
        </div>
        {isDateAndtime && <DatePicker />}
        <div className="tool-section">
          <label className="back-text">{translations.filter}:</label>
          <select>
            <option>All</option>
          </select>
        </div>
        {!isDateAndtime && (
          <button className="add-btn" onClick={() => navigate(route)}>
            {" "}
            Add Product <FaPlus style={{ fontSize: "15px" }} />
          </button>
        )}
      </div>
      <CustomTable headers={Headers} data={data} />
    </div>
  );
};

export default CommonHardwareShopList;
