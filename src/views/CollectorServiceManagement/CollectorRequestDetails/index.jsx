import { useNavigate, useParams } from "react-router-dom";
import CommonCardComponent from "../../../shared/components/CommonCardComponent";
import ProfileCardComponent from "../../../shared/components/ProfileCardComponent";
import { iconBack } from "../../../assets/images/icons";
import { useQuery } from "@tanstack/react-query";
import { getCollectorRequestDetails } from "../../../query/CollectionServiceManagement/getCollectorRequestDetails/getCollectorRequestDetails.query";
import ChipComponent from "../../../shared/components/ChipComponent";
import { formatDate } from "../../../shared/constants/ValidationRules";
import TitleComponent from "../../../shared/components/TitleComponent";
import { getFilePath } from "../../../query/getfilePath/filePath.query";
import VehicleCardComponent from "../../User/Collecter/Information/VehicleCardComponent";
import { Controller, useForm, useWatch } from "react-hook-form";
import { Form } from "react-bootstrap";

const CollectionRequestDetails = () => {
  const navigate = useNavigate();
  const params = useParams();

  const { id } = params;
  const { data } = useQuery({
    queryKey: ["collectionRequestDetails", id],
    queryFn: () => getCollectorRequestDetails(id),
  });

  const { data: imgData } = useQuery({
    queryKey: ["getAddressImg", data?.data?.addressImgPath],
    queryFn: () => getFilePath({ image: data?.data?.addressImgPath }),
    enabled: !!data?.data?.addressImgPath,
  });

  const {
    register,
    handleSubmit,
    control,
    setValue,
    watch,
    formState: { errors },
  } = useForm();

  const statusValue = watch("status", "approve");
  console.log(statusValue, "statusValue");
  return (
    <>
      <div className="common-main-section">
        <div className="header-section" style={{ marginBottom: "20px" }}>
          <div>
            <button className="back-text" onClick={() => navigate(-1)}>
              <img src={iconBack} /> {"    "}
              BACK
            </button>
          </div>
        </div>
        <TitleComponent label="New Request/ Material Type Add-on Request" />
        <div className="main-section row mt-3">
          <div className="profile-section col-lg-4 col-sm-12">
            <ProfileCardComponent userData={data?.data} isRecycler={false} />
          </div>
          <div className="details-section col-lg-8 col-sm-12">
            <div className="title">
              <p className="primary-title">Collector Information</p>
              <div className="information row">
                <div className="left-section col-lg-6 col-sm-12">
                  <div className="row">
                    <strong className="heading col">User ID</strong>{" "}
                    <span className="detail col">{data?.data?.userId}</span>
                  </div>
                  <div className="row">
                    <strong className="heading col">Name</strong>{" "}
                    <span className="detail col">
                      {data?.data?.firstName} {"   "}
                      {data?.data?.lastName}
                    </span>
                  </div>
                  <div className="row">
                    <strong className="heading col">Phone No.</strong>{" "}
                    <span className="detail col">
                      {data?.data?.phoneNumber}
                    </span>
                  </div>
                  <div className="row">
                    <strong className="heading col">State</strong>{" "}
                    <span className="detail col">{data?.data?.state}</span>
                  </div>
                  <div className="row">
                    <strong className="heading col">Request Date</strong>{" "}
                    <span className="detail col">
                      {formatDate(data?.data?.requestDate)}
                    </span>{" "}
                  </div>
                  <div className="row">
                    <strong className="heading col">Request Material</strong>{" "}
                    <span className="detail col">
                      {" "}
                      <ul>
                        {data?.data?.requestMateril?.map((item, index) => {
                          return <li key={index}>{item}</li>;
                        })}
                      </ul>
                    </span>
                  </div>
                  <div className="row">
                    <strong className="heading col">Status</strong>{" "}
                    <span className="status-pending detail col">
                      {
                        <ChipComponent
                          label={data?.data?.status ? "" : "Pending"}
                          color={data?.data?.status ? "red" : "yellow"}
                        />
                      }
                    </span>
                  </div>
                </div>
                <div className=" right-section col-lg-6 col-sm-12">
                  <div className="address-section">
                    <img
                      src={imgData || "/images/addressimg-2.png"}
                      className="image-section"
                    />
                    <div className="address-details">
                      <p>Collector Address</p>
                      <span>
                        15-10/1 Jalan Sentosa 39/2, Subang Jaya 403450 Selangor,
                        Malaysia
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="common-main-section" style={{ marginTop: "20px" }}>
        <p className="primary-title">Vehicle Detail</p>
        <div className="compound-images-section">
          {data?.data?.vehicles?.map((vehicle, index) => (
            <VehicleCardComponent
              key={index}
              brand={vehicle?.brand}
              model={vehicle.model}
              color={vehicle.color}
              registrationNo={vehicle.registrationNo}
              vehicleImgPath={vehicle.vehicleImgPath}
              type={vehicle.type}
            />
          ))}
        </div>
        <div>
          <div className="checkbox-group mt-2 mb-4 border-top pt-4 d-flex align-items-center">
            <Controller
              name="status"
              control={control}
              defaultValue="approve"
              render={({ field }) => (
                <>
                  <Form.Check
                    type="radio"
                    label="Approve"
                    value="approve"
                    checked={field.value === "approve"}
                    onChange={() => field.onChange("approve")}
                    className="square-radio"
                  />
                  <Form.Check
                    type="radio"
                    label="Reject"
                    value="reject"
                    checked={field.value === "reject"}
                    onChange={() => field.onChange("reject")}
                    className="square-radio"
                  />
                </>
              )}
            />
            {statusValue === "reject" && (
              <input
                style={{
                  borderRadius: "8px",
                  width: "30%",
                  height: "40px",
                  border: "1px solid #D4D4D4",
                }}
              />
            )}
          </div>
        </div>
      </div>
      <div className="common-main-section" style={{ marginTop: "20px" }}>
        <p className="primary-title">Plastic Waste Place</p>
        <div className="compound-images-section">
          <CommonCardComponent
            image="/images/addressimg-2.png"
            description="Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies."
          />
          <CommonCardComponent
            image="/images/addressimg-2.png"
            description="Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies."
          />
          <CommonCardComponent
            image="/images/addressimg-2.png"
            description="Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies."
          />
        </div>
      </div>
      <div className="common-main-section" style={{ marginTop: "20px" }}>
        <p className="primary-title">Oil Waste Place</p>
        <div className="compound-images-section">
          <CommonCardComponent
            image="/images/addressimg-2.png"
            description="Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies."
          />
          <CommonCardComponent
            image="/images/addressimg-2.png"
            description="Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies."
          />
          <CommonCardComponent
            image="/images/addressimg-2.png"
            description="Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies."
          />
        </div>
      </div>
      <div
        className="common-main-section"
        style={{ marginTop: "20px", minHeight: "calc(100vh - 518px)" }}
      >
        <p className="primary-title">Approval Collector / Material</p>
        <div className="form-actions">
          <button type="submit" className="submit-button">
            Approve
          </button>
          <button type="button" className="cancel-button">
            Reject
          </button>
        </div>
      </div>
    </>
  );
};

export default CollectionRequestDetails;
