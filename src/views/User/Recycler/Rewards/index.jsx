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

const formatDate = (dateString) => {
  if (!dateString || dateString === "0001-01-01T00:00:00") {
    return "Not Available";
  }
  const date = new Date(dateString);
  return date
    .toLocaleString("en-US", {
      year: "2-digit",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    })
    .replace(",", ""); // Removes the comma between date and time
};

const RewardItem = ({ reward }) => (
  <div className="reward-item">
    <div className="reward-details">
      <div className="reward-image ">
        <img src="/images/image.png" alt="Reward" />
      </div>
      <div className="rewards-title ">
        <h3>{reward.rewardName}</h3>
        <h2>Via rewards</h2>
        <p>Claimed on {formatDate(reward?.claimedOn)}</p>
      </div>
    </div>
    <div className="secondary-details">
      <div className="">
        <p>Status </p>
        <h2>{reward?.status}</h2>
      </div>
      <div className="">
        <p>Validity</p>
        <h2>{reward?.validity}</h2>
      </div>
      <div className="">
        <p>Point Spend </p>
        <h2>{reward?.pointSpent}</h2>
      </div>
    </div>
  </div>
);

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
          <div className="right-section">
            <button className="" style={{ border: "none" }}>
              <img src={iconDelete} alt="delete icon" /> Deactivate Account
            </button>
          </div>
        </div>
        <RecyclerInfoTopSection />
        <label className="primary-title">Rewards History</label>
        <div className="rewards-list">
          {data?.data?.items.length > 0 ? (
            data?.data?.items?.map((reward, index) => (
              <RewardItem key={index} reward={reward} />
            ))
          ) : (
            <p>No Data Available </p>
          )}
        </div>
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
      </div>
    </div>
  );
};

export default RewardsList;
