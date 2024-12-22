import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";
import { useDispatch, useSelector } from "react-redux";
import { DropDownType } from "modules/Announcements/types/Types";
import { toggleDropDown } from "Store/dropDownSlice/dropDownSlice";

export default function HeaderNav() {
  const dispatch = useDispatch();
  const { selected } = useSelector(
    (state: { dropDown: { selected: DropDownType | "" } }) => state.dropDown
  );
  const { language } = useSelector(
    (state: { language: { language: string } }) => state.language
  );

  const handleDropdownClick = () => {
    dispatch(toggleDropDown("announcement"));
  };

  return (
    <nav className="flex items-center gap-10 relative">
      <NavLinks />
      <button
        style={
          //bu styleni navlinklar bilan btn bir tekis turmagani sabab yozdim
          { marginTop: "-6px" }
        }
        className="bg-primary rounded text-base leading-[19px] text-white py-[18px] px-[53px]"
        onClick={handleDropdownClick}
      >
        {language === "uz"
          ? "E'lon berish"
          : language === "ru"
          ? "Объявление"
          : "Announce"}
      </button>

      {selected === "announcement" && (
        <div className="absolute top-[82px] right-[0px] shadow-lg border rounded">
          <div className="absolute rounded block bg-white size-24 rotate-45 left-20 z-0" />

          <div
            className={`z-50 flex flex-col gap-3 p-6 text-[#1C274C] font-Inter font-normal text-base rounded bg-white transition-opacity duration-500 ease-out ${
              selected === "announcement"
                ? "opacity-100"
                : "opacity-0 pointer-events-none"
            }`}
          >
            <button
              className="bg-rootBg rounded z-10"
              onClick={handleDropdownClick}
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
              onClick={handleDropdownClick}
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
        </div>
      )}
    </nav>
  );
}
