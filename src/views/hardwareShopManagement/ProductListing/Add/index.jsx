import { useNavigate } from "react-router-dom";
import { iconBack } from "../../../../assets/images/icons";
import DragAndDropComponent from "../../../../shared/components/DragAndDropComponent";
import { useState } from "react";
import InputField from "../../../../shared/components/InputFieldComponent";
import { useForm } from "react-hook-form";

const AddProductListing = () => {
  const navigate = useNavigate();
  const [image, setImage] = useState(null);

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
  const productCatrgory = ["Used Cooking oil", "Cooking oil", "Paper"];

  return (
    <div className="common-main-section">
      <button className="back-text" onClick={() => navigate(-1)}>
        <img src={iconBack} /> Back
      </button>
      <div className="title-section" style={{ marginTop: "20px" }}>
        <label className="primary-title">Add New Product</label>
      </div>
      <form className="add-waste-form" onSubmit={handleSubmit()}>
        <div className="form-group-image" style={{ marginBottom: "20px" }}>
          <DragAndDropComponent image={image} onDrop={onDrop} />
        </div>
        <div className="form-group">
          <InputField
            label="Product Name"
            placeholder="Type Here"
            type="text"
            register={register}
            errors={errors}
            name="productName"
          />
        </div>
        <div className="form-group">
          <InputField
            label="Product Category"
            placeholder="Select One"
            type="select"
            options={productCatrgory.map((data) => ({
              value: data,
              label: data,
            }))}
            register={register}
            errors={errors}
            name="ProductCategory"
          />
        </div>
        <div className="form-group">
          <InputField
            label="Price"
            placeholder="Type Here"
            type="text"
            register={register}
            errors={errors}
            name="price"
          />
        </div>
        <div className="form-group">
          <InputField
            label="Points Required"
            placeholder="Type Here"
            type="text"
            register={register}
            errors={errors}
            name="pointsRequired"
          />
        </div>
        <div className="form-group">
          <InputField
            label="Product Short Description"
            placeholder="Type Here"
            type="textarea"
            register={register}
            errors={errors}
            name="pointsRequired"
          />
        </div>
        <div className="form-actions">
          <button type="button" className="btn">
            Cancel
          </button>
          <button type="submit" className="btn">
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProductListing;
