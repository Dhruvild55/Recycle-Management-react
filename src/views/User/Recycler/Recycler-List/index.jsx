/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { memo, useState } from "react";
import { useSelector } from "react-redux";
import { iconRightArrow } from "../../../../assets/images/icons";
import { useMutation, useQuery } from "@tanstack/react-query";
import { deleteUser } from "../../../../query/users/deleteUser/deleteUser.query";
import { ReactToastify } from "../../../../shared/utils";
import CustomTable from "../../../../shared/components/CustomTable";
import Pagination from "../../../../shared/components/CustomPagination";
import { useNavigate } from "react-router-dom";
import { getRecyclerList } from "../../../../query/users/getRecyclerList/getRecycler.query";
import { collecterColumns } from "./configue";

const RecyclerList = ({ role }) => {
  const translations = useSelector((state) => state.settings.translations);
  const [pageSize, setPageSize] = useState(10);
  const [pageNumber, setPageNumber] = useState(1);
  const [isDescendingOrder, setIsdescendingOrder] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const { data, isPending } = useQuery({
    queryKey: ["recyclerList", role, pageSize, pageNumber, isDescendingOrder],
    queryFn: getRecyclerList({ role, pageNumber, pageSize, isDescendingOrder }),
    keepPreviousData: true,
    staleTime: 30000,
    refetchOnWindowFocus: false,
  });

  const { mutate: deleteUserMutation, isPending: isDeleteUser } = useMutation({
    mutationFn: deleteUser,
    onSuccess: (data) => {
      ReactToastify(data.message, "success");
    },
    onError: (error) => {
      ReactToastify("Delete user failed", "error");
    },
  });

  const tableData = data?.data?.items || [];
  const filteredData = tableData.filter(
    (user) =>
      user.userName.toLowerCase().includes(searchQuery) ||
      user.email.toLowerCase().includes(searchQuery) ||
      user.phoneNumber.toLowerCase().includes(searchQuery)
  );

  const totalPages = Math.ceil(data?.data?.totalRecords / pageSize);

  return (
    <div>
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
          <label>{translations.filter}:</label>
          <select>
            <option>All</option>
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

export default memo(RecyclerList);
