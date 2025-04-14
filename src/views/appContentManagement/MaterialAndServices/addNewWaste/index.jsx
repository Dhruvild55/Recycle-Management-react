import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Form } from "react-bootstrap";
import { getFilePath } from "../../../../query/getfilePath/filePath.query";
import { ReactToastify } from "../../../../shared/utils";
import { iconBack } from "../../../../assets/images/icons";
import InputField from "../../../../shared/components/InputFieldComponent";
import TitleComponent from "../../../../shared/components/TitleComponent";
import DragAndDropComponent from "../../../../shared/components/DragAndDropComponent";
import TopSection from "./Component/TopSection";
import { postMaterialData } from "../../../../query/AppContentManagement/MaterialAndServices/postMaterialData/postMaterialData.query";
import { updateMaterial } from "../../../../query/AppContentManagement/MaterialAndServices/UpdateMaterial/updateMaterial.query";

const AddNewWaste = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const materialData = location?.state?.matirialData || null;
  const isEditMode = !!materialData;

  const [image, setImage] = useState(null);

  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm();

  //! Fetch file path from backend if in edit mode
  const { data: imagePreview } = useQuery({
    queryKey: ["filePath", materialData?.imagePath],
    queryFn: () => getFilePath({ image: materialData.imagePath }),
    enabled: isEditMode && !!materialData?.imagePath,
  });

  // ! Create Material API
  const postMaterial = useMutation({
    mutationFn: postMaterialData,
    onSuccess: (data) => {
      ReactToastify(data.message, "success");
      navigate(-1);
    },
    onError: (errors) => {
      ReactToastify(errors.message, "error");
    },
  });

  // ! updateMaterial API
  const { mutate } = useMutation({
    mutationFn: ({ id, updateData }) =>
      updateMaterial({
        id,
        updateData,
      }),
    onSuccess: (data) => {
      console.log(data);
      ReactToastify(data?.message, "success");
      navigate(-1);
    },
    onError: (errors) => {
      ReactToastify(errors?.message, "error");
    },
  });

  useEffect(() => {
    if (isEditMode && materialData) {
      setValue("wasteName", materialData.materialName || "");
      setValue("wasteDetail", materialData.description || "");
      setValue("status", materialData.status || "");
    }
  }, [isEditMode, materialData, setValue]);

  useEffect(() => {
    if (imagePreview) {
      setImage({
        preview: imagePreview,
        name: "Existing Image",
      });
    }
  }, [imagePreview]);

  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    const previewFile = Object.assign(file, {
      preview: URL.createObjectURL(file),
    });
    setImage(previewFile);
    setValue("image", file); // Set file in React Hook Form
  };

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("WasteName", data.wasteName);
    formData.append("Description", data.wasteDetail);
    formData.append("WasteImg", data.image || materialData?.imagePath);
    formData.append("isPublished", data.status);

    if (isEditMode) {
      mutate({
        id: materialData.materialTypeId,
        updateData: formData,
      });
    } else {
      postMaterial.mutate(formData);
    }
  };

  return (
    <div className="common-main-section">
      <div className="main-section" style={{ marginTop: "0px" }}>
        <button
          className="back-text"
          style={{ marginBottom: "20px" }}
          onClick={() => navigate(-1)}
        >
          <img src={iconBack} alt="Back" /> Back
        </button>

        <TopSection />

        <div
          className="common-page-toolbar"
          style={{
            marginTop: "10px",
            padding: "7px 0px",
            marginBottom: "10px",
          }}
        >
          <TitleComponent label="Material Type" />
        </div>

        <form
          className="add-waste-form"
          style={{ padding: "0px" }}
          onSubmit={handleSubmit(onSubmit)}
        >
          <InputField
            label="Waste Name"
            placeholder="Type Here"
            type="text"
            name="wasteName"
            register={register}
            errors={errors}
            validation={{ required: "Waste Name is required" }}
            isRequeirdLabel={true}
          />

          <InputField
            label="Waste Description"
            placeholder="Type Here"
            type="textarea"
            name="wasteDetail"
            register={register}
            errors={errors}
            validation={{ required: "Waste Description is required" }}
            rows={4}
            isRequeirdLabel={true}
          />

          <div className="form-group-image">
            <label>
              Cover Image <span style={{ color: "green" }}>*</span>
            </label>
            <DragAndDropComponent image={image} onDrop={onDrop} />
          </div>

          <div className="checkbox-group" style={{ marginTop: "20px" }}>
            <Controller
              name="status"
              control={control}
              defaultValue={"Publish"}
              rules={{ required: "Status is required" }}
              render={({ field }) => (
                <>
                  <Form.Check
                    type="radio"
                    label="Publish"
                    value="Publish"
                    checked={field.value === "Publish"}
                    onChange={() => field.onChange("Publish")}
                    className="square-radio"
                  />
                  <Form.Check
                    type="radio"
                    label="UnPublish"
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

          <div className="form-actions">
            <button type="button" className="btn" onClick={() => navigate(-1)}>
              Cancel
            </button>
            <button type="submit" className="btn">
              {isEditMode ? "Update" : "Add"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNewWaste;
