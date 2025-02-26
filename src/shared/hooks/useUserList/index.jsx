import { useQuery } from "@tanstack/react-query";
import { usersList } from "../../../query/users/getusers/getUsers.query";

const useUserList = ({ role, pageSize, pageNumber, isDescendingOrder }) => {
  return useQuery({
    queryKey: ["userList", role, pageSize, pageNumber, isDescendingOrder],
    queryFn: () =>
      usersList({
        role,
        pageSize,
        pageNumber,
        isDescendingOrder,
      }),
    keepPreviousData: true,
    staleTime: 30000, // Cache results for 30 seconds
    refetchOnWindowFocus: false, // Don't refetch when switching tabs
  });
};

export default useUserList;
