import { FaPlus } from "react-icons/fa6";
import { useSelector } from "react-redux";
import CustomTable from "../../../shared/components/CustomTable";
import { data, headers } from "./confige";
import { useNavigate } from "react-router-dom";
import { route } from "../../../shared/constants/AllRoutes";

const ProductManagement = () => {
  const translations = useSelector((state) => state.settings.translations);
  const navigate = useNavigate();
  return (
    <>
      <div className="common-page-toolbar">
        <label className="primary-title">List of Reward</label>
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
        <button className="add-btn" onClick={() => navigate(route.addRewards)}>
          {" "}
          Add Reward <FaPlus style={{ fontSize: "15px" }} />
        </button>
      </div>
      <CustomTable headers={headers(navigate)} data={data} />
    </>
  );
};

export default ProductManagement;
