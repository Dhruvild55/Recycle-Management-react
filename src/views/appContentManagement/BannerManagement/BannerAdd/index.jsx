/* eslint-disable no-unused-vars */
import { useLocation, useNavigate } from "react-router-dom";
import DragAndDropComponent from "../../../../shared/components/DragAndDropComponent";
import { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { Form } from "react-bootstrap";
import { iconBack } from "../../../../assets/images/icons";
import { useMutation } from "@tanstack/react-query";
import { CreateBanner } from "../../../../query/AppContentManagement/BannerManagement/CreateBanner/createBanner.query";
import { ReactToastify } from "../../../../shared/utils";
import { useSelector } from "react-redux";
import InputField from "../../../../shared/components/InputFieldComponent";
import { getFilePath } from "../../../../query/getfilePath/filePath.query";
import { updateBannerAndEvent } from "../../../../query/AppContentManagement/UpdateBannerAndEvent/updateBannerAndEvent.query";
import { route } from "../../../../shared/constants/AllRoutes";

const BannerAdd = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const editData = location.state || null;

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
  } = useForm({
    defaultValues: {
      title: editData?.title || "",
      priority: editData?.sortingPriority || "",
      description: editData?.description || "",
      status: editData?.status || "Publish",
    },
  });

  // ! Create Banner API
  const { mutate: createMutation, isPending: createPending } = useMutation({
    mutationFn: CreateBanner,
    onSuccess: (data) => {
      ReactToastify(data?.message, "success");
      navigate(route.appContentManagement.BannerManagement.List);
    },
    onError: () => {
      ReactToastify("Something went wrong", "error");
    },
  });

  // ! Update banner API

  const { mutate: updateMuatation, isPending } = useMutation({
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

    if (editData) {
      updateMuatation({ formData, id: editData.id });
    } else {
      createMutation(formData);
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
          <label className="primary-title">
            {editData ? "Edit Banner" : addNewBanner}
          </label>
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

          {/* Sorting Priority Input */}
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

          {/* Description Input */}
          <InputField
            label={bannerDescription}
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
              {createPending ? (editData ? "Updating..." : "Adding...") : add}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BannerAdd;
