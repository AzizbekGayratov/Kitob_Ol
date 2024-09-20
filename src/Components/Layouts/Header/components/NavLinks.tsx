import {
  NavLinkIcon1,
  NavLinkIcon2,
  activeNavBtn1,
  activeNavBtn2,
  NavLinkIcon3,
  NavLinkIcon4,
  activeNavBtn3,
  activeNavBtn4,
} from "assets/images/svg/HeaderNavLink";
import { NavLink, useLocation } from "react-router-dom";

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

  return (
    <ul className="flex items-center gap-5">
      {navLinksData.map((item, _) => (
        <li key={_}>
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
        </li>
      ))}
    </ul>
  );
}
