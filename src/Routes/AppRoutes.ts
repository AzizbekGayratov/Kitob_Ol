import { lazy } from "react";

const Home = lazy(() => import("modules/Home"));
const Profile = lazy(() => import("modules/Profile/Profile"));
const Login = lazy(() => import("modules/Auth/Login/Login"));
const Error = lazy(() => import("modules/Error"));
const ProductView = lazy(() => import("modules/ProductView/ProductView"));
const Authorization = lazy(
  () => import("modules/Auth/Authorization/Authorization")
);
<<<<<<< HEAD
const Announcement = lazy(
  () => import("../modules/Announcements/AnnouncementBooks/AnnouncementBook")
);
=======
const Announcement = lazy(() => import("modules/Announcement/Announcement"));
>>>>>>> 771967713d610ae8438c8a448c3314d5f8b5f335

export {
  Error,
  Home,
  Login,
  Profile,
  ProductView,
  Authorization,
  Announcement,
};
