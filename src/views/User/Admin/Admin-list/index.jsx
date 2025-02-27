/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { memo, useState } from "react";
import {
  iconDelete,
  iconEdit,
  iconRightArrow,
} from "../../../../assets/images/icons";
import ProfilePic from "../../../../shared/components/ProfilePic";
import { ReactToastify } from "../../../../shared/utils";
import { deleteUser } from "../../../../query/users/deleteUser/deleteUser.query";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { FaPlus } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { route } from "../../../../shared/constants/AllRoutes";
import Pagination from "../../../../shared/components/CustomPagination";
import CustomTable from "../../../../shared/components/CustomTable";
import useUserList from "../../../../shared/hooks/useUserList";

const AdminList = ({ role }) => {
  const [pageSize, setPageSize] = useState(10);
  const [pageNumber, setPageNumber] = useState(1);
  const [isDescendingOrder, setIsdescendingOrder] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const translations = useSelector((state) => state.settings.translations);

  const {
    data: userListData,
    isLoading,
    refetch,
  } = useUserList({
    role,
    pageSize,
    pageNumber,
    isDescendingOrder,
  });

  // delete user api
  const { mutate: deleteUserMutation, isPending: isDeleteUser } = useMutation({
    mutationFn: deleteUser,
    onSuccess: (data) => {
      ReactToastify(data.message, "success");
      refetch();
    },
    onError: (error) => {
      ReactToastify("Delete user failed", "error");
    },
  });

  const formatDate = (dateTimeString) => {
    const isoString = dateTimeString.replace(" ", "T");
    const date = new Date(isoString);
    if (isNaN(date.getTime())) {
      return "";
    }
    return date.toISOString().split("T")[0];
  };

  const tableData = userListData?.data?.items || [];
  const filteredData = tableData.filter(
    (user) =>
      user.userName.toLowerCase().includes(searchQuery) ||
      user.email.toLowerCase().includes(searchQuery) ||
      user.phoneNumber.toLowerCase().includes(searchQuery)
  );

  const totalPages = Math.ceil(userListData?.data?.totalRecords / pageSize);

  const adminColumns = [
    {
      key: "id",
      label: "user_id",
      render: (row) =>
        row.id.length > 10 ? `${row.id.slice(0, 10)}...` : row.id,
    },
    {
      key: "userName",
      label: "name",
      render: (row) => (
        <div className="d-flex align-items-center">
          <ProfilePic
            size={30}
            userId={row.id}
            image={row.selfiePath}
            name={row.userName}
          />
          <span className="ms-2">{row.userName}</span>
        </div>
      ),
    },
    { key: "roles", label: "roles" },
    { key: "phoneNumber", label: "phone_no" },
    { key: "email", label: "email" },
    {
      key: "lastLoginDate",
      label: "last_login",
      render: (row) => (
        <div className="d-flex align-items-center">
          <span>{row.lastLoginDay}</span>{" "}
          <span className="ms-2">{formatDate(row.lastLoginDate)}</span>
        </div>
      ),
    },
    {
      key: "action",
      label: "action",
      render: (row) => (
        <div className="btn-section">
          <button
            onClick={() => alert("This page is under Development!")}
            className="action-btn"
          >
            <img src={iconEdit} />
          </button>
          <button
            onClick={() => deleteUserMutation({ userId: row.id })}
            className="action-btn"
          >
            <img src={iconDelete} />
          </button>
        </div>
      ),
    },
  ];

  return (
    <div>
      <div className="userList-header">
        <label className="primary-title">
          {translations.pageTitles.list_of_admin}
        </label>
        <div>
          <input
            className="search-input"
            type="text"
            placeholder={translations.search}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value.toLowerCase())}
          />
        </div>
        <button
          onClick={() =>
            navigate(route.addUser, { state: { fromUserList: true } })
          }
          className="add-btn"
        >
          {" "}
          {translations.add_admin} <FaPlus style={{ fontSize: "15px" }} />
        </button>
        <div>
          <label className="back-text">{translations.filter}:</label>
          <select>
            <option>All</option>
          </select>
        </div>
      </div>
      <CustomTable
        headers={adminColumns}
        data={filteredData}
        isLoading={isLoading}
      />
      <div className="table-footer">
        <div>
          <span className="back-text" style={{ color: "#181D27" }}>
            showing {userListData?.data?.items.length} entries
          </span>
          {"  "}
          <img src={iconRightArrow} />
          {/* <span>{translations.show} </span>
          <select
            value={pageSize}
            onChange={(e) => setPageSize(Number(e.target.value))}
          >
            {[10, 25, 50, 100].map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
          <span>{translations.entries}</span> */}
        </div>
        <div>
          <Pagination
            currentPage={pageNumber}
            totalPages={totalPages}
            onPageChange={setPageNumber}
          />
        </div>
      </div>
    </div>
  );
};

export default memo(AdminList);
