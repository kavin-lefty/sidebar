import {
  FaTachometerAlt,
  FaUsers,
  FaUserPlus,
  FaList,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

const sidebarConfig = [
  {
    title: "Dashboard",
    path: "/",
    icon: FaTachometerAlt,
    element: "Dashboard",
  },

  {
    title: "Users",
    icon: FaUsers,
    children: [
      {
        title: "All Users",
        path: "/users",
        icon: FaList,
        element: "Users",
      },
      {
        title: "Add User",
        path: "/add",
        icon: FaUserPlus,
        element: "Dashboard",
      },
    ],
  },
  // {
  //   title: "Settings",
  //   path: "/settings",
  //   icon: FaCog,
  //   element: "Settings",
  // },
  // {
  //   title: "Logout",
  //   path: "/logout",
  //   icon: FaSignOutAlt,
  //   element: "Logout",
  // },
];

export default sidebarConfig;
