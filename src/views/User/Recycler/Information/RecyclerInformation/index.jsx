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
          <h2>Recycler Information</h2>
        </div>
        <div className="recycle-info-details">
          <BarChartComponent xPos={310} yPos={200} />
          {/* <div className="recyclers-info-sub-section">
            <div className="points-section">
              <div>
                <img src="/images/points-prize.png" />
              </div>
              <div>
                <h2>asdf</h2>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default RecyclerInformation;
