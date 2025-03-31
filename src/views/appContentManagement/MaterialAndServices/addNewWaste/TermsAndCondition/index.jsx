/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useNavigate } from "react-router-dom";
import { iconBack } from "../../../../../assets/images/icons";
import TopSection from "../Component/TopSection";
import FilterDropdown from "../../../../../shared/components/FillerDropdown";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getMaterialAndServicesById } from "../../../../../query/AppContentManagement/MaterialAndServices/getMaterialAndServiceNameById/materialAndServicesById.query";
import { getTermsAndonditionbyId } from "../../../../../query/AppContentManagement/MaterialAndServices/getTermsAndConditionbyId/getTermsAndCondition.query";
import ConditionComponent from "./ConditionComponent";

const TermsAndCondition = () => {
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

  // ! get Terms and Condition API
  const { data: termsAndCondition, isPending: pendingTremsAndCondition } =
    useQuery({
      queryKey: ["getTermsAndCondition", filterText],
      queryFn: () => getTermsAndonditionbyId({ MyServiceId: filterText }),
      enabled: !!filterText,
    });

  console.log(termsAndCondition?.data);

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
              Term & Conditions
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
        <ConditionComponent
          data={termsAndCondition?.data[0]}
          isLoading={isPending}
        />
      </div>
      {termsAndCondition?.data[1] && (
        <div className="common-main-section" style={{ marginTop: "20px" }}>
          <ConditionComponent
            data={termsAndCondition?.data[1]}
            isLoading={isPending}
          />
        </div>
      )}
      {termsAndCondition?.data[2] && (
        <div className="common-main-section" style={{ marginTop: "20px" }}>
          <ConditionComponent
            data={termsAndCondition?.data[2]}
            isLoading={isPending}
          />
        </div>
      )}
    </>
  );
};

export default TermsAndCondition;
