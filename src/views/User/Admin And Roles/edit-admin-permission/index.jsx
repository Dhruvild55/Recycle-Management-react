/* eslint-disable no-unused-vars */
import { useMutation, useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Switch from "react-switch";
import { getPermission } from "../../../../query/roles/getPermissions/getPermission.query";
import { Loader } from "../../../../shared/components/Loader";
import { updateRoles } from "../../../../query/roles/updateRoles/updateRoles.query";

const EditPermissions = () => {
  const { role } = useParams();
  const [permissions, setPermissions] = useState([]);

  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["getPermissions", role],
    queryFn: () => getPermission({ role }),
  });

  const { mutate: updateUsermutation, isPending: isupdateRole } = useMutation({
    mutationFn: updateRoles,
    onSuccess: (data) => {
      refetch();
    },
  });
  useEffect(() => {
    setPermissions(data?.data);
  }, [data]);

  const header = [
    { key: "pageName", label: "Page" },
    { key: "isView", label: "View" },
    { key: "isEdit", label: "Edit" },
    { key: "isCreate", label: "Create" },
    { key: "isDelete", label: "Delete" },
  ];

  const switchStyles = {
    onColor: "#00ff00", // Green color when switch is true
    offColor: "#ff0000", // Red color when switch is false
    checkedIcon: false,
    uncheckedIcon: false,
  };
  const handleToggle = (index, key, pageName) => {
    setPermissions((prev) => {
      return prev.map((item) =>
        item.pageName === pageName ? { ...item, [key]: !item[key] } : item
      );
    });
    const updatedRow = permissions.find((item) => item.pageName === pageName);
    if (!updatedRow) return;
    const updatedData = { ...updatedRow, [key]: !updatedRow[key] };
    updateUsermutation(updatedData, {
      onError: () => {
        setPermissions((prev) => {
          return prev.map((item) =>
            item.pageName === pageName ? { ...item, [key]: !item[key] } : item
          );
        });
      },
    });
  };
  return (
    <div className="permission-section">
      <div className="common-main-section">
        <div>
          <button className="back-text">Back to Roles List</button>
        </div>
        <div style={{ marginTop: "20px" }}>
          <p>Roles</p>
          <div className="input-section">
            <input type="text" placeholder="Enter your new role" />
            <button className="save-btn">Save</button>
          </div>
        </div>
        <div className="table-section">
          <p>Permissions</p>
        </div>
        <Table responsive>
          <thead>
            <tr>
              {header.map((item, index) => (
                <th
                  key={index}
                  style={{
                    textAlign: "left",
                    padding: item.label === "Page" ? "16px 30px" : "16px 50px",
                  }}
                >
                  {item.label}
                </th>
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
            ) : (
              permissions?.map((row, index) => (
                <tr key={index}>
                  <td
                    style={{
                      textAlign: "left",
                      paddingLeft: "28px",
                      fontSize: "14px",
                      fontWeight: "400",
                      color: "#181D27",
                      paddingTop: "10px",
                      paddingBottom: "10px",
                    }}
                  >
                    {row.pageName}
                  </td>
                  {header.slice(1).map((item) => (
                    <td
                      key={item.key}
                      style={{ textAlign: "right", paddingLeft: "28px" }}
                    >
                      <div className="d-flex align-items-right">
                        <label
                          style={{
                            color: "black",
                            marginRight: "10px",
                          }}
                        >
                          {row[item.key] === true ? "Yes" : "No"}
                        </label>
                        <Switch
                          checked={row[item.key]}
                          onChange={() =>
                            handleToggle(index, item.key, row.pageName)
                          }
                          offHandleColor="#FF0000"
                          onHandleColor="#00DE4E"
                          checkedIcon={switchStyles.checkedIcon}
                          uncheckedIcon={switchStyles.uncheckedIcon}
                          className={`custom-switch ${
                            !row[item.key] ? "unchecked" : ""
                          }`}
                        />
                      </div>
                    </td>
                  ))}
                </tr>
              ))
            )}
            {}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default EditPermissions;
