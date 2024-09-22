import { lazy } from "react";

const Home = lazy(() => import("modules/Home"));
const Profile = lazy(() => import("modules/Profile/Profile"));
const Login = lazy(() => import("modules/Auth/Login/Login"));
const Error = lazy(() => import("modules/Error"));
const ProductView = lazy(() => import("modules/ProductView/ProductView"));
const Authorization = lazy(
  () => import("modules/Auth/Authorization/Authorization")
);
const Announcement = lazy(
  () => import("../modules/Announcements/AnnouncementBooks/AnnouncementBook")
);

export {
  Error,
  Home,
  Login,
  Profile,
  ProductView,
  Authorization,
  Announcement,
};
