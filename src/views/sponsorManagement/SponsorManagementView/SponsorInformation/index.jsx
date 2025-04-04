import { useNavigate, useParams } from "react-router-dom";
import { iconBack } from "../../../../assets/images/icons";
import TopSection from "../Component/TopSection";
import ProfilePic from "../../../../shared/components/ProfilePic";
import { useQuery } from "@tanstack/react-query";
import { getSponsorDetails } from "../../../../query/SponsorManagement/getSponsorDetails/getSponsorDetails.query";
import { route } from "../../../../shared/constants/AllRoutes";

const SponsorInformation = () => {
  const navigate = useNavigate();
  const params = useParams();
  const { id } = params;

  const { data } = useQuery({
    queryKey: ["sponsorDetails", id],
    queryFn: () => getSponsorDetails(id),
    keepPreviousData: true,
  });

  const formatDate = (dateString) => {
    if (!dateString || dateString.startsWith("0001-01-01")) {
      return "Not Available";
    }
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString("en-US", { month: "long" });
    const year = date.getFullYear();
    const getOrdinalSuffix = (n) => {
      const s = ["th", "st", "nd", "rd"];
      const v = n % 100;
      return s[(v - 20) % 10] || s[v] || s[0];
    };
    return `${day}${getOrdinalSuffix(day)} ${month}, ${year}`;
  };

  const sponsorDetails = data?.data;
  return (
    <div className="common-main-section">
      <div style={{ marginBottom: "20px" }}>
        <button
          className="back-text"
          onClick={() => navigate(route.sponsorManagement.List)}
        >
          <img src={iconBack} /> Back
        </button>
      </div>
      <TopSection />
      <label className="primary-title" style={{ marginTop: "30px" }}>
        Sponsor Information
      </label>
      <div className="sponsor-info-section row">
        <div className="col-lg-3">
          <ProfilePic size={200} image={sponsorDetails?.sponsorImg} />
        </div>
        <div className="col-lg-9">
          <div className="fields-section">
            <div className="fields-group full-width">
              <label>Sponsor Name</label>
              <input type="text" value={sponsorDetails?.sponsorName} readOnly />
            </div>
            <div className="fields-group full-width">
              <label>Date Created</label>
              <input
                type="text"
                value={formatDate(sponsorDetails?.activationDate)}
                readOnly
              />
            </div>
            <div className="fields-group full-width">
              <label>No. of Link Account</label>
              <input
                type="text"
                value={sponsorDetails?.noOfLinkedAccount}
                readOnly
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SponsorInformation;
