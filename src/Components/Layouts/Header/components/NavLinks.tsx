import { useState } from "react";
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
import { Link, NavLink, useLocation } from "react-router-dom";

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
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <ul className="flex items-center gap-5">
      {navLinksData.map((item, _) => (
        <li key={_}>
          {item.href !== "/profile" ? (
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
          ) : (
            <>
              {isAuthorized ? (
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
                    onClick={() => setShowDropdown(!showDropdown)}
                  >
                    {item.icon}
                  </button>
                  {showDropdown && (
                    <div className="absolute top-[82px] right-[242px] shadow-lg border rounded">
                      <div className="absolute rounded block bg-white size-24 rotate-45 left-20 z-0" />
                      <div
                        className={`z-20 flex flex-col gap-3 p-6 text-[#1C274C] font-Inter font-normal text-base rounded bg-white transition-opacity duration-500 ease-out ${
                          showDropdown
                            ? "opacity-100"
                            : "opacity-0 pointer-events-none"
                        }`}
                      >
                        <div className="flex items-center gap-4 z-40">
                          <div className="rounded-full overflow-hidden">
                            <img src="https://picsum.photos/50" alt="user avatar" />
                          </div>
                          <div>
                            <h3 className="text-primary font-Poppins font-medium">Anonym user</h3>
                            <p className="text-[14px] font-medium leading-4 opacity-80">+998 xxx xx xx</p>
                          </div>
                        </div>

                        <button
                          className="bg-rootBg rounded z-10"
                          onClick={() => setShowDropdown(!showDropdown)}
                        >
                          <Link
                            to="/authorization/phone"
                            className="block py-3 px-2 w-52"
                          >
                            Avtorizatsiya
                          </Link>
                        </button>

                        <button
                          className="bg-rootBg rounded z-10"
                          onClick={() => setShowDropdown(!showDropdown)}
                        >
                          <Link
                            to="/login"
                            className="block py-3 px-2 w-52"
                          >
                            Do’kon yoki Nashriyot
                          </Link>
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
