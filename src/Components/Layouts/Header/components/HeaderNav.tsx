import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";

export default function HeaderNav() {
  return (
    <nav className="flex items-center gap-10">
      <NavLinks />
      <button
        style={
          //bu styleni navlinklar bilan btn bir tekis turmagani sabab yozdim
          { marginTop: "-6px" }
        }
        className="bg-primary rounded text-base leading-[19px] text-white"
      >
        <Link to="/elon" className="block py-[18px] px-[53px]">
          E'lon berish
        </Link>
      </button>
    </nav>
  );
}
