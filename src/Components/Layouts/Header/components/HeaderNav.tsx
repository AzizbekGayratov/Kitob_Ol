import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";
import {  useSelector } from "react-redux";
import { Popover, PopoverContent, PopoverTrigger } from "Components/Ui/popover";

export default function HeaderNav() {
  const { language } = useSelector(
    (state: { language: { language: string } }) => state.language
  );


  return (
    <nav className="flex items-center gap-10 relative">
      <NavLinks />
      <Popover>
        <PopoverTrigger>
          <div
            style={
              //bu styleni navlinklar bilan btn bir tekis turmagani sabab yozdim
              { marginTop: "-6px" }
            }
            className="bg-primary rounded text-base leading-[19px] text-white py-[18px] px-[53px]"
            // onClick={handleDropdownClick}
          >
            {language === "uz"
              ? "E'lon berish"
              : language === "ru"
              ? "Объявление"
              : "Announce"}
          </div>
        </PopoverTrigger>
        <PopoverContent className="w-auto">
          <div
            className={`z-50 flex flex-col gap-3 text-[#1C274C] font-Inter font-normal text-base rounded bg-white transition-opacity duration-500 ease-out`}
          >
            <button
              className="bg-rootBg rounded z-10"
            >
              <Link to="/announcements/book" className="block py-3 px-2 w-52">
                {language === "uz"
                  ? "Kitob"
                  : language === "ru"
                  ? "Книга"
                  : "Book"}
              </Link>
            </button>

            <button
              className="bg-rootBg rounded z-10"
            >
              <Link
                to="/announcements/vacancy"
                className="block py-3 px-2 w-52"
              >
                {language === "uz"
                  ? "Ish"
                  : language === "ru"
                  ? "Вакансия"
                  : "Vacancy"}
              </Link>
            </button>
          </div>
        </PopoverContent>
      </Popover>
    </nav>
  );
}
