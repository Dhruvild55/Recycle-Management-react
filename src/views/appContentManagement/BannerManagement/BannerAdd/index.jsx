import { useNavigate } from "react-router-dom";
import DragAndDropComponent from "../../../../shared/components/DragAndDropComponent";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { Form } from "react-bootstrap";
import { iconBack } from "../../../../assets/images/icons";
import { useMutation } from "@tanstack/react-query";
import { CreateBanner } from "../../../../query/AppContentManagement/BannerManagement/CreateBanner/createBanner.query";
import { ReactToastify } from "../../../../shared/utils";
import { useSelector } from "react-redux";

const BannerAdd = () => {
  const navigate = useNavigate();
  const translations = useSelector((state) => state.settings.translations);
  const {
    addNewBanner,
    sortingPriority,
    bannerDescription,
    title,
    publish,
    unPublish,
    add,
    cancle,
    typehere,
  } = translations;

  const [image, setImage] = useState(null);

  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm();

  const { mutate, isPending } = useMutation({
    mutationFn: CreateBanner,
    onSuccess: (data) => {
      ReactToastify(data?.message, "success");
      navigate(-1);
    },
    onError: () => {
      ReactToastify("Something went wrong", "error");
    },
  });

  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    const fileWithPreview = Object.assign(file, {
      preview: URL.createObjectURL(file),
    });
    setImage(fileWithPreview);
    setValue("image", fileWithPreview);
  };

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("Image", image);
    formData.append("Title", data.title);
    formData.append("SortingPriority", data.priority);
    formData.append("Description", data.description);
    formData.append("Status", data.status);
    mutate(formData);
  };

  return (
    <div className="common-main-section">
      <div className="main-section">
        <button
          className="back-text"
          onClick={() => navigate(-1)}
          style={{ marginBottom: "20px" }}
        >
          <img src={iconBack} alt="Back" /> Back
        </button>

        <div className="title-section">
          <label className="primary-title">{addNewBanner}</label>
        </div>

        <form className="add-waste-form" onSubmit={handleSubmit(onSubmit)}>
          {/* Image Upload */}
          <div className="form-group-image" style={{ marginBottom: "20px" }}>
            <Controller
              name="image"
              control={control}
              render={() => (
                <DragAndDropComponent image={image} onDrop={onDrop} />
              )}
            />
            {errors.image && (
              <p className="error-text">{errors.image.message}</p>
            )}
          </div>

          {/* Title Input */}
          <div className="form-group">
            <label>
              {title} <span className="required">*</span>
            </label>
            <input
              type="text"
              placeholder={typehere}
              {...register("title", { required: "Title is required" })}
            />
            {errors.title && (
              <p className="error-text">{errors.title.message}</p>
            )}
          </div>

          {/* Sorting Priority Input */}
          <div className="form-group">
            <label>
              {sortingPriority} (1-100) <span className="required">*</span>
            </label>
            <input
              type="number"
              placeholder={typehere}
              {...register("priority", {
                required: "Sorting Priority is required",
                min: { value: 1, message: "Minimum value is 1" },
                max: { value: 100, message: "Maximum value is 100" },
              })}
            />
            {errors.priority && (
              <p className="error-text">{errors.priority.message}</p>
            )}
          </div>

          {/* Description Input */}
          <div className="form-group">
            <label>
              {bannerDescription} <span className="required">*</span>
            </label>
            <input
              type="text"
              placeholder={typehere}
              {...register("description", {
                required: "Description is required",
              })}
            />
            {errors.description && (
              <p className="error-text">{errors.description.message}</p>
            )}
          </div>

          {/* Status (Radio Buttons) */}
          <div className="checkbox-group">
            <Controller
              name="status"
              control={control}
              defaultValue="Publish"
              rules={{ required: "Status is required" }}
              render={({ field }) => (
                <>
                  <Form.Check
                    type="radio"
                    label={publish}
                    value="Publish"
                    checked={field.value === "Publish"}
                    onChange={() => field.onChange("Publish")}
                    className="square-radio"
                  />
                  <Form.Check
                    type="radio"
                    label={unPublish}
                    value="Unpublish"
                    checked={field.value === "Unpublish"}
                    onChange={() => field.onChange("Unpublish")}
                    className="square-radio"
                  />
                </>
              )}
            />
            {errors.status && (
              <p className="error-text">{errors.status.message}</p>
            )}
          </div>

          {/* Form Actions */}
          <div className="form-actions">
            <button type="button" className="btn" onClick={() => navigate(-1)}>
              {cancle}
            </button>
            <button type="submit" className="btn">
              {isPending ? "Adding..." : add}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BannerAdd;
