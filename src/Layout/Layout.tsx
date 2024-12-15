import { Outlet } from "react-router-dom";
import { Footer, Header } from "../Components";
import { DownloadApp } from "../Components/Layouts";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateProfileData } from "Store/profileSlice/profileSlice";

interface TokenProps {
  access_token: string;
  refresh_token: string;
  role: string;
}

const Layout = () => {
  const dispatch = useDispatch();

  const rawToken = window.localStorage.getItem("token");
  const token: null | TokenProps = rawToken ? JSON.parse(rawToken) : null;

  const refreshToken = async (refresh_token: string | undefined) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_REACT_AUTH_URL}/auth/refresh`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ refresh_token }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        window.localStorage.setItem("token", JSON.stringify(data));
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    const getUserProfile = async () => {
      const access_token = token?.access_token;
      const refresh_token = token?.refresh_token;

      try {
        const response = await fetch(
          `${import.meta.env.VITE_REACT_AUTH_URL}/auth/profile`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${access_token}`,
            },
          }
        );

        if (response.ok) {
          const data = await response.json();
          dispatch(updateProfileData(data));
          window.sessionStorage.setItem("profile", JSON.stringify(data));
        } else {
          const data = await response.json();
          if (data.details.includes("Token is expired")) {
            refreshToken(refresh_token);
          }
        }
      } catch (error) {
        console.error(error);
      }
    };

    if (token) {
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
