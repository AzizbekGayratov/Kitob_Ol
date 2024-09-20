import { Outlet } from "react-router-dom";
import { Footer, Header } from "Components";
import { DownloadApp } from "Components/Layouts";

const Layout = () => {
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
