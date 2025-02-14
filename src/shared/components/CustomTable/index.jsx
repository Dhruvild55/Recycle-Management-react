/* eslint-disable react/prop-types */
import { Table } from "react-bootstrap";
import { Loader } from "../Loader";

function CustomTable({ headers, data, isLoading }) {
  return (
    <Table responsive>
      <thead>
        <tr>
          {headers.map((header) => (
            <th key={header.key}>{header.label}</th>
          ))}
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
              <p>No user Found</p>
            </td>
          </tr>
        )}
      </tbody>
    </Table>
  );
}

export default CustomTable;
