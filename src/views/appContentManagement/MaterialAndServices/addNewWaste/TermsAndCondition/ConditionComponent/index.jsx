/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { useState } from "react";
import InputField from "../../../../../../shared/components/InputFieldComponent";
import { useForm } from "react-hook-form";
import { iconDelete, iconEdit } from "../../../../../../assets/images/icons";
import { deleteGuideline } from "../../../../../../query/AppContentManagement/MaterialAndServices/DeleteGuideline/deleteGuideline.query";
import { useMutation } from "@tanstack/react-query";
import {
  ReactToastify,
  showDeleteConfirmation,
} from "../../../../../../shared/utils";
import { useNavigate } from "react-router-dom";
import { route } from "../../../../../../shared/constants/AllRoutes";

const ConditionComponent = ({
  title,
  id,
  description,
  isLoading,
  isDelete,
  index,
  refetch,
  editPermission,
  deletePermission,
}) => {
  const navigate = useNavigate();

  // ! delete Guideline API
  const { mutate: deleteGuidelineId } = useMutation({
    mutationFn: deleteGuideline,
    onSuccess: (data) => {
      ReactToastify(data?.message, "success");
      refetch();
    },
    onError: (error) => {
      ReactToastify(error?.message, "error");
    },
  });

  const handleDelete = (id) => {
    deleteGuidelineId(id);
  };
  return (
    <>
      {isLoading ? (
        <p>Loading....</p>
      ) : (
        <div className="guideline-main-section">
          <div className="guideline-title">
            <span className="primary-title">
              {index}.{"  "}
              {title}
            </span>

            <div>
              {editPermission && (
                <button style={{ border: "none" }}>
                  <img
                    src={iconEdit}
                    onClick={() =>
                      navigate(
                        route.appContentManagement.BaseCollectorGuideline.Add,
                        {
                          state: { id, title, description },
                        }
                      )
                    }
                  />
                </button>
              )}
              {isDelete && deletePermission && (
                <button style={{ border: "none" }}>
                  <img
                    src={iconDelete}
                    onClick={() => {
                      showDeleteConfirmation(() => handleDelete(id));
                    }}
                  />
                </button>
              )}
            </div>
          </div>
          <div className="add-waste-form" style={{ padding: "0px" }}>
            <div className="content-section" style={{ marginTop: "20px" }}>
              <p>{description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ConditionComponent;
