import { useSelector } from "react-redux";
import { iconRightArrow } from "../../../../assets/images/icons";
import CustomTable from "../../../../shared/components/CustomTable";
import {
  collectorCollectionData,
  collectorCollectionHeaders,
} from "../../confige";
import { useNavigate } from "react-router-dom";

const CollectorCollectionList = () => {
  const navigate = useNavigate();
  const translations = useSelector((state) => state.settings.translations);

  return (
    <>
      <div className="userList-header">
        <label className="primary-title"> List of Recycler</label>
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
          <img src={iconRightArrow} />
        </div>
        <div>
          {/* <Pagination
                  currentPage={pageNumber}
                  totalPages={totalPages}
                  onPageChange={setPageNumber}
                /> */}
        </div>
      </div>
    </>
  );
};

export default CollectorCollectionList;
