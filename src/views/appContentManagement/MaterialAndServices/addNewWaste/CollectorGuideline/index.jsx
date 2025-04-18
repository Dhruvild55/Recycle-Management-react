/* eslint-disable react-hooks/exhaustive-deps */
import { useNavigate } from "react-router-dom";
import { iconBack } from "../../../../../assets/images/icons";
import TopSection from "../Component/TopSection";
import GuidelinesComponent from "../Component/GuidelineComponents";
import FilterDropdown from "../../../../../shared/components/FillerDropdown";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getMaterialAndServicesById } from "../../../../../query/AppContentManagement/MaterialAndServices/getMaterialAndServiceNameById/materialAndServicesById.query";
import { getCollectorGuideline } from "../../../../../query/AppContentManagement/MaterialAndServices/getCollectorGuideline/getcollectorGuideline.query";
import { route } from "../../../../../shared/constants/AllRoutes";
import { FaPlus } from "react-icons/fa6";
import usePagePermissions from "../../../../../shared/hooks/usePagePermission/usePagePermission";
import ButtonComponent from "../../../../../shared/components/Buttoncomponent";

const CollectorGuideline = () => {
  const navigate = useNavigate();
  const translations = useSelector((state) => state.settings.translations);
  const { filter } = translations;
  const [filterText, setFilter] = useState();
  const { canCreate, canDelete, canEdit } = usePagePermissions(
    "Collector Terms & Condition"
  );

  //! get matrial and service id Data API
  const { data, isPending } = useQuery({
    queryKey: ["getMaterialAndServicesOption"],
    queryFn: () => getMaterialAndServicesById(),
  });

  useEffect(() => {
    if (data?.data?.length > 0 && !filterText) {
      setFilter(data?.data[0].myServiceId);
    }
  }, [data]);

  // ! get Collector guideline API
  const {
    data: collectorGuideline,
    isPending: collectionGuidelinePending,
    refetch,
  } = useQuery({
    queryKey: ["getCollectorGuideline", filterText],
    queryFn: () => getCollectorGuideline({ MyServiceId: filterText }),
    enabled: !!filterText,
  });

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
          <label className="primary-title" style={{ fontSize: "24px" }}>
            Collector Guidelines
          </label>
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
                label="Add Collector Guideline"
                className="add-btn"
                icon={<FaPlus style={{ fontSize: "15px" }} />}
                onClick={() =>
                  navigate(
                    route.appContentManagement.MaterialAndServices.Add
                      .GuidelineUpdateAdd,
                    {
                      state: { isrecycler: false },
                    }
                  )
                }
              />
            )}
          </div>
        </div>

        {collectionGuidelinePending ? (
          <p>Loading...</p>
        ) : collectorGuideline?.data?.length > 0 ? (
          <>
            {/* First item */}
            <GuidelinesComponent
              data={collectorGuideline?.data?.[0]}
              isLoading={isPending}
              titleText="Step 1"
              refetch={refetch}
              isCollectorGuideline={true}
              serviceId={filterText}
              editPermission={canEdit}
              deletePermission={canDelete}
            />
          </>
        ) : (
          <p style={{ textAlign: "center", marginTop: "20px" }}>
            No Data Available
          </p>
        )}
      </div>
      {collectorGuideline?.data.slice(1).map((item, index) => (
        <div
          className="common-main-section"
          style={{
            marginTop: "20px",
            minHeight: "0px",
            paddingBottom: "40px",
          }}
          key={index}
        >
          <GuidelinesComponent
            data={item}
            isLoading={isPending}
            titleText={`Step ${index + 2}`}
            refetch={refetch}
            isCollectorGuideline={true}
            serviceId={filterText}
            editPermission={canEdit}
            deletePermission={canDelete}
          />
        </div>
      ))}
    </>
  );
};

export default CollectorGuideline;
