export const route = {
  login: "/",
  dashboard: "/dashboard",

  userManagement: "/user-Management",
  addUser: "/user-Management/add",
  // viewUser: (id) => `/user-Management/view/${id}`,
  viewRecycler: `/user-Management/view-recycler`,
  ViewCollecter: `/user-Management/view-collecter`,
  EditPermission: (role) => `/user-Management/edit-permission/${role}`,

  createCampaign: "/create-campaign",
};
