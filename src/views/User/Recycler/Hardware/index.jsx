/* eslint-disable no-unused-vars */
import { useNavigate, useParams } from "react-router-dom";
import { iconBack, iconRightArrow } from "../../../../assets/images/icons";
import CustomTable from "../../../../shared/components/CustomTable";
import RecyclerInfoTopSection from "../Component/RecyclerInfoTopSection";
import { useQuery } from "@tanstack/react-query";
import { getHardwareList } from "../../../../query/users/Recycler/getHArdwareList/getHardwareList.query";
import ProfilePic from "../../../../shared/components/ProfilePic";
import ChipComponent from "../../../../shared/components/ChipComponent";
import { useState } from "react";
import { useSelector } from "react-redux";
import Pagination from "../../../../shared/components/CustomPagination";

const HardwareTable = () => {
  const navigate = useNavigate();
  const translations = useSelector((state) => state.settings.translations);
  const { showing, entries } = translations;
  const params = useParams();
  const [pageSize, setPageSize] = useState(10);
  const [pageNumber, setPageNumber] = useState(1);
  const { id } = params;

  const headerData = [
    {
      key: "productName",
      label: "item",
      render: (row) => {
        return (
          <div className="d-flex align-items-center gap-2">
            <ProfilePic image={row.productImage} />
            <span>{row.productName}</span>
          </div>
        );
      },
    },
    { key: "category", label: "category" },
    { key: "quantity", label: "quantity" },
    { key: "paymentType", label: "paymentType" },
    {
      key: "status",
      label: "status",
      render: (row) => {
        return (
          <div>
            <ChipComponent
              label={row.orderStatus}
              color={
                row.orderStatus === "ReadyToShip"
                  ? "green"
                  : row.orderStatus === "Completed"
                  ? "blue"
                  : row.orderStatus === "Cancelled"
                  ? "yellow"
                  : ""
              }
            />
          </div>
        );
      },
    },
    {
      key: "action",
      label: "action",
      render: () => (
        <button
          className="view-button"
          style={{
            backgroundColor: "#D9F0FF",
            padding: "5px 10px",
            color: "#008ADF",
            borderRadius: "10px",
          }}
        >
          View
        </button>
      ),
    },
  ];

  const { data, isPending } = useQuery({
    queryKey: ["getHardwareList", id, pageNumber, pageSize],
    queryFn: () => getHardwareList({ id, pageNumber, pageSize }),
  });

  const totalPages = Math.ceil((data?.data?.totalRecords || 1) / pageSize);
  return (
    <div className="user-profile-section">
      <div className="common-main-section">
        <div className="header-section">
          <button
            className="back-text"
            onClick={() => navigate("/user-Management/recycler")}
          >
            <img src={iconBack} /> {"   "} BACK
          </button>
        </div>
        <RecyclerInfoTopSection />
        <label className="primary-title">Hardware</label>
        <div className="hardware-table" style={{ marginTop: "20px" }}>
          <CustomTable
            headers={headerData}
            data={data?.data?.items}
            isLoading={isPending}
          />
          <div className="table-footer">
            <span className="back-text">
              {showing} {data?.data?.items?.length} {entries} {"   "}
              <img src={iconRightArrow} alt="Arrow" />
            </span>
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

export default HardwareTable;
