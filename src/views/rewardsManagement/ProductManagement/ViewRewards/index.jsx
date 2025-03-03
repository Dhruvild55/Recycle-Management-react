import { useNavigate } from "react-router-dom";
import ProfilePic from "../../../../shared/components/ProfilePic";

const ViewRewards = () => {
  const navigate = useNavigate();
  return (
    <div className="common-main-section">
      <div className="header-section">
        <button className="back-text" onClick={() => navigate(-1)}>
          &larr; BACK
        </button>
      </div>
      <div className="form-container-rewards">
        <div className="image-section" style={{ paddingTop: "20px" }}>
          <ProfilePic size={210} />
        </div>
        <div className="fields-section">
          <div className="fields-group">
            <label>Reward Name</label>
            <input type="text" value="5% Subway Discount" readOnly />
          </div>
          <div className="fields-group">
            <label>Validity (days)</label>
            <input type="text" value="10 days" readOnly />
          </div>
          <div className="fields-group">
            <label>Reward Points</label>
            <input type="text" value="100 pts" readOnly />
          </div>
          <div className="fields-group">
            <label>Reward Category</label>
            <select disabled>
              <option>Food & Beverage</option>
            </select>
          </div>
          <div className="fields-group full-width">
            <label>Reward Short Description</label>
            <textarea readOnly>
              Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue.
              Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.
              Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper
              libero
            </textarea>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewRewards;
