/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useSelector } from "react-redux";
import { iconDelete, iconEdit } from "../../../../assets/images/icons";
import ProfilePic from "../../../../shared/components/ProfilePic";
import { usersList } from "../../../../query/users/getusers/getUsers.query";
import { useMutation, useQuery } from "@tanstack/react-query";
import { deleteUser } from "../../../../query/users/deleteUser/deleteUser.query";
import { ReactToastify } from "../../../../shared/utils";
import CustomTable from "../../../../shared/components/CustomTable";
import Pagination from "../../../../shared/components/CustomPagination";
import { useState } from "react";

const CollecterList = ({ Role }) => {
  const translations = useSelector((state) => state.settings.translations);
  const [pageSize, setPageSize] = useState(10);
  const [pageNumber, setPageNumber] = useState(1);
  const [isDescendingOrder, setIsdescendingOrder] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["userList", pageNumber, pageSize, isDescendingOrder, Role],
    queryFn: () =>
      usersList({
        pageNumber,
        pageSize,
        isDescendingOrder,
        Role,
      }),
    keepPreviousData: true,
  });

  const { mutate: deleteUserMutation, isPending: isDeleteUser } = useMutation({
    mutationFn: deleteUser,
    onSuccess: (data) => {
      console.log("delete User Succesfullly", data.message);
      ReactToastify(data.message, "success");
      refetch();
    },
    onError: (error) => {
      console.log("error in user Deletion", error);
      ReactToastify("Delete user failed", "error");
    },
  });

  const collecterColumns = [
    {
      key: "id",
      label: "User ID",
      render: (row) =>
        row.id.length > 10 ? `${row.id.slice(0, 10)}...` : row.id,
    },
    {
      key: "firstName",
      label: "Name",
      render: (row) => (
        <div className="d-flex align-items-center">
          <ProfilePic size={30} userId={row.id} />
          <span className="ms-2">{row.firstName}</span>
        </div>
      ),
    },
    { key: "roles", label: "Roles" },
    { key: "phoneNumber", label: "Phone No." },
    { key: "email", label: "Email" },
    { key: "lastLogin", label: "Status" },
    {
      key: "action",
      label: "Action",
      render: (row) => (
        <div className="flex gap-2">
          <button onClick={() => alert("Edit clicked")}>
            <img src={iconEdit} />
          </button>
          <button onClick={() => deleteUserMutation({ userId: row.id })}>
            <img src={iconDelete} />
          </button>
        </div>
      ),
    },
  ];

  const tableData = data?.data?.items || [];
  const filteredData = tableData.filter((user) =>
    user.userName.toLowerCase().includes(searchQuery)
  );

  const totalPages = Math.ceil(data?.data?.totalRecords / pageSize);

  return (
    <div>
      <div className="userList-header">
        <label>List of Collecters</label>
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
          <label>Filter:</label>
          <select>
            <option>All</option>
            <option>Account Manager</option>
            <option>Administration</option>
            <option>Assistant Account</option>
            <option>Assistant Manager</option>
            <option>Branch Manager</option>
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
          <span>{translations.show} </span>
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
          <span>{translations.entries}</span>
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
