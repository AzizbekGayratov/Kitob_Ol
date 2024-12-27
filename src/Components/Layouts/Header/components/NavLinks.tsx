import { Storage } from "../../../../Services";
import {
  NavLinkIcon1,
  NavLinkIcon2,
  activeNavBtn1,
  activeNavBtn2,
  NavLinkIcon3,
  NavLinkIcon4,
  activeNavBtn3,
  activeNavBtn4,
} from "../../../../assets/images/svg/HeaderNavLink";
import { NavLink, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectLanguage } from "Store/languageSlice/languageSlice";
import { toggleDropDown } from "Store/dropDownSlice/dropDownSlice";
import { DropDownType, languagesType } from "modules/Announcements/types/Types";
import { ProfileProps } from "modules/Profile/Profile";

interface Props {
  icon: JSX.Element;
  activeIcon: JSX.Element;
  href: string;
}

const navLinksData: Props[] = [
  {
    icon: (
      <div>
        <img src={NavLinkIcon1} alt="icon" />
      </div>
    ),
    activeIcon: (
      <div>
        <img src={activeNavBtn1} alt="icon" />
      </div>
    ),
    href: "/",
  },
  {
    icon: (
      <div>
        <img src={NavLinkIcon2} alt="icon" />
      </div>
    ),
    activeIcon: (
      <div>
        <img src={activeNavBtn2} alt="icon" />
      </div>
    ),
    href: "/1",
  },
  {
    icon: (
      <div>
        <img src={NavLinkIcon3} alt="icon" />
      </div>
    ),
    activeIcon: (
      <div>
        <img src={activeNavBtn3} alt="icon" />
      </div>
    ),
    href: "/profile",
  },
  {
    icon: (
      <div>
        <img src={NavLinkIcon4} alt="icon" />
      </div>
    ),
    activeIcon: (
      <div>
        <img src={activeNavBtn4} alt="icon" />
      </div>
    ),
    href: "/3",
  },
];

export default function NavLinks() {
  const location = useLocation();
  const isAuthorized = Storage.get("token");
  const isPublisher = Storage.get("publisher_token");
  

  const dispatch = useDispatch();
  const { language } = useSelector(
    (state: { language: { language: languagesType } }) => state.language
  );

  const { selected } = useSelector(
    (state: { dropDown: { selected: DropDownType | "" } }) => state.dropDown
  );

  const profileData = useSelector(
    (state: { project: { profile: ProfileProps } }) => state.project.profile
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
    <ul className="flex items-center gap-5">
      {navLinksData.map((item, index) => (
        <li key={index}>
          {item.href !== "/profile" && item.href !== "/3" ? (
            <button className="bg-primary hover:bg-opacity-40 transition-opacity bg-opacity-20 rounded">
              <NavLink
                to={item.href}
                className={({ isActive }) =>
                  isActive
                    ? "block py-4 bg-primary px-[27px] rounded"
                    : "block py-4 px-[27px] rounded"
                }
              >
                {location.pathname === item.href ? item.activeIcon : item.icon}
              </NavLink>
            </button>
          ) : item.href === "/3" ? (
            <>
              <button
                className="bg-primary hover:bg-opacity-40 transition-opacity bg-opacity-20 py-4 px-[27px] rounded"
                style={{ marginTop: "-6px" }}
                onClick={() => handleDropdownClick("language")}
              >
                {item.icon}
              </button>

              {selected === "language" && (
                <div className="absolute top-[82px] right-36 shadow-lg border rounded">
                  <div className="absolute rounded block bg-white size-24 rotate-45 left-20 z-0" />

                  <div
                    className={`z-50 flex flex-col gap-3 p-6 text-[#1C274C] font-Inter font-normal text-base rounded bg-white transition-opacity duration-500 ease-out ${
                      selected === "language"
                        ? "opacity-100"
                        : "opacity-0 pointer-events-none"
                    }`}
                  >
                    <button
                      className="bg-rootBg rounded z-20 py-3 px-2 w-52"
                      onClick={() => handleLanguageSelect("en")}
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
                    >
                      {language === "uz"
                        ? "O'zbek tili"
                        : language === "ru"
                        ? "Узбекский"
                        : "Uzbek"}
                    </button>
                  </div>
                </div>
              )}
            </>
          ) : (
            <>
              {isAuthorized || isPublisher ? (
                <button className="bg-primary hover:bg-opacity-40 transition-opacity bg-opacity-20 rounded">
                  <NavLink
                    to={item.href}
                    className={({ isActive }) =>
                      isActive
                        ? "block py-4 bg-primary px-[27px] rounded"
                        : "block py-4 px-[27px] rounded"
                    }
                  >
                    {location.pathname === item.href
                      ? item.activeIcon
                      : item.icon}
                  </NavLink>
                </button>
              ) : (
                <>
                  <button
                    className="bg-primary hover:bg-opacity-40 transition-opacity bg-opacity-20 py-4 px-[27px] rounded"
                    style={{ marginTop: "-6px" }}
                    onClick={() => handleDropdownClick("profile")}
                  >
                    {item.icon}
                  </button>
                  {selected === "profile" && (
                    <div className="absolute top-[82px] right-[242px] shadow-lg border rounded">
                      <div className="absolute rounded block bg-white size-24 rotate-45 left-20 z-0" />
                      <div
                        className={`z-20 flex flex-col gap-3 p-6 text-[#1C274C] font-Inter font-normal text-base rounded bg-white transition-opacity duration-500 ease-out ${
                          selected === "profile"
                            ? "opacity-100"
                            : "opacity-0 pointer-events-none"
                        }`}
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

                        <button
                          className="bg-rootBg rounded z-10"
                          // onClick={() => setShowDropdown(!showDropdown)}
                        >
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

                        <button
                          className="bg-rootBg rounded z-10"
                          // onClick={() => setShowDropdown(!showDropdown)}
                        >
                          <NavLink to="/login" className="block py-3 px-2 w-52">
                            {language === "uz"
                              ? "Do’kon yoki nashriyot"
                              : language === "ru"
                              ? "Издательство"
                              : "Publisher or Shop"}
                          </NavLink>
                        </button>
                      </div>
                    </div>
                  )}
                </>
              )}
            </>
          )}
        </li>
      ))}
    </ul>
  );
}
