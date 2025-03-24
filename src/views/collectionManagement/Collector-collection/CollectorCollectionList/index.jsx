import { useSelector } from "react-redux";
import CustomTable from "../../../../shared/components/CustomTable";
import {
  collectorCollectionData,
  collectorCollectionHeaders,
} from "../../confige";
import { useNavigate } from "react-router-dom";
import CollectionManagementTopSection from "../../Component/CollectionManagementTopSection";

const CollectorCollectionList = () => {
  const navigate = useNavigate();
  const translations = useSelector((state) => state.settings.translations);

  return (
    <div className="common-main-section">
      <CollectionManagementTopSection />
      <div className="common-page-toolbar">
        <label className="primary-title"> List of Collector</label>
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
      </div>
      <CustomTable
        headers={collectorCollectionHeaders(navigate)}
        data={collectorCollectionData}
      />
      <div className="table-footer">
        <div>
          <span className="back-text" style={{ color: "#181D27" }}>
            {/* showing {userListData?.data?.items.length} entries */}
          </span>
          {"  "}
          {/* <img src={iconRightArrow} /> */}
        </div>
        <div>
          {/* <Pagination
                  currentPage={pageNumber}
                  totalPages={totalPages}
                  onPageChange={setPageNumber}
                /> */}
        </div>
      </div>
    </div>
  );
};

export default CollectorCollectionList;
