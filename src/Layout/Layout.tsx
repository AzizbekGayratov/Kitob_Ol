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

  useEffect(() => {
    window.scrollTo(0, 0);

    const getUserProfile = async () => {
      const access_token = token?.access_token;

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
