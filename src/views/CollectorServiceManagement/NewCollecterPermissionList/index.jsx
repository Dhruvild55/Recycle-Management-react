import { useNavigate } from "react-router-dom";
import CustomTable from "../../../shared/components/CustomTable";
import { data, headers } from "./configue";

const NewCollecterPermissionList = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="common-main-section">
        <label className="primary-title" style={{ marginBottom: "20px" }}>
          New Collector Permission
        </label>
        <CustomTable headers={headers(navigate)} data={data} />
      </div>
    </>
  );
};

export default NewCollecterPermissionList;
