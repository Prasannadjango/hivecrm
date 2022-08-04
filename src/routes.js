
import Login from "views/Login.js";
import Users from "views/Users.js";
import Feedbacks from "views/Feedbacks.js";
import Aboutus from "views/Aboutus.js";
import Termsandconditions from "views/Termsandcondition";
import privacyandpolicy from "views/Privacyandpolicy";
import Logout from "views/Logout.js";
import Upgrade from "views/Upgrade.js";


const dashboardRoutes = [

  {
    path: "/home",
    name: "home",
    icon: "nc-icon nc-home-50",
    component: Login,
    layout: "/admin"
  },
 
  {
    path: "/Users",
    name: "Users",
    icon: "nc-icon nc-chart-pie-35",
    component: Users,
    layout: "/admin"
  },
  {
    path: "/user",
    name: "Feedbacks",
    icon: "nc-icon nc-circle-09",
    component: Feedbacks,
    layout: "/admin"
  },
  {
    path: "/Aboutus",
    name: "Aboutus",
    icon: "nc-icon nc-notes",
    component: Aboutus,
    layout: "/admin"
  },
  {
    path: "/Termsandconditions",
    name: "Terms&conditions",
    icon: "nc-icon nc-paper-2",
    component:Termsandconditions,
    layout: "/admin"
  },
  {
    path: "/privacyandpolicy",
    name: "privacy&policy",
    icon: "nc-icon nc-atom",
    component: privacyandpolicy,
    layout: "/admin"
  },


  {
    path: "/Logout",
    name: "Logout",
    icon: "nc-icon nc-pin-3",
    component: Logout,
    layout: "/admin"
  },
  // {
  //   path: "/src/components/Login",
  //   name: "Login",
  //   icon: "nc-icon nc-pin-3",
  //   component: Login,
  //   layout: "/admin"

  // }
  
];

export default dashboardRoutes;
