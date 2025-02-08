import { Outlet } from "react-router-dom";
import { Footer, Header } from "../Components";
import { DownloadApp } from "../Components/Layouts";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  updateProfileData,
  updatePublisherProfile,
} from "Store/profileSlice/profileSlice";
import api from "Services/Api";
import { Storage } from "Services";
// import { Storage } from "Services";

interface TokenProps {
  access_token: string;
  refresh_token: string;
  role: string;
}

const Layout = () => {
  const dispatch = useDispatch();

  const rawToken = window.localStorage.getItem("token");
  const token: null | TokenProps = rawToken ? JSON.parse(rawToken) : null;

  const publisherRawToken = window.localStorage.getItem("publisher_token");
  const publisherToken: null | TokenProps = publisherRawToken
    ? JSON.parse(publisherRawToken)
    : null;

  // const refreshToken = async (refresh_token: string | undefined) => {
  //   try {
  //     const response = await fetch(
  //       `${import.meta.env.VITE_REACT_AUTH_URL}/auth/user/refresh/token`,
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({ token: refresh_token }),
  //       }
  //     );

  //     if (!response.ok) {
  //       throw new Error("Request failed");
  //     }

  //     const data = await response.json();

  //     window.localStorage.setItem(
  //       "token",
  //       JSON.stringify({
  //         access_token: data.access_token,
  //         refresh_token: data.refresh_token,
  //         role: data.role,
  //       })
  //     );
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  useEffect(() => {
    window.scrollTo(0, 0);
    const access_token = token?.access_token;
    const publisher_access_token = publisherToken?.access_token;

    const responseToken = publisher_access_token || access_token;

    const getUserProfile = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_REACT_AUTH_URL}/auth/profile`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${responseToken}`,
            },
          }
        );

        if (response.ok) {
          const data = await response.json();
          dispatch(updateProfileData(data));
          window.sessionStorage.setItem("profile", JSON.stringify(data));
        }
      } catch (error) {
        console.error(error);
      }
    };

    const getPublisherData = async () => {
      try {
        const response = await api.get("/publishers/get/profile", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${publisher_access_token}`,
          },
        });

        if (response.status === 200) {
          dispatch(updatePublisherProfile(response.data));
          window.sessionStorage.setItem(
            "profile",
            JSON.stringify(response.data)
          );
          Storage.remove("token");
        } else if (response.status === 403) {
          console.log("403");
        }
      } catch (error) {
        console.error(error);
        Storage.remove("publisher_token");
      }
    };

    if (publisherToken) {
      getPublisherData();
    } else if (token) {
      getUserProfile();
    }
  }, []);

  return (
    <>
      <Header />
      <main className="main">
        <Outlet />
        <DownloadApp />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
