import { useNavigate } from "react-router-dom";
import CollectionManagementTopSection from "../CollectionManagementTopSection";
import { useSelector } from "react-redux";
import CustomTable from "../../../../shared/components/CustomTable";
import {
  recyclerCollectionData,
  recyclerCollectionHeaders,
} from "../../confige";

const CommonListSection = () => {
  const navigate = useNavigate();
  const translations = useSelector((state) => state.settings.translations);
  <div className="common-main-section">
    <CollectionManagementTopSection />
    <div className="tool-section">
      <input
        className="search-input"
        type="text"
        placeholder={translations.search}
      />
      <label className="back-text">{translations.filter}:</label>
      <select>
        <option>All</option>
      </select>
    </div>
    <CustomTable
      headers={recyclerCollectionHeaders(navigate)}
      data={recyclerCollectionData}
    />
  </div>;
};

export default CommonListSection;
