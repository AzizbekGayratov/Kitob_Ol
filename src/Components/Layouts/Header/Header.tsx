// import { Link } from "react-router-dom";
// import { HeaderNav } from "./components";
// import { LogoSvg, MenuGamburger } from "../../../assets/images/svg";
// import { Box, Drawer } from "@mui/material";
// import { useState } from "react";
// import Menu from "./components/Menu";

// const Header = () => {
//   const [windowSize, setWindowSize] = useState(window.innerWidth);
//   const desktop = windowSize >= 880;
//   window.onresize = () => {
//     setWindowSize(window.innerWidth);
//   };
//   const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

//   return (
//     <>
//       {desktop ? (
//         <header className="fixed w-full z-40 py-4 bg-rootBg">
//           <div className="container flex items-center justify-between">
//             <Link to="/">
//               <img src={LogoSvg} alt="logo" />
//             </Link>
//             <HeaderNav />
//           </div>
//         </header>
//       ) : (
//         <header className="px-4 fixed w-full z-40 flex items-center justify-between bg-white py-1">
//           <Link
//             to="/"
//             className="block max-w-[70px] sm:max-w-[100px] md:max-w-[150px]"
//           >
//             <img src={LogoSvg} alt="logo" />
//           </Link>
//           <button
//             className="border-none p-3 cursor-pointer"
//             onClick={() => setIsDrawerOpen(true)}
//           >
//             <img src={MenuGamburger} alt="mobile menu icon" />
//           </button>
//         </header>
//       )}
//       <Drawer
//         anchor="left"
//         open={isDrawerOpen}
//         onClose={() => setIsDrawerOpen(false)}
//         PaperProps={{
//           sx: { width: "100vw" },
//         }}
//       >
//         <Box
//           sx={{
//             width: "100%",
//             height: "100vh",
//           }}
//           className="bg-primary"
//         >
//           <Menu onCloseBtn={setIsDrawerOpen} />
//         </Box>
//       </Drawer>
//     </>
//   );
// };
// export default Header;

// Before 👆
// Changed the code to imporve responsive desing to mobile and desktop
// After  👇

import { Link, useLocation } from "react-router-dom";
import { HeaderNav } from "./components";
import { LogoSvg, MenuGamburger } from "../../../assets/images/svg";
import { Box, Drawer } from "@mui/material";
import { useEffect, useState } from "react";
import Menu from "./components/Menu";

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  const location = useLocation();

  useEffect(() => {
    setIsDrawerOpen(false);
  }, [location]);

  return (
    <>
      <header className="fixed w-full z-40 py-3 desktop:bg-rootBg bg-white lg:py-1">
        <div className="container flex items-center justify-between">
          <Link
            to="/"
            className="block max-w-[70px] sm:max-w-[100px] desktop:max-w-[150px]"
          >
            <img src={LogoSvg} alt="logo" />
          </Link>

          {/* For screens 880px and above, show the navigation */}
          <div className="hidden desktop:flex">
            <HeaderNav />
          </div>

          {/* For screens below 880px, show the hamburger menu */}
          <button
            className="desktop:hidden border-none p-3 cursor-pointer"
            onClick={() => setIsDrawerOpen(true)}
          >
            <img src={MenuGamburger} alt="mobile menu icon" />
          </button>
        </div>
      </header>

      {/* Drawer for mobile view */}
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        className="desktop:hidden"
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
