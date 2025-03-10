/* eslint-disable no-unused-vars */
// new

import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteUser } from "../../../../query/users/deleteUser/deleteUser.query";
import { ReactToastify } from "../../../../shared/utils";
import UserManagementTopSection from "../../Component/UserManagementTopSection";
import CustomTable from "../../../../shared/components/CustomTable";
import { iconRightArrow } from "../../../../assets/images/icons";
import Pagination from "../../../../shared/components/CustomPagination";
import { useMutation, useQuery } from "@tanstack/react-query";
import { collecterColumns } from "../Recycler-List/configue";
import { getRecyclerList } from "../../../../query/users/getRecyclerList/getRecycler.query";

const RecyclerList = () => {
  const [selectedRole, setSelectedRole] = useState("Recycler");
  const [pageSize, setPageSize] = useState(10);
  const [pageNumber, setPageNumber] = useState(1);
  const [isDescendingOrder, setIsdescendingOrder] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRoleOpt, setSelectedRoleOpt] = useState("All");
  const navigate = useNavigate();
  const translations = useSelector((state) => state.settings.translations);

  console.log(translations);

  const { data: recyclerData, isPending } = useQuery({
    queryKey: ["recyclerList", pageSize, pageNumber, isDescendingOrder],
    queryFn: () => getRecyclerList({ pageNumber, pageSize, isDescendingOrder }),
    keepPreviousData: true,
    staleTime: 30000,
    refetchOnWindowFocus: false,
  });

  console.log(recyclerData?.data?.data);

  // delete user api
  const { mutate: deleteUserMutation, isPending: isDeleteUser } = useMutation({
    mutationFn: deleteUser,
    onSuccess: (data) => {
      ReactToastify(data.message, "success");
    },
    onError: (error) => {
      ReactToastify("Delete user failed", "error");
    },
  });

  const tableData = recyclerData?.data?.items || [];
  const filteredData = tableData.filter((user) => {
    const matchesSearch =
      user?.userName?.toLowerCase().includes(searchQuery) ||
      user?.email?.toLowerCase().includes(searchQuery) ||
      user?.phoneNumber?.toLowerCase().includes(searchQuery);

    const matchesRole =
      selectedRoleOpt === "All" || user?.roles?.includes(selectedRoleOpt);

    return matchesSearch && matchesRole;
  });

  const totalPages = Math.ceil(recyclerData?.data?.totalRecords / pageSize);

  const handleFilterChange = (e) => {
    console.log(e.target.value);
    setSelectedRoleOpt(e.target.value);
  };
  return (
    <div className="userManagerment-section">
      <div className="common-main-section">
        <UserManagementTopSection
          selectedRole={selectedRole}
          setSelectedRole={setSelectedRole}
          translations={translations.userManagementTopBtn}
        />
        <div className="userList-header">
          <label className="primary-title">
            {translations.pageTitles.list_of_recycler}
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
            <label className="back-text">{translations.filter}:</label>
            <select value={selectedRoleOpt} onChange={handleFilterChange}>
              <option value="All">All</option>
              <option value="Admin">Admin</option>
              <option value="Super Admin">Super Admin</option>
            </select>
          </div>
        </div>
        <CustomTable
          headers={collecterColumns(navigate, deleteUserMutation)}
          data={filteredData}
          isLoading={isPending}
        />
        <div className="table-footer">
          <div>
            <span className="back-text" style={{ color: "#181D27" }}>
              {translations.showing} {filteredData.length}{" "}
              {translations.entries}
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
    </div>
  );
};

export default RecyclerList;
