import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  activeNavBtn3,
  activeNavBtn4,
} from "../../../../assets/images/svg/HeaderNavLink";
import { useState } from "react";
import { Divider } from "@mui/material";
import { Link } from "react-router-dom";
import { Storage } from "../../../../Services";
import { useDispatch, useSelector } from "react-redux";
import { selectLanguage } from "Store/languageSlice/languageSlice";

export default function Accordation() {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  const isAuthorized = !!Storage.get("token");

  const dispatch = useDispatch();
  const { language } = useSelector(
    (state: { language: { language: string } }) => state.language
  );

  const handleLanguageSelect = (language: string) => {
    localStorage.setItem("language", language);

    dispatch(selectLanguage(language));
    console.log(language);
  };

  console.log(language);

  return (
    <>
      <li className="py-1">
        {!isAuthorized ? (
          <Accordion
            expanded={isOpen1}
            onChange={() => setIsOpen1(!isOpen1)}
            sx={{
              backgroundColor: isOpen1 ? "#ABBCC81A" : "#2C3033",
              boxShadow: "none",
              border: "none",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography className="text-white flex items-center gap-3">
                <img src={activeNavBtn3} alt="icon" /> Mening profilim
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <p>
                <Link
                  to="/authorization/phone"
                  className="text-white block pb-[18px] px-6"
                >
                  Avtorizatsiya
                </Link>
              </p>
              <Divider sx={{ backgroundColor: "white", opacity: 0.4 }} />
              <Link to="/login">
                <p className="text-white block pt-[18px] px-6">
                  Do’kon yoki nashriyot
                </p>
              </Link>
            </AccordionDetails>
          </Accordion>
        ) : (
          <div className="p-4">
            <button>
              <Link
                to="/profile"
                className="flex items-center gap-3 text-white text-sm"
              >
                <img src={activeNavBtn3} alt="icon" /> Mening profilim
              </Link>
            </button>
          </div>
        )}
      </li>
    </>
  );
}
