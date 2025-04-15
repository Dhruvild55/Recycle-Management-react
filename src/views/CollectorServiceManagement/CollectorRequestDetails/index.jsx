/* eslint-disable no-unused-vars */
import { useNavigate, useParams } from "react-router-dom";
import CommonCardComponent from "../../../shared/components/CommonCardComponent";
import ProfileCardComponent from "../../../shared/components/ProfileCardComponent";
import { iconBack } from "../../../assets/images/icons";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getCollectorRequestDetails } from "../../../query/CollectionServiceManagement/getCollectorRequestDetails/getCollectorRequestDetails.query";
import ChipComponent from "../../../shared/components/ChipComponent";
import { formatDate } from "../../../shared/constants/ValidationRules";
import TitleComponent from "../../../shared/components/TitleComponent";
import { getFilePath } from "../../../query/getfilePath/filePath.query";
import VehicleCardComponent from "../../User/Collecter/Information/VehicleCardComponent";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import { Form } from "react-bootstrap";
import { useEffect, useState } from "react";
import { AddStorage } from "../../../query/CollectionServiceManagement/getCollectorRequestDetails/AddNewStorage/addNewStorage.query";
import { ReactToastify } from "../../../shared/utils";
import { approveCollectorByAdmin } from "../../../query/CollectionServiceManagement/getCollectorRequestDetails/ApproveCollectorByAdmin/approveCollectorByAdmin.query";
import { route } from "../../../shared/constants/AllRoutes";

