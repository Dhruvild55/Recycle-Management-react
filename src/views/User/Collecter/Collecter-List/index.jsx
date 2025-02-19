/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useSelector } from "react-redux";
import {
  iconDelete,
  iconEdit,
  iconProfile,
  iconRightArrow,
} from "../../../../assets/images/icons";
import ProfilePic from "../../../../shared/components/ProfilePic";
import { usersList } from "../../../../query/users/getusers/getUsers.query";
import { useMutation, useQuery } from "@tanstack/react-query";
import { deleteUser } from "../../../../query/users/deleteUser/deleteUser.query";
import { ReactToastify } from "../../../../shared/utils";
import CustomTable from "../../../../shared/components/CustomTable";
import Pagination from "../../../../shared/components/CustomPagination";
import { useState } from "react";
import { route } from "../../../../shared/constants/AllRoutes";
import { useNavigate } from "react-router-dom";
import useUserList from "../../../../shared/hooks/useUserList";

const CollecterList = ({ role }) => {
  const translations = useSelector((state) => state.settings.translations);
  const [pageSize, setPageSize] = useState(10);
  const [pageNumber, setPageNumber] = useState(1);
  const [isDescendingOrder, setIsdescendingOrder] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

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

  const collecterColumns = [
    {
      key: "id",
      label: "user_id",
      render: (row) =>
        row.id.length > 10 ? `${row.id.slice(0, 10)}...` : row.id,
    },
    {
      key: "firstName",
      label: "name",
      render: (row) => (
        <div className="d-flex align-items-center">
          <ProfilePic size={30} userId={row.id} />
          <span className="ms-2">{row.firstName}</span>
        </div>
      ),
    },
    { key: "roles", label: "category" },
    { key: "email", label: "email" },
    { key: "phoneNumber", label: "phone_no" },
    { key: "location", label: "location" },
    {
      key: "isApprovedByAdmin",
      label: "status",
      render: (row) => (
        <div
          className="flex gap-2"
          style={{ alignItems: "center", display: "flex" }}
        >
          <div
            style={{
              width: "10px",
              height: "10px",
              backgroundColor: row.isApprovedByAdmin ? "#00DE4E" : "#C6C6C6",
              borderRadius: "20px",
            }}
          ></div>
          <span>{row.isApprovedByAdmin ? "Active" : "Not Active"}</span>
        </div>
      ),
    },
    {
      key: "action",
      label: "action",
      render: (row) => (
        <div className="flex gap-2">
          <button
            onClick={() => navigate(route.viewCollector(row.id))}
            style={{
              backgroundColor: "#D9F0FF",
              padding: "5px 5px",
              borderRadius: "10px",
            }}
          >
            <img src={iconProfile} />
          </button>
          <button onClick={() => deleteUserMutation({ userId: row.id })}>
            <img src={iconDelete} />
          </button>
        </div>
      ),
    },
  ];

  const tableData = userListData?.data?.items || [];
  const filteredData = tableData.filter(
    (user) =>
      user.userName.toLowerCase().includes(searchQuery) ||
      user.email.toLowerCase().includes(searchQuery) ||
      user.phoneNumber.toLowerCase().includes(searchQuery)
  );

  const totalPages = Math.ceil(userListData?.data?.totalRecords / pageSize);

  return (
    <div>
      <div className="userList-header">
        <label className="primary-title">
          {translations.pageTitles.list_of_collector}
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
        <div>
          <label>{translations.filter}:</label>
          <select>
            <option>All</option>
          </select>
        </div>
      </div>
      <CustomTable
        headers={collecterColumns}
        data={filteredData}
        isLoading={isLoading}
      />
      <div className="table-footer">
        <div>
          <span className="back-text" style={{ color: "#181D27" }}>
            {translations.showing_entries}
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

export default CollecterList;
