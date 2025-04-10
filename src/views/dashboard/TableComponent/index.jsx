/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import React from "react";
import { Table } from "react-bootstrap";
import { useSelector, shallowEqual } from "react-redux";
import { Loader } from "../../../shared/components/Loader";

const TableComponent = React.memo(({ headers, data, isPending }) => {
  const translations = useSelector(
    (state) => state.settings.translations,
    shallowEqual
  );

  return (
    <Table responsive>
      <thead>
        <tr>
          {headers.map((header) => (
            <th key={header.key} style={{ padding: "16px 20px" }}>
              {translations.tableFields[header.label]}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {isPending ? (
          <tr>
            <td colSpan="7" className="loader-container">
              <Loader animation="border" width="15px" height="15px" />
            </td>
          </tr>
        ) : data?.length > 0 ? (
          data.map((row, index) => (
            <tr key={index}>
              {headers.map((header) => (
                <td
                  key={header.key}
                  style={header.width ? { width: `${header.width}px` } : {}}
                >
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
});

export default TableComponent;
