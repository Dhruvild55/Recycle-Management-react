/* eslint-disable no-unused-vars */
import { useNavigate, useParams } from "react-router-dom";
import ChipComponent from "../../../../../../shared/components/ChipComponent";
import { useQuery } from "@tanstack/react-query";
import { getRecyclerHistoryData } from "../../../../../../query/users/Recycler/getRecyclerHistoryDataById/getRecyclerHistoryData.query";
import MaterialCardComponent from "./MaterialCardComponent";

const ViewPreviousItems = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const { data, isPending } = useQuery({
    queryKey: ["previousItemsDetails"],
    queryFn: () => getRecyclerHistoryData({ id }),
  });

  const mapSrc = `https://maps.google.com/maps?q=${data?.data?.lattitude},${data?.data?.longitude}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <>
      <div className="common-main-section">
        <div className="header-section">
          <div>
            <button className="back-text" onClick={() => navigate(-1)}>
              &larr; BACK
            </button>
          </div>
        </div>
        <h1
          className="primary-title"
          style={{ marginTop: "30px", marginBottom: "20px" }}
        >
          {data?.data?.id}
        </h1>

        <div className="details-section row">
          <div className="item-detail col-lg-6">
            <p className="row">
              <strong className="heading col">Contact Person : </strong>
              <span className="detail col">{data?.data?.contactPerson}</span>
            </p>
            <p className="row">
              <strong className="heading col">User Mobile :</strong>{" "}
              <span className="detail col">{data?.data?.userMobile}</span>
            </p>
            <p className="row">
              <strong className="heading col">Pickup Time :</strong>{" "}
              <span className="detail col">
                <ul>
                  <li>{data?.data?.pickupDate}</li>
                  <li>{data?.data?.pickupTimeOnly}</li>
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
                  <li>{data?.data?.estPoints} Points</li>
                  <li>
                    <ChipComponent
                      label={
                        data?.data?.itemStatus === "PendingConfirmation"
                          ? "Pending"
                          : "Confirmed"
                      }
                      color={
                        data?.data?.itemStatus === "PendingConfirmation"
                          ? "yellow"
                          : "green"
                      }
                    />
                  </li>
                </ul>
              </span>
            </p>
          </div>
          <div className="item-address col-lg-6">
            <p className="row">
              <span className="heading">Address :</span>
              <br />
              <span className="detail">{data?.data?.address}</span>
            </p>
            <iframe
              title="map"
              src={mapSrc}
              width="90%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
      <div
        className="common-main-section"
        style={{
          marginTop: "20px",
          minHeight: "0px",
          display: "flex",
          gap: "30px",
        }}
      >
        {data?.data?.materials.length > 0 ? (
          data?.data?.materials.map((items, index) => {
            return (
              <MaterialCardComponent
                key={items.materialName}
                items={items}
                index={index}
              />
            );
          })
        ) : (
          <p>Material Data not available</p>
        )}
      </div>
    </>
  );
};

export default ViewPreviousItems;
