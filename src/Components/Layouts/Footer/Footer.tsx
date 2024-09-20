import { Divider } from "@mui/material";
import { MainContent } from "./components";

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <MainContent />
      <Divider sx={{ backgroundColor: "white" ,opacity:0.5}} />
      <div className="sm:py-5 py-10 container flex flex-col sm:flex-row px-4 sm:items-center justify-between">
        <p className="text-[16px] leading-[19px] opacity-50">
          Copywright R 2023
        </p>
        <p className="text-[16px] leading-[19px] opacity-70">
          Designed by: <span className="font-black">Nasibjon</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
