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

  const access_token = token?.access_token;
  // const access_token = token?.refresh_token;
  const publisher_access_token = publisherToken?.access_token;

  // const responseToken = publisher_access_token || access_token;

  const refresh_token = token?.refresh_token;

  const reGetUserData = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_REACT_AUTH_URL}/auth/profile`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `${access_token}`,
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

  const refreshToken = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_REACT_AUTH_URL}/auth/user/refresh/token`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${refresh_token}`,
          },
          body: JSON.stringify({
            token: refresh_token,
          }),
        }
      );

      const data = await response.json();
      await localStorage.setItem("token", JSON.stringify(data));
      await reGetUserData();
    } catch (error) {
      console.error(error);
      localStorage.removeItem("token");
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    const getUserProfile = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_REACT_AUTH_URL}/auth/profile`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `${access_token}`,
            },
          }
        );

        if (response.ok) {
          const data = await response.json();
          dispatch(updateProfileData(data));
          window.sessionStorage.setItem("profile", JSON.stringify(data));
        } else if (response.status === 401) {
          await refreshToken();
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
