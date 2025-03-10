/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { memo, useState } from "react";
import { iconRightArrow } from "../../../../assets/images/icons";
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
import { headers } from "./confige";

const AdminList = ({ role }) => {
  const [pageSize, setPageSize] = useState(10);
  const [pageNumber, setPageNumber] = useState(1);
  const [isDescendingOrder, setIsdescendingOrder] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRole, setSelectedRole] = useState("All");

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

  const tableData = userListData?.data?.items || [];
  const filteredData = tableData.filter((user) => {
    const matchesSearch =
      user?.userName?.toLowerCase().includes(searchQuery) ||
      user?.email?.toLowerCase().includes(searchQuery) ||
      user?.phoneNumber?.toLowerCase().includes(searchQuery);

    const matchesRole =
      selectedRole === "All" || user?.roles?.includes(selectedRole);

    return matchesSearch && matchesRole;
  });

  const totalPages = Math.ceil(userListData?.data?.totalRecords / pageSize);

  const handleFilterChange = (e) => {
    setSelectedRole(e.target.value);
  };

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
          <select value={selectedRole} onChange={handleFilterChange}>
            <option value="All">All</option>
            <option value="Admin">Admin</option>
            <option value="Super Admin">Super Admin</option>
          </select>
        </div>
      </div>
      <CustomTable
        headers={headers(deleteUserMutation)}
        data={filteredData}
        isLoading={isLoading}
      />
      <div className="table-footer">
        <div>
          <span className="back-text" style={{ color: "#181D27" }}>
            {translations.showing} {filteredData.length} {translations.entries}
          </span>
          {"  "}
          <img src={iconRightArrow} />
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
