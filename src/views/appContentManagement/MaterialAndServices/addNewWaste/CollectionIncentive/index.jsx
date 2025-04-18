/* eslint-disable react-hooks/exhaustive-deps */
import TopSection from "../Component/TopSection";
import { useNavigate } from "react-router-dom";
import { route } from "../../../../../shared/constants/AllRoutes";
import { iconBack } from "../../../../../assets/images/icons";
import TitleComponent from "../../../../../shared/components/TitleComponent";
import FilterDropdown from "../../../../../shared/components/FillerDropdown";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import usePagePermissions from "../../../../../shared/hooks/usePagePermission/usePagePermission";
import ButtonComponent from "../../../../../shared/components/Buttoncomponent";
import { FaPlus } from "react-icons/fa6";
import { useQuery } from "@tanstack/react-query";
import { getMaterialAndServicesById } from "../../../../../query/AppContentManagement/MaterialAndServices/getMaterialAndServiceNameById/materialAndServicesById.query";
import { getCollectorIncentive } from "../../../../../query/AppContentManagement/MaterialAndServices/GetCollectorIncentive/getCollectorInventive.query";
import ViewIncentive from "./ViewTermsAndConditionComponent";

const CollectionIncentive = () => {
  const navigate = useNavigate();
  const translations = useSelector((state) => state.settings.translations);
  const { filter } = translations;
  const [filterText, setFilter] = useState();
  const { canCreate, canDelete, canEdit } = usePagePermissions(
    "Collector Terms & Condition"
  );

  //! Get Material and Service options
  const { data } = useQuery({
    queryKey: ["getMaterialAndServicesOption"],
    queryFn: () => getMaterialAndServicesById(),
  });

  useEffect(() => {
    if (data?.data?.length > 0 && !filterText) {
      setFilter(data?.data[0].myServiceId);
    }
  }, [data]);

  const { data: incentiveData, isPending: pendingIncentiveData } = useQuery({
    queryKey: ["incentiveItems", filterText],
    queryFn: () => getCollectorIncentive({ MyServiceId: filterText }),
    enabled: !!filterText,
  });

  console.log(incentiveData);

  return (
    <>
      <div className="common-main-section">
        <button
          className="back-text"
          style={{ marginBottom: "20px" }}
          onClick={() =>
            navigate(route.appContentManagement.MaterialAndServices.List)
          }
        >
          <img src={iconBack} alt="Back" /> Back
        </button>
        <TopSection />
        <div
          className="common-page-toolbar"
          style={{ marginTop: "20px", padding: "7px 0px" }}
        >
          <div style={{ marginTop: "20px" }}>
            <TitleComponent label="Collection Incentive" />
          </div>
          <div className="tool-section">
            <FilterDropdown
              label={filter}
              options={
                data?.data?.map((category) => ({
                  value: category.myServiceId,
                  label: category.materilaName,
                })) || []
              }
              value={filterText} // Set the default selected value
              onFilterChange={setFilter}
            />
            {canCreate && (
              <ButtonComponent
                label="Add Collection Incenvite"
                className="add-btn"
                icon={<FaPlus style={{ fontSize: "15px" }} />}
                onClick={() =>
                  navigate(
                    route.appContentManagement.MaterialAndServices.Add
                      .CollectionIncentiveAdd
                  )
                }
              />
            )}
          </div>
        </div>
        <ViewIncentive
          data={incentiveData?.data?.items[0]}
          serviceId={filterText}
          isLoading={pendingIncentiveData}
          editpermission={canEdit}
          deletePermission={canDelete}
        />
      </div>
      {incentiveData?.data?.items.slice(1).map((item, index) => {
        return (
          <div
            className="common-main-section"
            style={{
              marginTop: "20px",
              minHeight: "0px",
              paddingBottom: "40px",
            }}
            key={index}
          >
            <ViewIncentive
              data={item}
              isLoading={pendingIncentiveData}
              serviceId={filterText}
              editpermission={canEdit}
              deletePermission={canDelete}
            />
          </div>
        );
      })}
    </>
  );
};

export default CollectionIncentive;
