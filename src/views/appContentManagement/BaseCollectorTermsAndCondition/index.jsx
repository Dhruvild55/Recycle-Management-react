import { FaPlus } from "react-icons/fa6";
import ButtonComponent from "../../../shared/components/Buttoncomponent";
import TitleComponent from "../../../shared/components/TitleComponent";
import AppContentManagementTopSection from "../Components/AppContentManagementTopSection";
import { useQuery } from "@tanstack/react-query";
import { getCollectorBaseTermsAndCondition } from "../../../query/AppContentManagement/getBaseCollectorTerms/getBaseCollectorTerms.query";
import { useNavigate } from "react-router-dom";
import { route } from "../../../shared/constants/AllRoutes";
import TermsAndConditionComponent from "./TermsAndConditionComponent";
import usePagePermissions from "../../../shared/hooks/usePagePermission/usePagePermission";

const BaseCollectorTerms = () => {
  const navigate = useNavigate();

  const { canCreate, canDelete, canEdit } = usePagePermissions(
    "Collector Terms & Condition"
  );

  // ! Base Terms And Condition API
  const { data, isPending, refetch } = useQuery({
    queryKey: ["baseTermsAndCondition"],
    queryFn: () => getCollectorBaseTermsAndCondition(),
  });

  return (
    <>
      <div className="common-main-section">
        <AppContentManagementTopSection />
        <div className="common-page-toolbar" style={{ padding: "7px 0px" }}>
          <TitleComponent label="Terms And Condition" />

          {canCreate && (
            <ButtonComponent
              label="Add T&C"
              className="add-btn"
              icon={<FaPlus style={{ fontSize: "15px" }} />}
              onClick={() =>
                navigate(route.appContentManagement.BaseCollectorTerms.Add)
              }
            />
          )}
        </div>

        {data?.data?.length > 0 ? (
          <TermsAndConditionComponent
            title={data?.data[0].terms}
            description={data?.data[0].description}
            id={data?.data[0].id}
            isLoading={isPending}
            isDelete={true}
            refetch={refetch}
            index={1}
            editPermission={canEdit}
            deletePermission={canDelete}
          />
        ) : (
          <p> No Data Available</p>
        )}
      </div>
      {data?.data.slice(1).map((item, index) => (
        <div
          className="common-main-section"
          style={{ marginTop: "20px", minHeight: "0px", paddingBottom: "40px" }}
          key={index}
        >
          <TermsAndConditionComponent
            title={item.terms}
            description={item.description}
            id={item.id}
            isLoading={isPending}
            isDelete={true}
            refetch={refetch}
            index={2 + index}
            editPermission={canEdit}
            deletePermission={canDelete}
          />
        </div>
      ))}
    </>
  );
};

export default BaseCollectorTerms;
