import { useNavigate } from "react-router-dom";
import ProfilePic from "../../../../shared/components/ProfilePic";

const CashRewardsDetails = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="common-main-section">
        <div className="header-section">
          <button className="back-text" onClick={() => navigate(-1)}>
            &larr; BACK
          </button>
        </div>
        <div style={{ marginTop: "20px", marginBottom: "20px" }}>
          <h1 className="primary-title">Convert2Cash Detail</h1>
        </div>
        <div>
          <p className="title">Points</p>
          <div className="fields-section">
            <div className="fields-group">
              <label>Points to Convert </label>
              <input type="text" value="5% Subway Discount" />
            </div>
            <div className="fields-group">
              <label>Amount to Receive</label>
              <input type="text" value="5% Subway Discount" />
            </div>
          </div>
        </div>
        <div style={{ marginTop: "20px" }}>
          <p className="title">Bank Account Detail</p>
          <div className="fields-section-1">
            <div className="fields-group">
              <label htmlFor="cashback">Cashback Location</label>
              <input
                type="text"
                id="cashback"
                value="Personal Account Ahmad Marwan"
                readOnly
              />
            </div>

            <div className="fields-group">
              <label htmlFor="holder-name">Account Holder Name</label>
              <input
                type="text"
                id="holder-name"
                value="Ahmad Marwan"
                readOnly
              />
            </div>

            {/* Second row */}
            <div className="fields-group">
              <label htmlFor="bank-name">Bank Name</label>
              <input type="text" id="bank-name" value="ABC Bank" readOnly />
            </div>

            <div className="fields-group">
              <label htmlFor="account-number">Account Number</label>
              <input
                type="text"
                id="account-number"
                value="123456789011"
                readOnly
              />
            </div>

            {/* Third row with 3 custom columns */}
            <div className="third-row">
              <div className="fields-group">
                <label htmlFor="postcode">Post Code</label>
                <input type="text" id="postcode" value="450193" readOnly />
              </div>

              <div className="fields-group">
                <label htmlFor="city">City</label>
                <input type="text" id="city" value="Selangor" readOnly />
              </div>

              <div className="fields-group">
                <label htmlFor="country">Country</label>
                <input type="text" id="country" value="Malaysia" readOnly />
              </div>
            </div>

            {/* Fourth row (full width) */}
            <div className="fields-group address">
              <label htmlFor="address">Recipient Address</label>
              <input
                type="text"
                id="address"
                value="ABC Avenue, 123 Park, DEF 21/20 Selangor..."
                readOnly
              />
            </div>
          </div>
        </div>
      </div>
      <div className="common-main-section" style={{ marginTop: "20px" }}>
        <p className="primary-title">User Detail</p>
        <div className="userDetails-section" style={{ display: "flex" }}>
          <div className="profile-section">
            <ProfilePic size={180} />
          </div>
          <div className="fields-section">
            <div className="fields-group">
              <label htmlFor="postcode">Post Code</label>
              <input type="text" id="postcode" value="450193" readOnly />
            </div>

            <div className="fields-group">
              <label htmlFor="city">City</label>
              <input type="text" id="city" value="Selangor" readOnly />
            </div>

            <div className="fields-group">
              <label htmlFor="country">Country</label>
              <input type="text" id="country" value="Malaysia" readOnly />
            </div>
          </div>
        </div>

        <div className="actions">
          <p className="primary-title">Approval Convert2Cash</p>
          <div className="form-actions">
            <button type="submit" className="submit-button">
              Approve
            </button>
            <button type="button" className="cancel-button">
              Reject
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CashRewardsDetails;
