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
  PublisherProfile,
  Favourites,
  PublisherPasswordForget,
  EmailReset,
  PhoneReset,
  ResetEmailOTP,
  ResetPhoneOTP
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
          {
            path: "/favourites",
            element: <Favourites />,
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
          {
            path: "/profile/publisher",
            element: <PublisherProfile />,
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
    path: "/password/reset",
    element: <PublisherPasswordForget />,
    errorElement: <Error />,
    children: [
      {
        path: "email",
        element: <EmailReset />,
      },
      {
        path: "phone",
        element: <PhoneReset />,
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
    path: "/password/reset/email/otp",
    element: <PublisherPasswordForget />,
    errorElement: <Error />,
    children: [
      {
        path: "",
        element: <ResetEmailOTP />,
      },
    ],
  },
  {
    path: "/password/reset/phone/otp",
    element: <PublisherPasswordForget />,
    errorElement: <Error />,
    children: [
      {
        path: "",
        element: <ResetPhoneOTP />,
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
