import { useNavigate, useParams } from "react-router-dom";
import { iconBack } from "../../../../assets/images/icons";
import ProfilePic from "../../../../shared/components/ProfilePic";
import InputField from "../../../../shared/components/InputFieldComponent";
import { useForm } from "react-hook-form";
import { route } from "../../../../shared/constants/AllRoutes";
import { useMutation, useQuery } from "@tanstack/react-query";
import { orderHistoryDetails } from "../../../../query/HardwareShopManagement/getOrderHistoryDetails/getOrderHistoryDetails.query";
import { useEffect } from "react";
import { updateOrderHistoryDetails } from "../../../../query/HardwareShopManagement/EditOrderHistoryDetails/editOrderHistoryDetail.query";
import { ReactToastify } from "../../../../shared/utils";

const OrderHistoryDetails = () => {
  const params = useParams();
  const navigate = useNavigate();
  const { id } = params;

  const { data } = useQuery({
    queryKey: ["getOrderHistoryDetails"],
    queryFn: () => orderHistoryDetails(id),
  });

  const { mutate, isPending } = useMutation({
    mutationFn: ({ id, formData }) => updateOrderHistoryDetails(id, formData),
    onSuccess: (data) => {
      console.log("sucess", data);
      ReactToastify(data?.mesasage, "success");
      navigate(-1);
    },
    onError: (errors) => {
      ReactToastify(errors?.mesasage, "error");
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      orderStatus: 1,
    },
  });
  const options = [
    { value: 0, label: "Ready To shipe" },
    { value: 1, label: "Completed" },
    { value: 2, label: "Cancelled" },
  ];

  const statusMap = {
    "Ready To shipe": 0,
    Completed: 1,
    Cancelled: 2,
  };
  useEffect(() => {
    if (data) {
      reset({
        userId: data.data.customerId || "",
        email: data.data.email || "",
        name: data.data.customerName || "",
        phoneNo: data.data.phone || "",
        address: data.data.address,
        productName: data.data.productName || "",
        OrderId: data.data.orderId || "",
        quantity: data.data.quantity || "",
        "date&time": new Date(data.data.dateTime).toLocaleString() || "",
        orderStatus: statusMap[data.data.orderStatus] ?? 0,
      });
    }
  }, [data, reset]);

  const onSubmit = (data) => {
    console.log(data);
    const formData = new FormData();
    formData.append("orderStatus", data.orderStatus);
    mutate({ id, formData });
  };

  return (
    <>
      <div className="common-main-section">
        <button
          className="back-text"
          onClick={() =>
            navigate(route.hardwareShopManagement.OrderHistory.List)
          }
        >
          <img src={iconBack} />
          {"      "}
          BACK
        </button>
        <div style={{ marginTop: "10px" }}>
          <label
            style={{ fontSize: "24px", fontWeight: "600" }}
          >{`Order ID ${id}`}</label>
        </div>
        <form>
          <div className="row mt-3 align-items-center">
            <div className="col-lg-3">
              <ProfilePic size={180} image={data?.data?.customerImg} />
            </div>
            <div className="col-lg-9">
              <div className="row">
                <div className="col-lg-6">
                  <InputField
                    label="User Id"
                    type="text"
                    name="userId"
                    readOnly={true}
                    register={register}
                    errors={errors}
                  />
                </div>
                <div className="col-lg-6">
                  <InputField
                    label="Email address"
                    type="text"
                    name="email"
                    readOnly={true}
                    register={register}
                    errors={errors}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <InputField
                    label="Name"
                    type="text"
                    name="name"
                    readOnly={true}
                    register={register}
                    errors={errors}
                  />
                </div>
                <div className="col-lg-6">
                  <InputField
                    label="Phone No."
                    type="text"
                    name="phoneNo"
                    readOnly={true}
                    register={register}
                    errors={errors}
                  />
                </div>
              </div>
              <div className="col-lg-12 mb-3">
                <InputField
                  label="Address"
                  type="text"
                  name="address"
                  register={register}
                  errors={errors}
                  readOnly={true}
                />
              </div>
            </div>
          </div>
          <div>
            <label style={{ fontSize: "18px", fontWeight: "600" }}>
              Purchased Item
            </label>
            <div className="row mt-3 align-items-center">
              <div className="col-lg-3 ">
                <ProfilePic size={180} image={data?.data?.productImage} />
              </div>
              <div className="col-lg-9">
                <div className="row">
                  <div className="col-lg-6">
                    <InputField
                      label="Product Name"
                      type="text"
                      name="productName"
                      readOnly={true}
                      register={register}
                      errors={errors}
                    />
                  </div>
                  <div className="col-lg-6">
                    <InputField
                      label="Order Id"
                      type="text"
                      name="OrderId"
                      readOnly={true}
                      register={register}
                      errors={errors}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6">
                    <InputField
                      label="Quantity"
                      type="text"
                      name="quantity"
                      readOnly={true}
                      register={register}
                      errors={errors}
                    />
                  </div>
                  <div className="col-lg-6">
                    <InputField
                      label="Order Date & Time"
                      type="text"
                      name="date&time"
                      readOnly={true}
                      register={register}
                      errors={errors}
                    />
                  </div>
                  <div className="col-lg-12 mb-3">
                    <InputField
                      label="Order Status"
                      type="select"
                      name="orderStatus"
                      register={register}
                      errors={errors}
                      readOnly={false}
                      options={options.map((data) => ({
                        value: data.value,
                        label: data.label,
                      }))}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div
        className="common-main-section"
        style={{ marginTop: "20px", minHeight: "0px" }}
      >
        <span style={{ fontSize: "16px", fontWeight: "600" }}>
          Save Changes
        </span>
        <div className="form-actions" style={{ marginTop: "20px" }}>
          <button
            type="button"
            className="submit-button"
            onClick={handleSubmit(onSubmit)} // ← manually call form submit
          >
            {isPending ? "Savaing..." : "Save"}
          </button>
          <button
            type="button"
            className="cancel-button"
            onClick={() => navigate(-1)}
          >
            Cancle
          </button>
        </div>
      </div>
    </>
  );
};

export default OrderHistoryDetails;
