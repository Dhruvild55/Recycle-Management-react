import ChipComponent from "../../../../../../shared/components/ChipComponent";

const ViewPreviousItems = () => {
  return (
    <div className="common-main-section">
      <div className="header-section">
        <div>
          <button className="back-text">&larr; BACK</button>
        </div>
      </div>
      <h1
        className="primary-title"
        style={{ marginTop: "30px", marginBottom: "20px" }}
      >
        DEL-12345
      </h1>
      <div className="details-section row">
        <div className="item-detail col-lg-6">
          <p className="row">
            <strong className="heading col">Contact Person : </strong>
            <span className="detail col">Jasmine Lee</span>
          </p>
          <p className="row">
            <strong className="heading col">User Mobile :</strong>{" "}
            <span className="detail col">(+60) 123 456 789</span>
          </p>
          <p className="row">
            <strong className="heading col">Pickup Time :</strong>{" "}
            <span className="detail col">
              <ul>
                <li>7 August 2024 (Wed)</li>
                <li> 06:00 to 09:00</li>
                <li>
                  <ChipComponent label="On Schedule" color="green" />
                </li>
              </ul>
            </span>
          </p>
          <p className="row">
            <strong className="heading col">Est. Points : </strong>{" "}
            <span className="detail col">
              <ul>
                <li>178 Points</li>
                <li>
                  <ChipComponent label="Pending" color="yellow" />
                </li>
              </ul>
            </span>
          </p>
        </div>
        <div className="item-address col-lg-6">
          <p className="row">
            <span className="heading">Address :</span>
            <br />
            <span className="detail">
              No.10, Jalan PJU 8/12D, Tropicana Indah Resort Homes, 47410
              Petaling Jaya, Selangor.
            </span>
          </p>
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.239808394953!2d101.615!3d3.152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc49f2f0f9f777%3A0x2b5a1ea2c8238a5d!2sJalan%20PJU%208%2F12D%2C%20Tropicana%20Indah%20Resort%20Homes%2C%2047410%20Petaling%20Jaya%2C%20Selangor%2C%20Malaysia!5e0!3m2!1sen!2smy!4v1615215466576!5m2!1sen!2smy"
            width="90%"
            height="200"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ViewPreviousItems;
