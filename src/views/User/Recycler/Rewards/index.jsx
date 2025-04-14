/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useNavigate, useParams } from "react-router-dom";
import {
  iconBack,
  iconDelete,
  iconRightArrow,
} from "../../../../assets/images/icons";
import RecyclerInfoTopSection from "../Component/RecyclerInfoTopSection";
import { useQuery } from "@tanstack/react-query";
import { getRewardsData } from "../../../../query/users/Recycler/getRewardsList/getRewardsList.query";
import { useSelector } from "react-redux";
import { useState } from "react";
import Pagination from "../../../../shared/components/CustomPagination";
import RewardsItemComponent from "./RewardsItemComponent";

const RewardsList = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [pageSize, setPageSize] = useState(5);
  const [pageNumber, setPageNumber] = useState(1);
  const translations = useSelector((state) => state.settings.translations);
  const { id } = params;

  const { data } = useQuery({
    queryKey: ["getRewardList", id, pageSize, pageNumber],
    queryFn: () => getRewardsData({ id, pageSize, pageNumber }),
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
            <img src={iconBack} /> {"   "}
            BACK
          </button>
        </div>
        <RecyclerInfoTopSection />
        <label className="primary-title">Rewards History</label>
        <div className="rewards-list">
          {data?.data?.items.length > 0 ? (
            data?.data?.items?.map((reward, index) => (
              <RewardsItemComponent key={index} reward={reward} />
            ))
          ) : (
            <div style={{ textAlign: "center" }}>
              <p>No Data Available </p>
            </div>
          )}
        </div>
        {data?.data?.items.length > 0 && (
          <div className="table-footer">
            <div>
              <span className="back-text" style={{ color: "#181D27" }}>
                {translations.showing} {data?.data?.items.length}{" "}
                {translations.entries}{" "}
              </span>
              <img src={iconRightArrow} />
            </div>
            <Pagination
              currentPage={pageNumber}
              totalPages={totalPages}
              onPageChange={setPageNumber}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default RewardsList;
