import BarChartComponent from "../../../../../shared/components/BarChartComponent";
import ProfileCardComponent from "../../../../../shared/components/ProfileCardComponent";

const RecyclerInformation = () => {
  return (
    <div className="profile-body">
      <div>
        <ProfileCardComponent />
      </div>
      <div className="recyclers-info-section">
        <div>
          <label className="primary-title">Recycler Information</label>
        </div>
        <div className="recycler-details">
          <div className="recycle-info-details">
            <BarChartComponent isDashboard={false} />
            <div className="recyclers-info-sub-section"></div>
          </div>
          <div className="pointes-container">
            <div className="pointes-sec">
              <div className="top-section">
                <p>Fat Pointes</p>
              </div>
              <div className="middle-section">
                <img src="/images/points-badge.png" />
                <h1 className="points-text">18,000</h1>
              </div>
              <div className="bottom-section">
                <p>Last updated 24 Dec, 15:05</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecyclerInformation;
/* Content */

/* Auto layout */
// display: flex;
// flex-direction: column;
// align-items: flex-start;
// padding: 0px 20px;
// gap: 46px;

// width: 328px;
// height: 367px;

// background: url(PresentLeaves.png), url(image.png);
// border-radius: 10px;

// /* Inside auto layout */
// flex: none;
// order: 0;
// align-self: stretch;
// flex-grow: 0;
