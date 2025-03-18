import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CustomTable from "../../../shared/components/CustomTable";
import { data, headers } from "./confige";

const RewardTransaction = () => {
  const translations = useSelector((state) => state.settings.translations);
  const navigate = useNavigate();
  return (
    <>
      <div className="common-page-toolbar">
        <label className="primary-title">List of Reward Transaction</label>
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
      <CustomTable headers={headers(navigate)} data={data} />
    </>
  );
};

export default RewardTransaction;
