import Layout from "Layout";
import {
  Error,
  Home,
  Login,
  ProductView,
  Profile,
  Announcement,
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
import AuthEmailOTP from "modules/Auth/Authorization/components/AuthOTP/AuthEmailOTP";
import AuthPhoneOTP from "modules/Auth/Authorization/components/AuthOTP/AuthPhoneOTP";

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
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/announcements",
        element: <Announcement />,
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
]);

export default routes;
