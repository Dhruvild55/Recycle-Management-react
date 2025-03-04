/* eslint-disable no-unused-vars */
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CustomTable from "../../../shared/components/CustomTable";
import { data, headers } from "./confige";

const CashReward = () => {
  const translations = useSelector((state) => state.settings.translations);
  const navigate = useNavigate();
  return (
    <>
      <div className="userList-header">
        <label className="primary-title">List of Cash Reward</label>
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
      <CustomTable headers={headers} data={data} />
    </>
  );
};

export default CashReward;
