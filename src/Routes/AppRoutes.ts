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
  () =>
    import("modules/Announcements/AnnouncementVacancies/AnnouncementVacancy")
);
const UpdateProfileData = lazy(
  () => import("modules/Auth/UpdateProfileData/UpdateProfileData")
);
const Books = lazy(() => import("modules/Home/components/Books"));
const Vacancies = lazy(() => import("modules/Home/components/Vacancies"));
const PhoneLogin = lazy(
  () => import("modules/Auth/Authorization/components/PhoneLogin")
);
const EmailLogin = lazy(
  () => import("modules/Auth/Authorization/components/EmailLogin")
);
const AuthEmailOTP = lazy(
  () => import("modules/Auth/Authorization/components/AuthOTP/AuthEmailOTP")
);
const AuthPhoneOTP = lazy(
  () => import("modules/Auth/Authorization/components/AuthOTP/AuthPhoneOTP")
);
const ProtectedRoute = lazy(
  () => import("Components/Layouts/ProtectedRoute/ProtectedRoute")
);
const PublisherRoutes = lazy(
  () => import("Components/Layouts/ProtectedRoute/PublisherRoutes")
);
const VacancyView = lazy(() => import("modules/VacancyView/VacancyView"));
const PublisherProfile = lazy(
  () => import("modules/PublisherProfile/PublisherProfile")
);
const Favourites = lazy(() => import("modules/Favourites/Favourites"));

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
  UpdateProfileData,
  Books,
  Vacancies,
  PhoneLogin,
  EmailLogin,
  AuthEmailOTP,
  AuthPhoneOTP,
  ProtectedRoute,
  PublisherRoutes,
  VacancyView,
  PublisherProfile,
  Favourites,
};
