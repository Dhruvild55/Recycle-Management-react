/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import { route } from "../../../../../shared/constants/AllRoutes";
import { Table } from "react-bootstrap";

const PreviousItems = ({ pastPickUps = [] }) => {
  const navigate = useNavigate();

  const headerData = [
    { key: "id", label: "ID" },
    { key: "material", label: "Material" },
    { key: "volume", label: "Volume (kg)" },
    { key: "pickupDate", label: "Pickup Date" },
    { key: "estPoints", label: "Points" },
    { key: "action", label: "Action" },
  ];

  return (
    <div
      className="common-main-section"
      style={{ marginTop: "10px", maxHeight: "0px" }}
    >
      <label className="primary-title" style={{ marginBottom: "20px" }}>
        Previous Items
      </label>

      <Table responsive>
        <thead>
          <tr>
            {headerData.map((header) => (
              <th key={header.key}>{header.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {pastPickUps.length > 0 ? (
            pastPickUps.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.material?.materialName || "N/A"}</td>
                <td>{item.material?.weight || 0} kg</td>
                <td>{item.pickupDate || "N/A"}</td>
                <td>{item.estPoints || 0}</td>
                <td>
                  <button
                    className="view-button"
                    onClick={() => navigate(route.viewHistoryItems(item.id))}
                  >
                    View
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={headerData.length} style={{ textAlign: "center" }}>
                No Data Available
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default PreviousItems;
