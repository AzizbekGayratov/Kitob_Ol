import { Storage } from "../../../../Services";
import {
  NavLinkIcon3,
  NavLinkIcon4,
  activeNavBtn3,
  // activeNavBtn4,
} from "../../../../assets/images/svg/HeaderNavLink";
import { NavLink, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectLanguage } from "Store/languageSlice/languageSlice";
import { languagesType } from "modules/Announcements/types/Types";
import { ProfileProps } from "modules/Profile/Profile";
import { TfiHome } from "react-icons/tfi";
import { IoIosHeartEmpty } from "react-icons/io";
import { Popover, PopoverContent, PopoverTrigger } from "Components/Ui/popover";

export default function NavLinks() {
  const location = useLocation();
  const isAuthorized = Storage.get("token");
  const isPublisher = Storage.get("publisher_token");

  const dispatch = useDispatch();
  const { language } = useSelector(
    (state: { language: { language: languagesType } }) => state.language
  );

  const profileData = useSelector(
    (state: { project: { profile: ProfileProps } }) => state.project.profile
  );

  const handleLanguageSelect = (e: string) => {
    localStorage.setItem("language", e);

    dispatch(selectLanguage(e));
  };

  return (
    <ul className="flex items-center gap-5">
      <li>
        <button className="bg-primary hover:bg-opacity-40 transition-opacity bg-opacity-20 rounded">
          <NavLink
            to="/"
            className={
              location.pathname === "/" || location.pathname === "/vacancies"
                ? "block py-4 bg-primary px-[27px] rounded"
                : "block py-4 px-[27px] rounded"
            }
          >
            {location.pathname === "/" || location.pathname === "/vacancies" ? (
              <div>
                <TfiHome className="w-6 h-6 text-white" />
              </div>
            ) : (
              <div>
                <TfiHome className="w-6 h-6 text-[rgb(28, 39, 77)]" />
              </div>
            )}
          </NavLink>
        </button>
      </li>

      <li>
        <button className="bg-primary hover:bg-opacity-40 transition-opacity bg-opacity-20 rounded">
          <NavLink
            to="/favourites"
            className={({ isActive }) =>
              isActive
                ? "block py-4 bg-primary px-[27px] rounded"
                : "block py-4 px-[27px] rounded"
            }
          >
            {location.pathname === "/favourites" ? (
              <div>
                <IoIosHeartEmpty className="w-6 h-6 text-white" />
              </div>
            ) : (
              <div>
                <IoIosHeartEmpty className="w-6 h-6 text-[rgb(28, 39, 77)]" />
              </div>
            )}
          </NavLink>
        </button>
      </li>

      <li className="">
        <Popover>
          <PopoverTrigger>
            <li>
              {isAuthorized ? (
                <div className="bg-primary hover:bg-opacity-40 transition-opacity bg-opacity-20 rounded">
                  <NavLink
                    to="/profile"
                    className={
                      location.pathname.includes("/profile")
                        ? "block py-4 bg-primary px-[27px] rounded"
                        : "block py-4 px-[27px] rounded"
                    }
                  >
                    {location.pathname.includes("/profile") ? (
                      <div>
                        <img src={activeNavBtn3} alt="icon" />
                      </div>
                    ) : (
                      <div>
                        <img src={NavLinkIcon3} alt="icon" />
                      </div>
                    )}
                  </NavLink>
                </div>
              ) : isPublisher ? (
                <div className="bg-primary hover:bg-opacity-40 transition-opacity bg-opacity-20 rounded">
                  <NavLink
                    to="/profile/publisher"
                    className={
                      location.pathname.includes("/profile")
                        ? "block py-4 bg-primary px-[27px] rounded"
                        : "block py-4 px-[27px] rounded"
                    }
                  >
                    {location.pathname.includes("/profile") ? (
                      <div>
                        <img src={activeNavBtn3} alt="icon" />
                      </div>
                    ) : (
                      <div>
                        <img src={NavLinkIcon3} alt="icon" />
                      </div>
                    )}
                  </NavLink>
                </div>
              ) : (
                <>
                  <div className="bg-primary hover:bg-opacity-40 transition-opacity bg-opacity-20 py-4 px-[27px] rounded">
                    <div>
                      <img src={NavLinkIcon3} alt="icon" />
                    </div>
                  </div>
                </>
              )}
            </li>
          </PopoverTrigger>
          <PopoverContent className="w-auto">
            <div
              className={`z-20 flex flex-col gap-3 text-[#1C274C] font-Inter font-normal text-base rounded bg-white transition-opacity duration-500 ease-out 
                `}
            >
              <div className="flex items-center gap-4 z-40">
                <div className="rounded-full overflow-hidden">
                  <img
                    src={profileData.image_url}
                    alt="user avatar"
                    className="h-[50px]"
                  />
                </div>
                <div>
                  <h3 className="text-primary font-Poppins font-medium">
                    {language === "uz"
                      ? "Noma'lum"
                      : language === "ru"
                      ? "Неизвестный"
                      : "Anonym user"}
                  </h3>
                  <p className="text-[14px] font-medium leading-4 opacity-80">
                    +998 xxx xx xx
                  </p>
                </div>
              </div>

              <button className="bg-rootBg rounded z-10">
                <NavLink
                  to="/authorization/phone"
                  className="block py-3 px-2 w-52"
                >
                  {language === "uz"
                    ? "Avtorizatsiya"
                    : language === "ru"
                    ? "Авторизация"
                    : "Authorization"}
                </NavLink>
              </button>

              <button className="bg-rootBg rounded z-10">
                <NavLink to="/login" className="block py-3 px-2 w-52">
                  {language === "uz"
                    ? "Do’kon yoki nashriyot"
                    : language === "ru"
                    ? "Издательство"
                    : "Publisher or Shop"}
                </NavLink>
              </button>
            </div>
          </PopoverContent>
        </Popover>
      </li>

      <li>
        <Popover>
          <PopoverTrigger>
            <div className="bg-primary hover:bg-opacity-40 transition-opacity bg-opacity-20 py-4 px-[27px] rounded">
              <div>
                <img src={NavLinkIcon4} alt="icon" />
              </div>
            </div>
          </PopoverTrigger>
          <PopoverContent className="w-auto">
            <div
              className={`z-50 flex flex-col gap-3  text-[#1C274C] font-Inter font-normal text-base rounded bg-white transition-opacity duration-500 ease-out`}
            >
              <button
                className="bg-rootBg rounded z-20 py-3 px-2 w-52"
                onClick={() => handleLanguageSelect("en")}
                style={
                  language === "en"
                    ? { backgroundColor: "#2C3033", color: "white" }
                    : {}
                }
              >
                {language === "uz"
                  ? "Ingliz tili"
                  : language === "ru"
                  ? "Английский"
                  : "English"}
              </button>

              <button
                className="bg-rootBg rounded z-20 py-3 px-2 w-52"
                onClick={() => handleLanguageSelect("ru")}
                style={
                  language === "ru"
                    ? { backgroundColor: "#2C3033", color: "white" }
                    : {}
                }
              >
                {language === "uz"
                  ? "Rus tili"
                  : language === "ru"
                  ? "Русский"
                  : "Russian"}
              </button>

              <button
                className="bg-rootBg rounded z-10 py-3 px-2 w-52"
                onClick={() => handleLanguageSelect("uz")}
                style={
                  language === "uz"
                    ? { backgroundColor: "#2C3033", color: "white" }
                    : {}
                }
              >
                {language === "uz"
                  ? "O'zbek tili"
                  : language === "ru"
                  ? "Узбекский"
                  : "Uzbek"}
              </button>
            </div>
          </PopoverContent>
        </Popover>
      </li>
    </ul>
  );
}
