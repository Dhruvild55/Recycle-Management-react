/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useMutation, useQuery } from "@tanstack/react-query";

import { FaPlus } from "react-icons/fa6";
import { ReactToastify } from "../../../../shared/utils";
import UserManagementTopSection from "../UserManagementTopSection";
import CustomTable from "../../../../shared/components/CustomTable";
import Pagination from "../../../../shared/components/CustomPagination";
import { iconRightArrow } from "../../../../assets/images/icons";
import { deleteUser } from "../../../../query/users/deleteUser/deleteUser.query";
import useDebounce from "../../../../shared/hooks/useDebounce";

const UserList = ({
  title,
  queryKey,
  fetchFunction,
  tableHeaders,
  addButton,
  roleOptions,
}) => {
  const [pageSize, setPageSize] = useState(10);
  const [pageNumber, setPageNumber] = useState(1);
  const [isDescendingOrder, setIsDescendingOrder] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRoleOpt, setSelectedRoleOpt] = useState("All");
  const navigate = useNavigate();
  const translations = useSelector((state) => state.settings.translations);

  const combinedSearchTerm = `${searchQuery}`.trim();
  const debouncedSearchQuery = useDebounce(combinedSearchTerm, 500);

  const { data, isPending, refetch } = useQuery({
    queryKey: [
      queryKey,
      pageSize,
      pageNumber,
      isDescendingOrder,
      debouncedSearchQuery,
      selectedRoleOpt,
    ],
    queryFn: () =>
      fetchFunction({
        pageNumber,
        pageSize,
        isDescendingOrder,
        searchTerm: debouncedSearchQuery,
        role: selectedRoleOpt,
      }),
    keepPreviousData: true,
    refetchOnWindowFocus: false,
  });

  const { mutate: deleteUserMutation } = useMutation({
    mutationFn: deleteUser,
    onSuccess: (data) => {
      ReactToastify(data.message, "success");
      refetch();
    },
    onError: () => {
      ReactToastify("Delete user failed", "error");
    },
  });

  const tableData = data?.data?.items || [];

  const totalPages = Math.ceil((data?.data?.totalRecords || 1) / pageSize);

  return (
    <div className="userManagerment-section">
      <div className="common-main-section">
        <UserManagementTopSection
          translations={translations.userManagementTopBtn}
        />
        <div className="common-page-toolbar">
          <label className="primary-title">{title}</label>
          <div className="tool-section">
            <input
              className="search-input"
              type="text"
              placeholder={translations.search}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {addButton && (
            <button
              onClick={() => navigate(addButton.route)}
              className="add-btn"
            >
              {addButton.label}
              <FaPlus style={{ fontSize: "15px" }} />
            </button>
          )}
          <div className="tool-section">
            <label className="back-text">{translations.filter}:</label>
            <select
              value={selectedRoleOpt}
              onChange={(e) => setSelectedRoleOpt(e.target.value)}
            >
              {roleOptions.map((role) => (
                <option key={role} value={role}>
                  {role}
                </option>
              ))}
            </select>
          </div>
        </div>
        <CustomTable
          headers={tableHeaders(navigate, deleteUserMutation)}
          data={tableData}
          isLoading={isPending}
        />
        <div className="table-footer">
          <div>
            <span className="back-text" style={{ color: "#181D27" }}>
              {translations.showing} {tableData.length} {translations.entries}{" "}
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
    </div>
  );
};

export default UserList;
