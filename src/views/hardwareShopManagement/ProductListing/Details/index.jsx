/* eslint-disable no-unused-vars */
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";

import { iconBack } from "../../../../assets/images/icons";
import ProfilePic from "../../../../shared/components/ProfilePic";
import InputField from "../../../../shared/components/InputFieldComponent";
import { getProductDetails } from "../../../../query/HardwareShopManagement/getProductDetailsById/getProductDetailsById.query";
import { createAndUpdateProduct } from "../../../../query/HardwareShopManagement/createAndUpdateProduct/CreateAndUpdateproduct.query";
import { ReactToastify } from "../../../../shared/utils";

const ProductDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();
  const initialEditMode = location.state?.isEditMode ?? false;
  const [isEditMode, setIsEditMode] = useState(initialEditMode);
  const { id } = params;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      stockChange: 1, // ← default selected option
    },
  });

  const { data, isLoading } = useQuery({
    queryKey: ["productDetails", id],
    queryFn: () => getProductDetails(id),
  });

  const { mutate, isPending: createProduct } = useMutation({
    mutationFn: createAndUpdateProduct,
    onSuccess: (data) => {
      ReactToastify(data?.message, "success");
      navigate(-1);
    },
    onError: (error) => {
      ReactToastify(error?.message, "error");
    },
  });

  const optionsData = [
    { value: 1, label: "Add Stock" },
    { value: 0, label: "Deduct Stock" },
  ];

  useEffect(() => {
    if (data) {
      reset({
        productName: data?.data?.productName || "",
        productId: data?.data?.id || "",
        price: data?.data?.priceInFiat?.toString() || "",
        points: data?.data?.priceInPoints?.toString() || "",
        currentStock: data?.data?.currentStock?.toString() || "",
        stockChange: 1,
        description: data?.data?.description || "",
        productType: data?.data?.productType || "",
        status: data?.data?.status || "",
      });
    }
  }, [data, reset]);

  const onSubmit = (formData) => {
    const data = new FormData();
    data.append("Id", formData.productId);
    data.append("ProductName", formData.productName);
    data.append("ProductType", formData.productType);
    data.append("PriceInFiat", formData.price);
    data.append("PriceInPoints", formData.points);
    data.append("ActivityStatus", formData.stockChange);
    data.append("Stock", formData.stock);
    data.append("Status", true);
    data.append("Description", formData.description);
    mutate(data);
  };

  if (isLoading) return <p>Loading...</p>;

  return (
    <>
      <div className="common-main-section">
        <button className="back-text" onClick={() => navigate(-1)}>
          <img src={iconBack} alt="Back" /> Back
        </button>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <div className="col-lg-3" style={{ marginTop: "50px" }}>
              <ProfilePic image={data?.data?.images} size={200} />
            </div>

            <div className="col-lg-9">
              <div className="row">
                <div className="col-lg-6">
                  <InputField
                    label="Product Name"
                    type="text"
                    name="productName"
                    register={register}
                    errors={errors}
                    readOnly={!isEditMode}
                  />
                </div>
                <div className="col-lg-6">
                  <InputField
                    label="Product ID"
                    type="text"
                    name="productId"
                    register={register}
                    errors={errors}
                    readOnly
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-lg-6">
                  <InputField
                    label="Price"
                    type="text"
                    name="price"
                    register={register}
                    errors={errors}
                    readOnly={!isEditMode}
                  />
                </div>
                <div className="col-lg-6">
                  <InputField
                    label="Points Required"
                    type="text"
                    name="points"
                    register={register}
                    errors={errors}
                    readOnly={!isEditMode}
                  />
                </div>
              </div>

              <div className="col-lg-12 mb-3">
                <InputField
                  label="Current Stock"
                  type="number"
                  name="currentStock"
                  register={register}
                  errors={errors}
                  readOnly={isEditMode}
                />
              </div>
              {isEditMode && (
                <>
                  <div className="col-lg-12 ">
                    <InputField
                      label="Add/Deduct Stock"
                      type="select"
                      name="stockChange"
                      register={register}
                      options={optionsData.map((data) => ({
                        value: data.value,
                        label: data.label,
                      }))}
                      errors={errors}
                      readOnly={!isEditMode}
                    />
                  </div>
                  <div className="col-lg-12 mb-2">
                    <InputField
                      label=""
                      type="number"
                      name="stock"
                      register={register}
                      errors={errors}
                      readOnly={!isEditMode}
                    />
                  </div>
                </>
              )}

              <div className="col-lg-12 mt-3">
                <InputField
                  label="Product Short Description"
                  type="textarea"
                  name="description"
                  register={register}
                  errors={errors}
                  rows={5}
                  readOnly={!isEditMode}
                />
              </div>

              {/* <div className="col-lg-12 mt-3">
              {isEditMode ? (
                <>
                  <button type="submit" className="btn btn-success me-2">
                    Save
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => setIsEditMode(false)}
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => setIsEditMode(true)}
                >
                  Edit
                </button>
              )}
            </div> */}
            </div>
          </div>
        </form>
      </div>
      {isEditMode ? (
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
              Save
            </button>
            <button type="button" className="cancel-button">
              Cancle
            </button>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default ProductDetails;
