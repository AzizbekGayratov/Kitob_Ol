import { createBrowserRouter } from "react-router-dom";
import Layout from "Layout";
import {
  Home,
  Profile,
  Login,
  Register,
  Error,
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
} from "../Routes/AppRoutes";

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
      },
      {
        path: "/vacancy/:name",
        element: <VacancyView />,
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
