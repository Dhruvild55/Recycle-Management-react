/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */

import { useNavigate } from "react-router-dom";
import { iconDelete, iconEdit } from "../../../../assets/images/icons";
import { route } from "../../../../shared/constants/AllRoutes";
import { deleteTerms } from "../../../../query/AppContentManagement/getBaseCollectorTerms/DeleteTerms/deleteTerms.query";
import { useMutation } from "@tanstack/react-query";
import { ReactToastify } from "../../../../shared/utils";

const TermsAndConditionComponent = ({
  title,
  id,
  description,
  isLoading,
  isDelete,
  index,
  refetch,
}) => {
  const navigate = useNavigate();

  // ! delete Guideline API
  const { mutate: deletedata } = useMutation({
    mutationFn: () => deleteTerms(id),
    onSuccess: (data) => {
      ReactToastify(data?.message, "success");
      refetch();
    },
    onError: (error) => {
      ReactToastify(error?.message, "success");
    },
  });

  const handleDelete = (id) => {
    deletedata(id);
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
              <button style={{ border: "none" }}>
                <img
                  src={iconEdit}
                  onClick={() =>
                    navigate(
                      route.appContentManagement.BaseCollectorTerms.Add,
                      {
                        state: { id, title, description },
                      }
                    )
                  }
                />
              </button>
              {isDelete && (
                <button style={{ border: "none" }}>
                  <img src={iconDelete} onClick={() => handleDelete(id)} />
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

export default TermsAndConditionComponent;
