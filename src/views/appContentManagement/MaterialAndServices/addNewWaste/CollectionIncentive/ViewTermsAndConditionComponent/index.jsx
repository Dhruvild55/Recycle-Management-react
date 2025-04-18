/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { iconEdit } from "../../../../../../assets/images/icons";
import { useNavigate } from "react-router-dom";
import { route } from "../../../../../../shared/constants/AllRoutes";

const ViewIncentive = ({
  data,
  isLoading,
  serviceId,
  editpermission,
  deletePermission,
}) => {
  const navigate = useNavigate();

  return (
    <>
      {isLoading ? (
        <p>Loading....</p>
      ) : (
        <div className="guideline-main-section">
          <div className="guideline-title">
            <span className="primary-title">Title: {data?.title}</span>
            <div>
              {editpermission && (
                <button
                  style={{ border: "none" }}
                  onClick={() =>
                    navigate(
                      route.appContentManagement.MaterialAndServices.Add
                        .CollectionIncentiveAdd,
                      {
                        state: data,
                      }
                    )
                  }
                >
                  <img src={iconEdit} />
                </button>
              )}
            </div>
          </div>
          <div className="add-waste-form" style={{ padding: "0px" }}>
            <div className="content-section" style={{ marginTop: "20px" }}>
              <p>Content Description</p>
              <p>{data?.description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ViewIncentive;
