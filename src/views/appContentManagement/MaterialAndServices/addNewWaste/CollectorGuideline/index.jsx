/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
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

const CollectorGuideline = () => {
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

  console.log("filterText", filterText);
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
          onClick={() => navigate(-1)}
        >
          <img src={iconBack} alt="Back" /> Back
        </button>
        <TopSection />
        <div
          className="common-page-toolbar"
          style={{ marginTop: "20px", padding: "7px" }}
        >
          <div className="left-section">
            <label className="primary-title" style={{ fontSize: "24px" }}>
              Collector Guidelines
            </label>
          </div>
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
        </div>
        <GuidelinesComponent
          data={collectorGuideline?.data?.[0]}
          isLoading={isPending}
          titleText="Step  1"
          refetch={refetch}
        />
      </div>
      {collectorGuideline?.data?.[1] && (
        <div
          className="common-main-section"
          style={{ marginTop: "20px", minHeight: "0px" }}
        >
          <GuidelinesComponent
            data={collectorGuideline?.data?.[1]}
            isLoading={isPending}
            titleText="Step  2"
            refetch={refetch}
          />
        </div>
      )}
      {collectorGuideline?.data?.[2] && (
        <div className="common-main-section" style={{ marginTop: "20px" }}>
          <GuidelinesComponent
            data={collectorGuideline?.data?.[2]}
            isLoading={isPending}
            titleText="Step  3"
            refetch={refetch}
          />
        </div>
      )}
    </>
  );
};

export default CollectorGuideline;
