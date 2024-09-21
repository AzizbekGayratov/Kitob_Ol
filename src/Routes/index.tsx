import Layout from "Layout";
import {
  Error,
  Home,
  Login,
  ProductView,
  Profile,
  Index,
  // Register,
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
import RegisterAuth from "../modules/Auth/Authorization/Register/RegisterAuth";
import {
  EmailRegister,
  PhoneRegister,
} from "../modules/Auth/Authorization/Register/components";
import PhoneOTP from "../modules/Auth/Authorization/Register/components/OTP/PhoneOTP";
import EmailOTP from "../modules/Auth/Authorization/Register/components/OTP/EmailOTP";

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
        path: "/elon",
        element: <Index />,
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
    path: "/register",
    element: <RegisterAuth />,
    errorElement: <Error />,
    children: [
      {
        path: "phone",
        element: <PhoneRegister />,
      },
      {
        path: "email",
        element: <EmailRegister />,
      },
    ],
  },
  {
    path: "/register/email/otp",
    element: <RegisterAuth />,
    errorElement: <Error />,
    children: [
      {
        path: "",
        element: <EmailOTP />,
      },
    ],
  },
  {
    path: "/register/phone/otp",
    element: <RegisterAuth />,
    errorElement: <Error />,
    children: [
      {
        path: "",
        element: <PhoneOTP />,
      },
    ],
  },
  {
    path: "/authorization/register",
    element: <div></div>,
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
    path: "/login",
    element: <Login />,
    errorElement: <Error />,
  },
]);

export default routes;
