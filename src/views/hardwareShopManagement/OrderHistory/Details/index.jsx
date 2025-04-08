import { useNavigate, useParams } from "react-router-dom";
import { iconBack } from "../../../../assets/images/icons";
import TitleComponent from "../../../../shared/components/TitleComponent";
import ProfilePic from "../../../../shared/components/ProfilePic";
import InputField from "../../../../shared/components/InputFieldComponent";
import { useForm } from "react-hook-form";
import { route } from "../../../../shared/constants/AllRoutes";

const OrderHistoryDetails = () => {
  const params = useParams();
  const navigate = useNavigate();
  const { id } = params;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  return (
    <div className="common-main-section">
      <button
        className="back-text"
        onClick={() => navigate(route.hardwareShopManagement.OrderHistory.List)}
      >
        <img src={iconBack} />
        {"      "}
        BACK
      </button>
      <div style={{ marginTop: "10px" }}>
        <TitleComponent label={`Order ID ${id}`} />
      </div>
      <form>
        <div className="row">
          <div className="col-lg-3">
            <ProfilePic size={180} />
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
                label="Current Stock"
                type="text"
                name="stock"
                register={register}
                errors={errors}
                readOnly={true}
              />
            </div>
          </div>
        </div>
        <div>
          <label>Purchased Item</label>
          <div className="row mt-3">
            <div className="col-lg-3 ">
              <ProfilePic size={180} />
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
                    readOnly={true}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default OrderHistoryDetails;
