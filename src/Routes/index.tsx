import Layout from "Layout";
import {
  Error,
  Home,
  Login,
  ProductView,
  Profile,
  AnnouncementBook,
  Register,
  Authorization,
} from "../modules";
import { Books, Vacancies } from "../modules/Home/components";
import { createBrowserRouter } from "react-router-dom";
import MainProductViewWithContent from "../modules/ProductView/MainProductViewContent";
import CommentsRoute from "../modules/ProductView/CommentsRoute/CommentsRoute";
import {
  PhoneLogin,
  EmailLogin,
} from "../modules/Auth/Authorization/components";
import AuthEmailOTP from "../modules/Auth/Authorization/components/AuthOTP/AuthEmailOTP";
import AuthPhoneOTP from "../modules/Auth/Authorization/components/AuthOTP/AuthPhoneOTP";
import AnnouncementVacancy from "../modules/Announcements/AnnouncementVacancies/AnnouncementVacancy";
import ProtectedRoute from "../Components/Layouts/ProtectedRoute/ProtectedRoute";
import PublisherRoutes from "Components/Layouts/ProtectedRoute/PublisherRoutes";
import UpdateProfileData from "modules/Auth/UpdateProfileData/UpdateProfileData";
import VacancyView from "modules/VacancyView/VacancyView";
import MainVacancyContent from "modules/VacancyView/MainVacancyContent";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
        children: [
          {
            path: "/",
            element: <Books />,
          },
          {
            path: "/vacancies",
            element: <Vacancies />,
          },
        ],
      },
      {
        path: "/",
        element: <ProtectedRoute />,
        children: [
          {
            path: "/profile",
            element: <Profile />,
          },
          {
            path: "/announcements/book",
            element: <AnnouncementBook />,
          },
        ],
      },
      {
        path: "/",
        element: <PublisherRoutes />,
        children: [
          {
            path: "/announcements/vacancy",
            element: <AnnouncementVacancy />,
          },
        ],
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/product/:name",
        element: <ProductView />,
        children: [
          {
            path: "",
            element: <MainProductViewWithContent />,
          },
          {
            path: "comments",
            element: <CommentsRoute />,
          },
        ],
      },
      {
        path: "/vacancy/:name",
        element: <VacancyView />,
        children: [
          {
            path: "",
            element: <MainVacancyContent />,
          },
          {
            path: "comments",
            element: <CommentsRoute />,
          },
        ],
      },
      {
        path: "*",
        element: <Error />,
      },
    ],
  },
  {
    path: "/authorization",
    element: <Authorization />,
    errorElement: <Error />,
    children: [
      {
        path: "phone",
        element: <PhoneLogin />,
      },
      {
        path: "email",
        element: <EmailLogin />,
      },
    ],
  },
  {
    path: "/authorization/user/register",
    element: <UpdateProfileData />,
    errorElement: <Error />,
  },
  {
    path: "/authorization/email/otp",
    element: <Authorization />,
    errorElement: <Error />,
    children: [
      {
        path: "",
        element: <AuthEmailOTP />,
      },
    ],
  },
  {
    path: "/authorization/phone/otp",
    element: <Authorization />,
    errorElement: <Error />,
    children: [
      {
        path: "",
        element: <AuthPhoneOTP />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <Error />,
  },
  {
    path: "*",
    element: <Error />,
  },
]);

export default routes;
