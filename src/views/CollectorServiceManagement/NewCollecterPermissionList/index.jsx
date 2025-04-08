/* eslint-disable no-unused-vars */
import { useNavigate } from "react-router-dom";
import CustomTable from "../../../shared/components/CustomTable";
import { headers } from "./configue";
import { useQuery } from "@tanstack/react-query";
import { getCollectorRequestList } from "../../../query/CollectionServiceManagement/getCollectorRequestList/getColectorRequestList.query";
import Pagination from "../../../shared/components/CustomPagination";
import { useSelector } from "react-redux";
import { useState } from "react";
import { iconRightArrow } from "../../../assets/images/icons";

const NewCollecterPermissionList = () => {
  const navigate = useNavigate();
  const translations = useSelector((state) => state.settings.translations);
  const { showing, entries } = translations;
  const [pageSize, setPageSize] = useState(10);
  const [pageNumber, setPageNumber] = useState(1);

  const { data, isPending } = useQuery({
    queryKey: ["getCollectorRequestList", pageSize, pageNumber],
    queryFn: () => getCollectorRequestList({ pageNumber, pageSize }),
  });

  const totalPages = Math.ceil((data?.data?.totalRecords || 1) / pageSize);
  return (
    <>
      <div className="common-main-section">
        <label className="primary-title" style={{ marginBottom: "20px" }}>
          New collector enrollment
        </label>
        <CustomTable
          headers={headers(navigate)}
          data={data?.data?.items}
          isLoading={isPending}
        />
        <div
          className="table-footer"
          style={{ marginTop: "30px", marginBottom: "20px" }}
        >
          <div>
            <span className="back-text" style={{ color: "#181D27" }}>
              {showing} {data?.data?.items?.length} {entries}{" "}
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
    </>
  );
};

export default NewCollecterPermissionList;
