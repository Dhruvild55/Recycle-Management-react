import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { iconBack } from "../../../../assets/images/icons";
import DragAndDropComponent from "../../../../shared/components/DragAndDropComponent";
import { Form } from "react-bootstrap";
import { createEvent } from "../../../../query/AppContentManagement/EventManagement/createEvent/createEvent.query";
import { ReactToastify } from "../../../../shared/utils";
import { useMutation } from "@tanstack/react-query";
import InputField from "../../../../shared/components/InputFieldComponent";
import { getFilePath } from "../../../../query/getfilePath/filePath.query";
import { updateBannerAndEvent } from "../../../../query/AppContentManagement/UpdateBannerAndEvent/updateBannerAndEvent.query";

const EventAdd = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const editData = location.state || null;
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
  } = useForm({
    defaultValues: {
      title: editData?.title || "",
      priority: editData?.sortingPriority || "",
      description: editData?.description || "",
      state: editData?.state || "",
      postcode: editData?.postCode || "",
      status: editData?.status || "Publish",
    },
  });

  // ! create Event API
  const { mutate, isPending: createPending } = useMutation({
    mutationFn: createEvent,
    onSuccess: (data) => {
      ReactToastify(data?.message, "success");
      navigate(-1);
    },
    onError: () => {
      ReactToastify("Something went wrong", "error");
    },
  });

  // ! update mutation
  const { mutate: updateMuatation, isPending: editPending } = useMutation({
    mutationFn: ({ formData, id }) => updateBannerAndEvent({ formData, id }),
    onSuccess: (data) => {
      ReactToastify(data?.message, "success");
      navigate(-1);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  useEffect(() => {
    const loadImage = async () => {
      if (editData?.imagePath) {
        const fileUrl = await getFilePath({ image: editData.imagePath });
        const fileName = editData.imagePath.split("/").pop();
        const file = await fetch(fileUrl)
          .then((res) => res.blob())
          .then(
            (blob) =>
              new File([blob], fileName, {
                type: blob.type,
              })
          );

        const fileWithPreview = Object.assign(file, {
          preview: URL.createObjectURL(file),
        });

        setImage(fileWithPreview);
        setValue("image", fileWithPreview);
      }
    };

    if (editData) loadImage();
  }, [editData, setValue]);

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
    if (editData) {
      updateMuatation({ formData, id: editData.id });
    } else {
      mutate(formData);
    }
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
          <InputField
            label={title}
            placeholder={typehere}
            type="text"
            name="title"
            register={register}
            validation={{ required: "Title is required" }}
            errors={errors}
            isRequeirdLabel
          />

          <InputField
            label={`${sortingPriority} (1-100)`}
            placeholder={typehere}
            type="number"
            name="priority"
            register={register}
            validation={{
              required: "Sorting Priority is required",
              min: { value: 1, message: "Minimum value is 1" },
              max: { value: 100, message: "Maximum value is 100" },
            }}
            errors={errors}
            isRequeirdLabel
          />

          {/* State  Input */}
          <InputField
            label={state}
            type="text"
            placeholder={typehere}
            name="state"
            register={register}
            validation={{ required: "State is Required" }}
            errors={errors}
            isRequeirdLabel={true}
          />

          {/* Postcode  Input */}
          <InputField
            label={postCode}
            placeholder={typehere}
            type="text"
            name="postcode"
            register={register}
            validation={{ required: "Postcode is required" }}
            errors={errors}
            isRequeirdLabel={true}
          />

          {/* Description Input */}
          <InputField
            label={eventDescription}
            placeholder={typehere}
            type="textarea"
            name="description"
            register={register}
            validation={{ required: "Description is required" }}
            errors={errors}
            isRequeirdLabel
          />

          {/* Status (Radio Buttons) */}
          <div className="checkbox-group">
            <Controller
              name="status"
              control={control}
              defaultValue={editData?.status || "Publish"}
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
              {editData
                ? createPending
                  ? "Updating..."
                  : "Update"
                : editPending
                ? "Adding..."
                : "Add"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EventAdd;