const CollectionRequestDetails = () => {
  const navigate = useNavigate();
  const params = useParams();
  const { id } = params;
  const [kgData, setKgData] = useState({});
  const [submittedKgIds, setSubmittedKgIds] = useState([]);

  // ! CollectionRequestDetails API
  const { data, isPending: loadingDetails } = useQuery({
    queryKey: ["collectionRequestDetails", id],
    queryFn: () => getCollectorRequestDetails(id),
  });

  // ! Fetch Img Data API
  const addressImgPath = data?.data?.addressImgPath;

  const { data: imgData } = useQuery({
    queryKey: ["getAddressImg", addressImgPath],
    queryFn: () => getFilePath({ image: addressImgPath }),
    enabled: !!addressImgPath,
  });

  // ! Approve Collector API
  const { mutate: approveCollector } = useMutation({
    mutationFn: ({ payload, id }) => approveCollectorByAdmin({ payload, id }),
    onSuccess: (data) => {
      ReactToastify(data?.message, "success");
      navigate(route.collectionServiceManagement.List);
    },
    onError: (error) => {
      const message =
        error?.response?.data?.message ||
        error?.message ||
        "Something went wrong. Please try again.";
      ReactToastify(message, "error");
    },
  });

  // ! Add Storage API
  const { mutate: storageMutation } = useMutation({
    mutationFn: ({ collectorId, materialId, kg }) =>
      AddStorage({ collectorId, materialId, kg }),
    onSuccess: (data) => {
      ReactToastify(data?.message, "success");
    },
    onError: (error) => {
      ReactToastify(error?.message, "error");
    },
  });

  const {
    register,
    handleSubmit,
    control,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      collectorStatus: { status: "approve", remark: "" },
      hubStatus: { status: "approve", remark: "" },
      materialStatuses: [],
    },
  });

  useEffect(() => {
    if (data?.data?.materialTypes) {
      reset({
        collectorStatus: { status: "approve", remark: "" },
        hubStatus: { status: "approve", remark: "" },
        materialStatuses: data?.data?.materialTypes.map((material) => ({
          materialId: material?.materialId,
          status: "approve",
          remark: "",
        })),
      });
    }
  }, [data]);

  const { fields } = useFieldArray({
    control,
    name: "materialStatuses",
  });

  const collectorStatus = watch("collectorStatus.status");
  const hubStatus = watch("hubStatus.status");

  const onSubmit = (formValues) => {
    const payload = [];
    console.log("submitted");

    payload.push({
      approveFor: "Collector",
      materialId: 0,
      isApprove: formValues.collectorStatus.status === "approve",
      remark: formValues.collectorStatus.remark || "",
    });

    payload.push({
      approveFor: "Hub",
      materialId: 0,
      isApprove: formValues.hubStatus.status === "approve",
      remark: formValues.hubStatus.remark || "",
    });

    formValues.materialStatuses.forEach((mat) => {
      payload.push({
        approveFor: "materialType",
        materialId: mat.materialId,
        isApprove: mat.status === "approve",
        remark: mat.remark || "",
      });
    });

    approveCollector({ payload, id });
  };

  const handleKgChange = (materialId, value) => {
    setKgData((prev) => ({ ...prev, [materialId]: value }));
  };
  const handleKgSubmit = (materialId) => {
    const collectorId = data?.data?.userId;
    const kg = kgData[materialId];
    console.log("Send KG to API:", {
      collectorId,
      materialId,
      kg,
    });
    storageMutation({ collectorId, materialId, kg });

    setSubmittedKgIds((prev) => [...prev, materialId]);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="common-main-section">
        <div className="header-section" style={{ marginBottom: "20px" }}>
          <button
            className="back-text"
            type="button"
            onClick={() => navigate(-1)}
          >
            <img src={iconBack} alt="back" /> BACK
          </button>
        </div>
        <TitleComponent label="New Request/ Material Type Add-on Request" />

        <div className="main-section row mt-3">
          <div className="profile-section col-lg-4 col-sm-12">
            <ProfileCardComponent userData={data?.data} isRecycler={false} />
          </div>
          <div className="details-section col-lg-8 col-sm-12">
            <div className="title">
              <p className="primary-title">Collector Information</p>
              {loadingDetails ? (
                "loading...."
              ) : (
                <div className="information row">
                  <div className="left-section col-lg-6 col-sm-12">
                    <div className="row">
                      <strong className="heading col">User ID</strong>
                      <span className="detail col">
                        {data?.data?.userId || "-"}
                      </span>
                    </div>
                    <div className="row">
                      <strong className="heading col">Name</strong>
                      <span className="detail col">
                        {data?.data?.firstName || "-"}{" "}
                        {data?.data?.lastName || "-"}
                      </span>
                    </div>
                    <div className="row">
                      <strong className="heading col">Phone No.</strong>
                      <span className="detail col">
                        {data?.data?.phoneNumber || "-"}
                      </span>
                    </div>
                    <div className="row">
                      <strong className="heading col">State</strong>
                      <span className="detail col">
                        {data?.data?.state || "-"}
                      </span>
                    </div>
                    <div className="row">
                      <strong className="heading col">Request Date</strong>
                      <span className="detail col">
                        {formatDate(data?.data?.requestDate) || "Not Available"}
                      </span>
                    </div>
                    <div className="row">
                      <strong className="heading col">Request Material</strong>
                      <span className="detail col">
                        <ul>
                          {data?.data?.requestMateril?.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      </span>
                    </div>
                    <div className="row">
                      <strong className="heading col">Status</strong>
                      <span className="status-pending detail col">
                        <ChipComponent
                          label={data?.data?.status ? "Approved" : "Pending"}
                          color={data?.data?.status ? "green" : "yellow"}
                        />
                      </span>
                    </div>
                  </div>
                  <div className="right-section col-lg-6 col-sm-12">
                    <div className="address-section">
                      <img
                        src={imgData || "/images/addressimg-2.png"}
                        className="image-section"
                        alt="address"
                      />
                      <div className="address-details">
                        <p>Collector Address</p>
                        <span>{data?.data?.collectionHub || " - "}</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Vehicle Section */}
      <div
        className="common-main-section"
        style={{ marginTop: "20px", minHeight: "0px" }}
      >
        <p className="primary-title">Vehicle Detail</p>

        {data?.data?.vehicles?.length > 0 ? (
          <>
            <div className="compound-images-section">
              {data.data.vehicles.map((vehicle, index) => (
                <VehicleCardComponent
                  key={index}
                  brand={vehicle?.brand}
                  model={vehicle?.model}
                  color={vehicle?.color}
                  registrationNo={vehicle?.registrationNo}
                  vehicleImgPath={vehicle?.vehicleImgPath}
                  type={vehicle?.type}
                />
              ))}
            </div>

            <div className="checkbox-group mt-3 border-top pt-3 d-flex align-items-center">
              <Controller
                name="collectorStatus.status"
                control={control}
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
              {collectorStatus === "reject" && (
                <input
                  {...register("collectorStatus.remark", { required: true })}
                  placeholder="Enter remark"
                  className="form-control ms-3"
                  style={{ width: "30%" }}
                />
              )}
            </div>
          </>
        ) : (
          <p style={{ padding: "10px", color: "#888" }}>
            No vehicle data available.
          </p>
        )}
      </div>

      {/* Collection Hub Section */}
      <div className="common-main-section" style={{ marginTop: "20px" }}>
        <p className="primary-title">Collection Hub</p>
        {data?.data?.collectionHub?.length === 0 ? (
          <p>No Data Available</p>
        ) : (
          <>
            <div className="compound-images-section">
              <CommonCardComponent
                image={data?.data?.collectionHub?.[0]?.addressImg}
                description={data?.data?.collectionHub?.[0]?.address}
              />
            </div>
            <div className="checkbox-group mt-3 border-top pt-3 d-flex align-items-center">
              <Controller
                name="hubStatus.status"
                control={control}
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
              {hubStatus === "reject" && (
                <input
                  {...register("hubStatus.remark", { required: true })}
                  placeholder="Enter remark"
                  className="form-control ms-3"
                  style={{ width: "30%" }}
                />
              )}
            </div>
          </>
        )}
      </div>

      {/* Material Types Section */}
      {fields.map((field, index) => {
        const material = data.data.materialTypes.find(
          (m) => m.materialId === field.materialId
        );
        const statusPath = `materialStatuses.${index}.status`;
        const remarkPath = `materialStatuses.${index}.remark`;
        const materialStatus = watch(statusPath);
        const isKgSubmitted = submittedKgIds.includes(field.materialId);

        return (
          <div
            className="common-main-section"
            key={field.id}
            style={{ marginTop: "20px" }}
          >
            <p className="primary-title">{material?.materialName}</p>
            <div className="compound-images-section">
              <CommonCardComponent
                image={material?.materialImg}
                description={material?.description}
              />
            </div>

            <div className="d-flex gap-2 align-items-center mt-2">
              <label>Storage</label>
              <input
                type="number"
                value={kgData[field.materialId] || ""}
                onChange={(e) =>
                  handleKgChange(field.materialId, e.target.value)
                }
              />
              <span>Kg</span>
              <button
                type="button"
                onClick={() => handleKgSubmit(field.materialId)}
                className="btn btn-sm btn-outline-success"
              >
                Send
              </button>
            </div>

            {isKgSubmitted && (
              <div className="checkbox-group mt-3 border-top pt-3 d-flex align-items-center">
                <Controller
                  name={statusPath}
                  control={control}
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
                {materialStatus === "reject" && (
                  <input
                    {...register(remarkPath, { required: true })}
                    placeholder="Enter remark"
                    className="form-control ms-3"
                    style={{ width: "30%" }}
                  />
                )}
              </div>
            )}
          </div>
        );
      })}

      {/* Final Action */}
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
    </form>
  );
};

export default CollectionRequestDetails;
