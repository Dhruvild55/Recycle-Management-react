/* eslint-disable no-unused-vars */
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { recyclerCollectionHeaders } from "../../confige";
import { useEffect } from "react";
import CommonListSection from "../../Component/CommonListSection";
import { getRecyclerCollection } from "../../../../query/CollectionManagement/Recycler/getRecyclerCollection/getRecyclerCollection.query";
import { useMutation } from "@tanstack/react-query";
import { deleteCollection } from "../../../../query/CollectionManagement/DeleteCollection/deleteCollection.query";

const RecyclerCollectionList = () => {
  const navigate = useNavigate();
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
    />
  );
};

export default RecyclerCollectionList;
