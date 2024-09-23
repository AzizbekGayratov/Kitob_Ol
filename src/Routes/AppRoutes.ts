import { lazy } from "react";

const Home = lazy(() => import("modules/Home"));
const Profile = lazy(() => import("modules/Profile/Profile"));
const Login = lazy(() => import("modules/Auth/Login/Login"));
const Register = lazy(() => import("modules/Auth/Register/Register"));
const Error = lazy(() => import("modules/Error"));
const ProductView = lazy(() => import("modules/ProductView/ProductView"));
const Authorization = lazy(
  () => import("modules/Auth/Authorization/Authorization")
);
const AnnouncementBook = lazy(
  () => import("modules/Announcements/AnnouncementBooks/AnnouncementBook")
);
const AnnouncementVacancy = lazy(
  () => import("modules/Announcements/AnnouncementVacancies/AnnouncementVacancy")
);

export {
  Error,
  Home,
  Login,
  Profile,
  Register,
  ProductView,
  Authorization,
  AnnouncementBook,
  AnnouncementVacancy,
};
