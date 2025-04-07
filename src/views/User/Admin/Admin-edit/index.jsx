/* eslint-disable no-unused-vars */
import { useState, useRef } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { ReactToastify } from "../../../../shared/utils";
import { route } from "../../../../shared/constants/AllRoutes";
import { useForm } from "react-hook-form";
import ProfilePic from "../../../../shared/components/ProfilePic";
import InputField from "../../../../shared/components/InputFieldComponent";
import { createUser } from "../../../../query/users/createUsers/createUsers.query";
import { validationRules } from "../../../../shared/constants/ValidationRules";
import { Loader } from "../../../../shared/components/Loader";
import { Avatar, useMediaQuery } from "@mui/material";
import { getRoles } from "../../../../query/roles/getRoles/getRoles.query";
import { getProfile } from "../../../../query/profile/getProfile/getProfile.query";
import { EditAdmin } from "../../../../query/users/Admin/edit/editAdmin.query";

export default function AddUserPage() {
  const navigate = useNavigate();
  const params = useParams();
  const location = useLocation();
  const language = useSelector((store) => store.settings.translations);
  const [selectedImage, setSelectedImage] = useState(null);
  const fileInputRef = useRef(null);
  const isMobile = useMediaQuery("(max-width: 425px)"); // Check screen size
  const userData = location.state?.userData || {}; // Fallback to empty object
  const { firstName, lastName, userName, selfiePath, roles } = userData;
  const { id } = params;
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      firstName: userData?.firstName || "",
      lastName: userData?.lastName || "",
      userName: userData?.userName || "",
      phone: userData?.phone || "",
      email: userData?.email || "",
      roles: userData?.roles || "",
    },
  });

  const { data: rolesData, isLoading: isRolesLoading } = useQuery({
    queryKey: ["rolesList"],
    queryFn: getRoles,
  });

  const { mutate, isPending } = useMutation({
    mutationFn: ({ id, updateData }) => EditAdmin(id, updateData),
    onSuccess: (data) => {
      ReactToastify(data?.message, "success");
      navigate(route.userManagement.Admin.List);
    },
    onError: (error) => {
      console.log(error);
      ReactToastify(error?.response?.data?.message, "error");
    },
  });

  // Handle file selection
  const onFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(file);
    }
  };

  // Open file dialog
  const openFileDialog = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    } else {
      console.error("File input reference is null");
    }
  };

  // Handle form submission
  const onSubmit = async (data) => {
    const formData = new FormData();
    console.log("editData", data);
    formData.append("FirstName", data.firstName);
    formData.append("LastName", data.lastName);
    formData.append("userName", data.userName);
    formData.append("Role", data.roles);

    if (selectedImage) {
      formData.append("selfie", selectedImage);
    }
    mutate({ id, updateData: formData });
  };

  return (
    <div className="create-admin-section">
      <div className="common-main-section">
        <div className="header-contant">
          <button className="back-text" onClick={() => navigate(-1)}>
            &larr; BACK
          </button>
        </div>
        <div className="personal-info-section">
          <label className="primary-title">Personal Information</label>
          <div className="profile-photo-section">
            <div className="profile-left">
              <p className="profile-left-title">Your Photo</p>
              <p>This will be displayed on your profile</p>
            </div>
            <div className="profile-center">
              {}
              <Avatar
                src={selectedImage ? URL.createObjectURL(selectedImage) : null}
                sx={{ width: 60, height: 60 }}
              />
            </div>
            <div className="photo-actions">
              <button
                className="delete-button"
                onClick={() => setSelectedImage(null)}
              >
                Delete
              </button>
              <button className="update-button" onClick={openFileDialog}>
                Update
              </button>
            </div>
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              style={{ display: "none" }}
              onChange={onFileChange}
            />
          </div>
          <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <InputField
                label={language.formFields.first_Name}
                placeholder={language.formFields.first_Name}
                type="text"
                register={register}
                errors={errors}
                name="firstName"
                validation={validationRules.firstName}
              />
              <InputField
                label={language.formFields.last_name}
                placeholder={language.formFields.last_name}
                type="text"
                register={register}
                errors={errors}
                name="lastName"
                validation={validationRules.lastName}
              />
              <InputField
                label={language.formFields.username}
                placeholder={language.formFields.username}
                type="text"
                register={register}
                errors={errors}
                name="userName"
              />
            </div>

            <div className="form-group-last">
              <InputField
                label={language.formFields.roles}
                type="select"
                register={register}
                errors={errors}
                name="roles"
                options={rolesData?.data?.map((role) => ({
                  value: role,
                  label: role,
                }))} // Dynamically pass roles
                validation={{
                  required: "Role selection is required",
                }}
              />
            </div>

            <div className="form-actions">
              <button
                type="submit"
                className="submit-button"
                disabled={isRolesLoading}
              >
                {isRolesLoading ? (
                  <Loader animation="border" width="20px" height="20px" />
                ) : (
                  "Submit"
                )}
              </button>
              <button
                type="button"
                className="cancel-button"
                onClick={() => {
                  reset();
                  setSelectedImage(null);
                }}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
