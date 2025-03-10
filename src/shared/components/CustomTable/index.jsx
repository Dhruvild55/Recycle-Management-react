/* eslint-disable react/prop-types */
import { Table } from "react-bootstrap";
import { Loader } from "../Loader";
import { useSelector } from "react-redux";

function CustomTable({ headers, data, isLoading }) {
  const translations = useSelector((state) => state.settings.translations);

  return (
    <Table responsive>
      <thead>
        <tr>
          {headers.map((header) => {
            return (
              <th key={header.key}>{translations.tableFields[header.label]}</th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {isLoading ? (
          <tr>
            <td colSpan="7">
              <div className="loader-container">
                <Loader animation="border" width="15px" height="15px" />
              </div>
            </td>
          </tr>
        ) : data?.length > 0 ? (
          data?.map((row, index) => (
            <tr key={index}>
              {headers.map((header) => (
                <td key={header.key}>
                  {header.render ? header.render(row) : row[header.key]}
                </td>
              ))}
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="7" className="no-user">
              <p
                style={{
                  fontSize: "20px",
                  marginBottom: "0px",
                  fontWeight: "600",
                }}
              >
                No user Found
              </p>
            </td>
          </tr>
        )}
      </tbody>
    </Table>
  );
}

export default CustomTable;
