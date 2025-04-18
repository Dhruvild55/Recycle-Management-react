/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
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
import TitleComponent from "../../../../shared/components/TitleComponent";
import ButtonComponent from "../../../../shared/components/Buttoncomponent";
import FilterDropdown from "../../../../shared/components/FillerDropdown";
import SearchInput from "../../../../shared/components/SearchInput";

const UserList = ({
  title,
  queryKey,
  fetchFunction,
  tableHeaders,
  addButton,
  roleOptions,
  editPermission,
  deletePermission,
  createPermission,
}) => {
  const [pageSize, setPageSize] = useState(10);
  const [pageNumber, setPageNumber] = useState(1);
  const [isDescendingOrder, setIsDescendingOrder] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterText, setFilter] = useState("");
  const navigate = useNavigate();
  const translations = useSelector((state) => state.settings.translations);

  const combinedSearchTerm = `${searchQuery}`.trim();
  const debouncedSearchQuery = useDebounce(combinedSearchTerm, 500);

  // ! Users List API
  const { data, isPending, refetch } = useQuery({
    queryKey: [
      queryKey,
      pageSize,
      pageNumber,
      isDescendingOrder,
      debouncedSearchQuery,
      filterText,
    ],
    queryFn: () =>
      fetchFunction({
        pageNumber,
        pageSize,
        isDescendingOrder,
        searchTerm: debouncedSearchQuery,
        role: filterText,
      }),
    keepPreviousData: true,
    refetchOnWindowFocus: false,
  });

  //! Delete User API
  const { mutate: deleteUserMutation } = useMutation({
    mutationFn: deleteUser,
    onSuccess: (data) => {
      ReactToastify(data.message, "success");
      setPageNumber(1);
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
          <TitleComponent label={title} />
          <div className="tool-section">
            <SearchInput
              placeholder="Search"
              onSearch={(query) => {
                setSearchQuery(query);
              }}
            />
          </div>

          {addButton && createPermission && (
            <ButtonComponent
              label={addButton.label}
              onClick={() => navigate(addButton.route)}
              className="add-btn"
              icon={<FaPlus style={{ fontSize: "15px" }} />}
            />
          )}
          <div className="tool-section">
            <FilterDropdown
              label={translations.filter}
              value={filterText} // ✅ control the selected value
              options={[
                { value: "", label: "" },
                ...(roleOptions.map((role) => ({
                  value: role,
                  label: role,
                })) || []),
              ]}
              onFilterChange={(query) => {
                setFilter(query);
                setPageNumber(1);
              }}
            />

            {/* <label className="back-text">{translations.filter}:</label>
            <select
              value={selectedRoleOpt}
              onChange={(e) => setSelectedRoleOpt(e.target.value)}
            >
              {roleOptions.map((role) => (
                <option key={role} value={role}>
                  {role}
                </option>
              ))}
            </select> */}
          </div>
        </div>
        <CustomTable
          headers={tableHeaders(
            navigate,
            deleteUserMutation,
            editPermission,
            deletePermission
          )}
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
