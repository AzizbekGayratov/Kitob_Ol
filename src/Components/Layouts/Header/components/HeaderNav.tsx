import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";
import { useState } from "react";

export default function HeaderNav() {
  const [dropDownOpen, setDropDownOpen] = useState<boolean>(false);

  const handleDropDownOpen = () => {
    setDropDownOpen(!dropDownOpen);
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
        onClick={handleDropDownOpen}
      >
        E'lon berish
      </button>

      {dropDownOpen && (
        <div className="absolute top-[82px] right-[0px] shadow-lg border rounded">
          <div className="absolute rounded block bg-white size-24 rotate-45 left-20 z-0" />

          <div
            className={`z-50 flex flex-col gap-3 p-6 text-[#1C274C] font-Inter font-normal text-base rounded bg-white transition-opacity duration-500 ease-out ${
              dropDownOpen ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <button
              className="bg-rootBg rounded z-10"
              onClick={handleDropDownOpen}
            >
              <Link to="/announcements/book" className="block py-3 px-2 w-52">
                Kitob
              </Link>
            </button>

            <button
              className="bg-rootBg rounded z-10"
              onClick={handleDropDownOpen}
            >
              <Link
                to="/announcements/vacancy"
                className="block py-3 px-2 w-52"
              >
                Ish
              </Link>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
