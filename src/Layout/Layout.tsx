import { Outlet, useNavigate } from "react-router-dom";
import { Footer, Header } from "../Components";
import { DownloadApp } from "../Components/Layouts";
import { Storage } from "Services";
import { useEffect } from "react";

const Layout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!Storage.get("token")) {
      navigate("/authorization/phone");
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
