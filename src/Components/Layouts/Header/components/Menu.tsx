import {
  activeNavBtn1,
  activeNavBtn2,
  menuCloseBtn,
  menuLogo,
} from "../../../../assets/images/svg/HeaderNavLink";
import { Link } from "react-router-dom";
import Accordation from "./Accordation";

export default function Menu({
  onCloseBtn,
}: {
  onCloseBtn: React.Dispatch<React.SetStateAction<boolean>>;
}) {
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
          <li className="p-4">
            <button className="text-white text-sm">
              <Link to="/elon" className="block py-[2px] px-2">
                E'lon berish
              </Link>
            </button>
          </li>
          <li className="p-4">
            <button>
              <Link
                to="/"
                className="flex items-center gap-3 text-white text-sm"
              >
                <img src={activeNavBtn1} alt="icon" />
                Saqlanganlar
              </Link>
            </button>
          </li>
          <li className="p-4">
            <button>
              <Link
                to="/1"
                className="flex items-center gap-3 text-white text-sm"
              >
                <img src={activeNavBtn2} alt="icon" />
                Bildirishnomalar
              </Link>
            </button>
          </li>
          <Accordation />
        </ul>
      </nav>
    </>
  );
}
