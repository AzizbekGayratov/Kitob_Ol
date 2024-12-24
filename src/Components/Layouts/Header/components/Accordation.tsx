import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  activeNavBtn3,
  activeNavBtn4,
} from "../../../../assets/images/svg/HeaderNavLink";
import { Divider } from "@mui/material";
import { Link } from "react-router-dom";
import { Storage } from "../../../../Services";
import { useDispatch, useSelector } from "react-redux";
import { selectLanguage } from "Store/languageSlice/languageSlice";
import { DropDownType } from "modules/Announcements/types/Types";
import { toggleDropDown } from "Store/dropDownSlice/dropDownSlice";

export default function Accordation() {
  // const isAuthorized = Storage.get("token") || Storage.get("publisher_token"); ====> it is for publisher
  const isAuthorized = Storage.get("token");

  const dispatch = useDispatch();

  const { selected } = useSelector(
    (state: { dropDown: { selected: DropDownType | "" } }) => state.dropDown
  );
  const { language } = useSelector(
    (state: { language: { language: "uz" | "ru" | "en" } }) => state.language
  );
  

  const handleLanguageSelect = (e: string) => {
    localStorage.setItem("language", e);

    dispatch(selectLanguage(e));
    dispatch(toggleDropDown("language")); // Close the dropdown after selection
  };

  const handleDropdownClick = (dropdownName: DropDownType) => {
    dispatch(toggleDropDown(dropdownName));
  };

  return (
    <>
      <li className="py-1">
        {!isAuthorized ? (
          <Accordion
            expanded={selected === "profile"}
            onChange={() => handleDropdownClick("profile")}
            sx={{
              backgroundColor: selected === "profile" ? "#ABBCC81A" : "#2C3033",
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
                <img src={activeNavBtn3} alt="icon" />{" "}
                {language === "uz"
                  ? "Mening profilim"
                  : language === "ru"
                  ? "Мой профиль"
                  : "My profile"}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <p>
                <Link
                  to="/authorization/phone"
                  className="text-white block pb-[18px] px-6"
                >
                  {language === "uz"
                    ? "Avtorizatsiya"
                    : language === "ru"
                    ? "Авторизация"
                    : "Authorization"}
                </Link>
              </p>
              <Divider sx={{ backgroundColor: "white", opacity: 0.4 }} />
              <Link to="/login">
                <p className="text-white block pt-[18px] px-6">
                  {language === "uz"
                    ? "Do’kon yoki nashriyot"
                    : language === "ru"
                    ? "Издательство или магазин"
                    : "Publisher or Shop"}
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
                <img src={activeNavBtn3} alt="icon" />{" "}
                {language === "uz"
                  ? "Mening profilim"
                  : language === "ru"
                  ? "Мой профиль"
                  : "My profile"}
              </Link>
            </button>
          </div>
        )}
      </li>
      <li className="py-1">
        <Accordion
          expanded={selected === "language"}
          onChange={() => handleDropdownClick("language")}
          sx={{
            backgroundColor: selected === "language" ? "#ABBCC81A" : "#2C3033",
            boxShadow: "none",
            border: "none",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography className="text-white flex items-center gap-3">
              <img src={activeNavBtn4} alt="icon" />{" "}
              {language === "uz"
                ? "Til"
                : language === "ru"
                ? "Язык"
                : "Language"}
            </Typography>
          </AccordionSummary>

          <AccordionDetails>
            <button
              className="text-white block py-3 px-6 rounded-md"
              onClick={() => {
                handleLanguageSelect("en");
              }}
            >
              {language === "uz"
                ? "Ingliz tili"
                : language === "ru"
                ? "Английский"
                : "English"}
            </button>

            <Divider sx={{ backgroundColor: "white", opacity: 0.4 }} />

            <button
              className="text-white block py-3 px-6 rounded-md"
              onClick={() => {
                handleLanguageSelect("ru");
              }}
            >
              {language === "uz"
                ? "Rus tili"
                : language === "ru"
                ? "Русский"
                : "Russian"}
            </button>

            <Divider sx={{ backgroundColor: "white", opacity: 0.4 }} />

            <button
              className="text-white block py-3 px-6 rounded-md"
              onClick={() => {
                handleLanguageSelect("uz");
              }}
            >
              {language === "uz"
                ? "O'zbek tili"
                : language === "ru"
                ? "Узбекский"
                : "Uzbek"}
            </button>
          </AccordionDetails>
        </Accordion>
      </li>
    </>
  );
}
