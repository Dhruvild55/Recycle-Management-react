import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { iconBack } from "../../../../assets/images/icons";
import DragAndDropComponent from "../../../../shared/components/DragAndDropComponent";
import { Form } from "react-bootstrap";
import { createEvent } from "../../../../query/AppContentManagement/EventManagement/createEvent/createEvent.query";
import { ReactToastify } from "../../../../shared/utils";
import { useMutation } from "@tanstack/react-query";

const EventAdd = () => {
  const navigate = useNavigate();
  const translations = useSelector((state) => state.settings.translations);
  const {
    addNewEvent,
    postCode,
    state,
    eventDescription,
    sortingPriority,
    title,
    publish,
    unPublish,
    add,
    cancle,
    typehere,
    isRequire,
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
    mutationFn: createEvent,
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
    formData.append("State", data.state);
    formData.append("Postcode", data.postCode);
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
          <label className="primary-title">{addNewEvent}</label>
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
              {...register("title", { required: `${title}  ${isRequire}` })}
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
                required: `${sortingPriority}  ${isRequire}`,
                min: { value: 1, message: "Minimum value is 1" },
                max: { value: 100, message: "Maximum value is 100" },
              })}
            />
            {errors.priority && (
              <p className="error-text">{errors.priority.message}</p>
            )}
          </div>
          {/* State  Input */}
          <div className="form-group">
            <label>
              {state}
              <span className="required">*</span>
            </label>
            <input
              type="text"
              placeholder={typehere}
              {...register("state", {
                required: `${state}  ${isRequire}`,
              })}
            />
            {errors.state && (
              <p className="error-text">{errors.state.message}</p>
            )}
          </div>

          {/* Postcode  Input */}
          <div className="form-group">
            <label>
              {postCode}
              <span className="required">*</span>
            </label>
            <input
              type="text"
              placeholder={typehere}
              {...register("postCode", {
                required: `${postCode}  ${isRequire}`,
              })}
            />
            {errors.postCode && (
              <p className="error-text">{errors.postCode.message}</p>
            )}
          </div>

          {/* Description Input */}
          <div className="form-group">
            <label>
              {eventDescription} <span className="required">*</span>
            </label>
            <input
              type="text"
              placeholder={typehere}
              {...register("description", {
                required: `${eventDescription}  ${isRequire}`,
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
              {add}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EventAdd;
