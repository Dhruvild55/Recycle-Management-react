/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import { route } from "../../../../../shared/constants/AllRoutes";
import { Table } from "react-bootstrap";
import { Loader } from "../../../../../shared/components/Loader";
import Pagination from "../../../../../shared/components/CustomPagination";
import { useSelector } from "react-redux";
import { iconRightArrow } from "../../../../../assets/images/icons";

const PreviousItems = ({
  pastPickUps = [],
  isPending,
  pageNumber,
  totalPages,
  setPageNumber,
}) => {
  const navigate = useNavigate();
  const translations = useSelector((state) => state.settings.translations);

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
      style={{ marginTop: "10px", minHeight: "0px" }}
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
          {isPending ? (
            <tr>
              <td colSpan="7">
                <div className="loader-container">
                  <Loader animation="border" width="15px" height="15px" />
                </div>
              </td>
            </tr>
          ) : pastPickUps.length > 0 ? (
            pastPickUps.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.material?.materialName || "N/A"}</td>
                  <td>{item.material?.weight || 0} kg</td>
                  <td>{item.pickupDate || "N/A"}</td>
                  <td>{item.estPoints || 0}</td>
                  <td>
                    <button
                      className="view-button"
                      style={{
                        backgroundColor: "#D9F0FF",
                        padding: "5px 10px",
                        color: "#008ADF",
                        borderRadius: "10px",
                      }}
                      onClick={() =>
                        navigate(
                          route.userManagement.Recycler.ViewHistory(item.id)
                        )
                      }
                    >
                      View
                    </button>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan={headerData.length} style={{ textAlign: "center" }}>
                No Data Available
              </td>
            </tr>
          )}
        </tbody>
      </Table>
      <div className="table-footer">
        <div>
          <span className="back-text" style={{ color: "#181D27" }}>
            {translations.showing} {pastPickUps.length} {translations.entries}{" "}
          </span>
          <img src={iconRightArrow} />
        </div>
        <Pagination
          currentPage={pageNumber}
          totalPages={totalPages}
          onPageChange={setPageNumber}
        />
      </div>
    </div>
  );
};

export default PreviousItems;
