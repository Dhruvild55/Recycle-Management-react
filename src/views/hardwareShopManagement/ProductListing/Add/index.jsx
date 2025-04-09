import { useNavigate } from "react-router-dom";
import { iconBack } from "../../../../assets/images/icons";
import DragAndDropComponent from "../../../../shared/components/DragAndDropComponent";
import { useState } from "react";
import InputField from "../../../../shared/components/InputFieldComponent";
import { useForm } from "react-hook-form";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getMaterialAndServices } from "../../../../query/AppContentManagement/MaterialAndServices/getMaterialAndServices/getMaterialAndServices.query";
import { createAndUpdateProduct } from "../../../../query/HardwareShopManagement/createAndUpdateProduct/CreateAndUpdateproduct.query";
import { ReactToastify } from "../../../../shared/utils";

const AddProductListing = () => {
  const navigate = useNavigate();
  const [image, setImage] = useState(null);

  // ! get category list
  const { data } = useQuery({
    queryKey: ["materialAndService"],
    queryFn: () => getMaterialAndServices(),
  });

  // ! create Product
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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    setImage(
      Object.assign(file, {
        preview: URL.createObjectURL(file),
      })
    );
  };

  const onsubmit = (data) => {
    console.log("formData", data);
    const formData = new FormData();
    formData.append("Image", image);
    formData.append("ProductName", data.productName);
    formData.append("ProductType", data.ProductCategory);
    formData.append("PriceInFiat", data.price);
    formData.append("PriceInPoints", data.pointsRequired);
    formData.append("Status", true);
    formData.append("Stock", data.stock);
    formData.append("Description", data.description);
    for (let [key, value] of formData.entries()) {
      console.log(`${key}:`, value);
    }
    mutate(formData);
  };

  return (
    <div className="common-main-section">
      <button className="back-text" onClick={() => navigate(-1)}>
        <img src={iconBack} /> Back
      </button>
      <div className="title-section" style={{ marginTop: "20px" }}>
        <label className="primary-title">Add New Product</label>
      </div>
      <form className="add-waste-form" onSubmit={handleSubmit(onsubmit)}>
        <div className="form-group-image" style={{ marginBottom: "20px" }}>
          <DragAndDropComponent image={image} onDrop={onDrop} />
        </div>
        <div className="form-group">
          <InputField
            label="Product Name"
            placeholder="Type Here"
            type="text"
            register={register}
            name="productName"
            isRequeirdLabel={true}
            validation={{ required: "Product Name is required" }}
            errors={errors}
          />
        </div>
        <div className="form-group">
          <InputField
            label="Product Category"
            placeholder="Select One"
            type="select"
            options={[
              { value: "", label: "Select One" }, // 👈 Add this as the default option
              ...(data?.data?.map((item) => ({
                value: item?.materialTypeId,
                label: item?.materialName,
              })) || []),
            ]}
            register={register}
            errors={errors}
            isRequeirdLabel={true}
            name="ProductCategory"
          />
        </div>
        <div className="form-group">
          <InputField
            label="Price"
            placeholder="Type Here"
            type="number"
            step="0.01"
            register={register}
            errors={errors}
            name="price"
            validation={{ required: "Price is required" }}
            isRequeirdLabel={true}
          />
        </div>
        <div className="form-group">
          <InputField
            label="Points Required"
            placeholder="Type Here"
            type="number" // 👈 Allows numeric input
            register={register}
            errors={errors}
            name="pointsRequired"
            isRequeirdLabel={true}
            validation={{ required: "Points are required" }}
          />
        </div>
        <div className="form-group">
          <InputField
            label="Stock"
            placeholder="Type Here"
            type="text"
            register={register}
            errors={errors}
            name="stock"
            isRequeirdLabel={true}
            validation={{ required: "Stock are required" }}
          />
        </div>
        <div className="form-group">
          <InputField
            label="Product Short Description"
            placeholder="Type Here"
            type="textarea"
            register={register}
            errors={errors}
            name="description"
            isRequeirdLabel={true}
            validation={{ required: "description are required" }}
          />
        </div>
        <div className="form-actions">
          <button type="button" className="btn">
            Cancel
          </button>
          <button type="submit" className="btn">
            {createProduct ? "Adding..." : "Add"}
          </button>
        </div>
      </form>
    </div>
  );
};
8;

export default AddProductListing;
