/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import { FaPlus } from "react-icons/fa6";
import AppContentManagementTopSection from "../../Components/AppContentManagementTopSection";
import { useNavigate } from "react-router-dom";
import { route } from "../../../../shared/constants/AllRoutes";
import CustomDataTable from "../../../../shared/components/CustomDataTable";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getMaterialAndServices } from "../../../../query/AppContentManagement/MaterialAndServices/getMaterialAndServices/getMaterialAndServices.query";
import { deleteMaterial } from "../../../../query/AppContentManagement/MaterialAndServices/deleteMaterial/deleteMaterial.query";
import { useEffect } from "react";
import withPermission from "../../../../shared/Hoc/withPermission";
import usePagePermissions from "../../../../shared/hooks/usePagePermission/usePagePermission";
import CustomTable from "../../../../shared/components/CustomTable";
import { columns } from "./config";
import { ReactToastify } from "../../../../shared/utils";

const MaterialAndeServicesList = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { canCreate, canDelete, canEdit } = usePagePermissions(
    "Collector Terms & Condition"
  );

  useEffect(() => {
    document.title = "App Content Management | Recycler Management";
  }, []);
  const { data, isPending } = useQuery({
    queryKey: ["materialAndService"],
    queryFn: () => getMaterialAndServices(),
  });

  const { mutate: deleteMaterialId } = useMutation({
    mutationFn: deleteMaterial,
    onSuccess: (data) => {
      ReactToastify(data?.message, "success");
      queryClient.invalidateQueries(["materialAndService"]);
    },
    onError: (error) => {
      console.error("Delete failed:", error);
      ReactToastify(error?.message, "error");
    },
  });

  const handleDelete = (id) => {
    deleteMaterialId(id);
  };

  const materialData = data?.data;
  const transformedData = materialData?.map((item) => ({
    ...item,
    id: item.materialTypeId,
  }));

  return (
    <div className="common-main-section">
      <AppContentManagementTopSection />
      <div className="common-page-toolbar">
        <label className="primary-title">Material & Service Management</label>
        {canCreate && (
          <button
            className="add-btn"
            onClick={() =>
              navigate(
                route.appContentManagement.MaterialAndServices.Add.MaterialType
              )
            }
          >
            Add Material <FaPlus style={{ fontSize: "15px" }} />
          </button>
        )}
      </div>
      <CustomTable
        headers={columns(handleDelete, navigate, canEdit, canDelete)}
        data={transformedData}
        isLoading={isPending}
      />
    </div>
  );
};

export default withPermission(
  MaterialAndeServicesList,
  "Collector Terms & Condition",
  "isView"
);
