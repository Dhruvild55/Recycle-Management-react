/* eslint-disable no-unused-vars */
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { recyclerCollectionHeaders } from "../../confige";
import { useEffect } from "react";
import CommonListSection from "../../Component/CommonListSection";
import { getRecyclerCollection } from "../../../../query/CollectionManagement/Recycler/getRecyclerCollection/getRecyclerCollection.query";
import { useMutation } from "@tanstack/react-query";
import { deleteCollection } from "../../../../query/CollectionManagement/DeleteCollection/deleteCollection.query";
import usePagePermissions from "../../../../shared/hooks/usePagePermission/usePagePermission";

const RecyclerCollectionList = () => {
  const navigate = useNavigate();
  const { canCreate, canDelete, canEdit } = usePagePermissions(
    "Collection Management"
  );
  const translations = useSelector((state) => state.settings.translations);
  useEffect(() => {
    document.title = "Collection Management | Recycler Management";
  }, []);

  return (
    <CommonListSection
      title="Recycler List"
      queryKey="RecyclerCollectionList"
      fetchfunction={getRecyclerCollection}
      tableHeaders={recyclerCollectionHeaders}
      role="Recycler"
      editPermission={canEdit}
      deletePermission={canDelete}
    />
  );
};

export default RecyclerCollectionList;
