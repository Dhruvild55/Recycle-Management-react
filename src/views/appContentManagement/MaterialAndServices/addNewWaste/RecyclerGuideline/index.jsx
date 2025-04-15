/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMaterialAndServicesById } from "../../../../../query/AppContentManagement/MaterialAndServices/getMaterialAndServiceNameById/materialAndServicesById.query";
import { useQuery } from "@tanstack/react-query";
import { getCollectorGuideline } from "../../../../../query/AppContentManagement/MaterialAndServices/getCollectorGuideline/getcollectorGuideline.query";
import { iconBack } from "../../../../../assets/images/icons";
import TopSection from "../Component/TopSection";
import FilterDropdown from "../../../../../shared/components/FillerDropdown";
import GuidelinesComponent from "../Component/GuidelineComponents";
import { getRecyclerGuideline } from "../../../../../query/AppContentManagement/MaterialAndServices/getRecyclerGuideline/getrecyclerGuideline.query";
import { route } from "../../../../../shared/constants/AllRoutes";
import { FaPlus } from "react-icons/fa6";

const RecyclerGuideline = () => {
  const navigate = useNavigate();
  const translations = useSelector((state) => state.settings.translations);
  const { filter } = translations;
  const [filterText, setFilter] = useState();

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

  // ! get Recycler guideline API
  const {
    data: recyclerGuideline,
    isPending: recyclerGuidelinePending,
    refetch,
  } = useQuery({
    queryKey: ["getRecyclerGuideline", filterText],
    queryFn: () => getRecyclerGuideline({ MyServiceId: filterText }),
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
            Recycler Guidelines
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
            <button
              className="add-btn"
              onClick={() =>
                navigate(
                  route.appContentManagement.MaterialAndServices.Add
                    .GuidelineUpdateAdd,
                  {
                    state: { isrecycler: true },
                  }
                )
              }
            >
              {" "}
              Add Recycler Guideline <FaPlus style={{ fontSize: "15px" }} />
            </button>
          </div>
        </div>
        {recyclerGuidelinePending ? (
          <p>Loading....</p>
        ) : recyclerGuideline?.data?.length > 0 ? (
          <>
            <GuidelinesComponent
              data={recyclerGuideline?.data?.[0]}
              isLoading={isPending}
              titleText="Step  1"
              refetch={refetch}
              isCollectorGuideline={false}
              serviceId={filterText}
            />
          </>
        ) : (
          <p style={{ textAlign: "center", marginTop: "20px" }}>
            No Data Available
          </p>
        )}
      </div>
      {recyclerGuideline?.data.slice(1).map((item, index) => (
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
            isCollectorGuideline={false}
            serviceId={filterText}
          />
        </div>
      ))}
    </>
  );
};

export default RecyclerGuideline;
