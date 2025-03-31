/* eslint-disable no-unused-vars */
import { useSelector } from "react-redux";
import { iconRightArrow } from "../../../../assets/images/icons";
import CustomTable from "../../../../shared/components/CustomTable";
import { useNavigate } from "react-router-dom";
import {
  recyclerCollectionData,
  recyclerCollectionHeaders,
} from "../../confige";
import CollectionManagementTopSection from "../../Component/CollectionManagementTopSection";
import { useEffect } from "react";

const RecyclerCollectionList = () => {
  const navigate = useNavigate();
  const translations = useSelector((state) => state.settings.translations);
  useEffect(() => {
    document.title = "Collection Management | Recycler Management";
  }, []);
  return (
    <div className="common-main-section">
      <CollectionManagementTopSection />
      <div className="common-page-toolbar">
        <label className="primary-title"> List of Recycler</label>
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
        headers={recyclerCollectionHeaders(navigate)}
        data={recyclerCollectionData}
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

export default RecyclerCollectionList;
