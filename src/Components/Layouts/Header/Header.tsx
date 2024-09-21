import { Link } from "react-router-dom";
import { HeaderNav } from "./components";
import { LogoSvg, MenuGamburger } from "../../../assets/images/svg";
import { Box, Drawer } from "@mui/material";
import { useState } from "react";
import Menu from "./components/Menu";

const Header = () => {
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const desktop = windowSize >= 880;
  window.onresize = () => {
    setWindowSize(window.innerWidth);
  };
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  return (
    <>
      {desktop ? (
        <header className="fixed w-full z-40 py-4 bg-rootBg">
          <div className="container flex items-center justify-between">
            <Link to="/">
              <img src={LogoSvg} alt="logo" />
            </Link>
            <HeaderNav />
          </div>
        </header>
      ) : (
        <header className="px-4 fixed w-full z-40 flex items-center justify-between bg-white py-1">
          <Link
            to="/"
            className="block max-w-[70px] sm:max-w-[100px] md:max-w-[150px]"
          >
            <img src={LogoSvg} alt="logo" />
          </Link>
          <button
            className="border-none p-3 cursor-pointer"
            onClick={() => setIsDrawerOpen(true)}
          >
            <img src={MenuGamburger} alt="mobile menu icon" />
          </button>
        </header>
      )}
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        PaperProps={{
          sx: { width: "100vw" },
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100vh",
          }}
          className="bg-primary"
        >
          <Menu onCloseBtn={setIsDrawerOpen} />
        </Box>
      </Drawer>
    </>
  );
};

export default Header;
