const CatelogueComponent = ({ reward }) => {
  return (
    <div className="catelogues-list row">
      <div className="col-lg-2" style={{ width: "12.666667%" }}>
        <img src="/images/image.png" alt="Reward" />
      </div>
      <div className="catelogues-details col-lg-10">
        <div className="row">
          <div className="Catelogues-title col-lg-4">
            <p>McDonald’s 1500 Points </p>
            <p>Claim Rewards!</p>
          </div>
          <div className="col-lg-2">
            <p className="hedding">Quantity</p>
            <p className="body">1</p>
          </div>
          <div className="col-lg-2">
            <p className="hedding">Validity</p>
            <p className="body">6 Months</p>
          </div>
          <div className="col-lg-2">
            <p
              style={{
                fontSize: "12px",
                fontWeight: "400",
                marginBottom: "0px",
              }}
            >
              Point Spend
            </p>
            <p
              style={{
                fontSize: "14px",
                fontWeight: "600",
                marginBottom: "0px",
              }}
            >
              1500 points
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatelogueComponent;
