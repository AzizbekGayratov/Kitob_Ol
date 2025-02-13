import {
  menuCloseBtn,
  menuLogo,
} from "../../../../assets/images/svg/HeaderNavLink";
import { Link } from "react-router-dom";
import Accordation from "./Accordation";
import AnnouncementButton from "./AnnouncementButton";
import { useSelector } from "react-redux";
import { TfiHome } from "react-icons/tfi";
import { IoIosHeartEmpty } from "react-icons/io";

export default function Menu({
  onCloseBtn,
}: {
  onCloseBtn: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const { language } = useSelector(
    (state: { language: { language: "uz" | "ru" | "en" } }) => state.language
  );
  return (
    <>
      <div className="flex items-center justify-between px-4 pt-1 pb-[10px]">
        <Link
          to="/"
          className="max-w-[70px] sm:max-w-[100px] md:max-w-[150px] -ml-3"
        >
          <img src={menuLogo} alt="kitobol logosi" />
        </Link>
        <button className="p-3" onClick={() => onCloseBtn(false)}>
          <img src={menuCloseBtn} alt="close button" />
        </button>
      </div>
      <nav>
        <ul>
          <li>
            <AnnouncementButton />
          </li>
          <li className="p-4">
            <button>
              <Link
                to="/"
                className="flex items-center gap-3 text-white text-sm"
              >
                <TfiHome className="w-6 h-6 text-white" />
                {language === "uz"
                  ? "Asosiy sahifa"
                  : language === "ru"
                  ? "Главная страница"
                  : "Home"}
              </Link>
            </button>
          </li>
          <li className="p-4">
            <button>
              <Link
                to="/favourites"
                className="flex items-center gap-3 text-white text-sm"
              >
                <IoIosHeartEmpty className="w-6 h-6 text-white" />
                {language === "uz"
                  ? "Saralanganlar"
                  : language === "ru"
                  ? "Избранные"
                  : "Favourites"}
              </Link>
            </button>
          </li>
          <Accordation />
        </ul>
      </nav>
    </>
  );
}
