import TitleComponent from "../../shared/components/TitleComponent";

const Settings = () => {
  return (
    <>
      <div className="common-main-section" style={{ minHeight: "0px" }}>
        <TitleComponent label="Collector Collection Management" />
        <div
          style={{ display: "flex", marginTop: "20px", marginBottom: "40px" }}
        >
          <div>
            <label>B2B Weight/Kg</label>
            <div
              className=""
              style={{ display: "flex", gap: "20px", marginTop: "5px" }}
            >
              <div
                style={{ display: "flex", gap: "20px", alignItems: "center" }}
              >
                <label
                  style={{ margin: "0px", fontSize: "14px", fontWeight: "500" }}
                >
                  Min.
                </label>
                <input
                  style={{
                    borderRadius: "8px",
                    height: "40px",
                    width: "70%",
                    border: "1px solid #D0D5DD",
                  }}
                />
              </div>
              <div
                style={{ display: "flex", gap: "20px", alignItems: "center" }}
              >
                <label
                  style={{ margin: "0px", fontSize: "14px", fontWeight: "500" }}
                >
                  Max.
                </label>
                <input
                  style={{
                    borderRadius: "8px",
                    height: "40px",
                    width: "70%",
                    border: "1px solid #D0D5DD",
                  }}
                />
              </div>
            </div>
          </div>
          <div>
            <label>B2B Weight/Kg</label>
            <div
              className=""
              style={{ display: "flex", gap: "20px", marginTop: "5px" }}
            >
              <div
                style={{
                  display: "flex",
                  gap: "20px",
                  alignItems: "center",
                }}
              >
                <label
                  style={{ margin: "0px", fontSize: "14px", fontWeight: "500" }}
                >
                  Min.
                </label>
                <input
                  style={{
                    borderRadius: "8px",
                    height: "40px",
                    width: "70%",
                    border: "1px solid #D0D5DD",
                  }}
                />
              </div>
              <div
                style={{ display: "flex", gap: "20px", alignItems: "center" }}
              >
                <label
                  style={{ margin: "0px", fontSize: "14px", fontWeight: "500" }}
                >
                  Max.
                </label>
                <input
                  style={{
                    borderRadius: "8px",
                    height: "40px",
                    width: "70%",
                    border: "1px solid #D0D5DD",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="common-main-section"
        style={{ marginTop: "20px", minHeight: "0px" }}
      >
        <TitleComponent label="Minimum Storage Percentage" />
        <div
          className=""
          style={{
            marginTop: "20px",
            display: "flex",
            flexDirection: "column",
            marginBottom: "20px",
          }}
        >
          <label>Collector Request Pickup%</label>
          <input
            style={{
              borderRadius: "8px",
              height: "40px",
              width: "40%",
              border: "1px solid #D0D5DD",
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Settings;
