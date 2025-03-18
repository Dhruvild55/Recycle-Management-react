import { useSelector } from "react-redux";
import AppContentManagementTopSection from "../../Components/AppContentManagementTopSection";
import { FaPlus } from "react-icons/fa6";
import BannerComponent from "./BannerComponent";

const BannerList = () => {
  const translations = useSelector((state) => state.settings.translations);
  return (
    <div className="common-main-section">
      <AppContentManagementTopSection />
      <div className="common-page-toolbar">
        <label className="primary-title">Benner Management</label>
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
        <button
          className="add-btn"
          // onClick={() => navigate(route.addRewards)}
        >
          {" "}
          Add Banner <FaPlus style={{ fontSize: "15px" }} />
        </button>
      </div>
      <div
        className="banner-section"
        style={{
          marginTop: "30px",
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "50px",
        }}
      >
        <BannerComponent />
        <BannerComponent />
        <BannerComponent />
        <BannerComponent />
        <BannerComponent />
        <BannerComponent />
      </div>
    </div>
  );
};

export default BannerList;
