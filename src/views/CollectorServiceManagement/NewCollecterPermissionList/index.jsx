import CustomTable from "../../../shared/components/CustomTable";

const NewCollecterPermissionList = () => {
  const collectorColumns = [
    { key: "id", label: "UserId" },
    { key: "firstname", label: "Name" },
    { key: "reqDate", label: "Request date" },
    { key: "reqType", label: "Request Type" },
    { key: "phoneNo", label: "Phone.No" },
    { key: "state", label: "State" },
    { key: "status", label: "Status" },
    { key: "action", label: "Action" },
  ];
  return (
    <>
      <div className="collecter-list-section">
        <div className="collecterList-section">
          <div className="collecterList-header">
            <label>New Collector Permission</label>
          </div>
          <CustomTable headers={collectorColumns} />
        </div>
      </div>
    </>
  );
};

export default NewCollecterPermissionList;
