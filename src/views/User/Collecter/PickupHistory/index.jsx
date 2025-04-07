/* eslint-disable no-unused-vars */
import { useNavigate, useParams } from "react-router-dom";
import CollectorTopSection from "../Component/CollectorTopSection";
import {
  iconBack,
  iconDelete,
  iconRightArrow,
} from "../../../../assets/images/icons";
import CustomTable from "../../../../shared/components/CustomTable";
import { PickupHistoryData, pickupHistoryHeader } from "./config";
import { route } from "../../../../shared/constants/AllRoutes";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getCollectorPickupList } from "../../../../query/users/Collector/getCollectorPickupList/getCollectorPickupList.query";
import Pagination from "../../../../shared/components/CustomPagination";
import { useSelector } from "react-redux";
import TitleComponent from "../../../../shared/components/TitleComponent";
import { useState } from "react";
import { ReactToastify } from "../../../../shared/utils";
import { deleteCollection } from "../../../../query/CollectionManagement/DeleteCollection/deleteCollection.query";

const PickupHistory = () => {
  const navigate = useNavigate();
  const translations = useSelector((state) => state.settings.translations);
  const { showing, entries } = translations;
  const params = useParams();
  const [pageSize, setPageSize] = useState(10);
  const [pageNumber, setPageNumber] = useState(1);
  const { id } = params;

  const { data, refetch, isPending } = useQuery({
    queryKey: ["pickupHistory", id, pageNumber, pageSize],
    queryFn: () => getCollectorPickupList(id, pageSize, pageNumber),
    keepPreviousData: true,
    refetchOnWindowFocus: false,
  });

  const { mutate: deleteMutate } = useMutation({
    mutationFn: deleteCollection,
    onSuccess: (data) => {
      ReactToastify(data?.message, "success");
      refetch();
    },
  });

  const formatDate = (dateString) => {
    if (!dateString || dateString === "0001-01-01T00:00:00") {
      return "Not Available";
    }
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "short",
      day: "2-digit",
    });
  };
  const pickupHistoryList = data?.data?.items;
  const totalPages = Math.ceil((data?.data?.totalRecords || 1) / pageSize);
  return (
    <div className="user-profile-section">
      <div className="common-main-section">
        <div className="header-section">
          <div className="left-side">
            <button
              className="back-text"
              onClick={() => navigate(route.userManagement.Collector.List)}
            >
              <img src={iconBack} /> {"       "}
              BACK
            </button>
          </div>
          <div className="right-side">
            <img src={iconDelete} />
            <span>Suspend Collection Status</span>
          </div>
        </div>
        <CollectorTopSection />
        <div style={{ marginBottom: "20px" }}>
          <TitleComponent label="List of Recycler" />
        </div>
        <CustomTable
          headers={pickupHistoryHeader(navigate, formatDate, deleteMutate)}
          data={pickupHistoryList}
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
  );
};

export default PickupHistory;
