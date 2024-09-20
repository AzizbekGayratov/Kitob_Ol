import { Divider } from "@mui/material";
import { NavLink, Outlet } from "react-router-dom";

export default function Authorization() {
  return (
    <div className="h-screen flex sm:items-center justify-center">
      <div className="w-full bg-white rounded max-w-[600px]">
        <nav className="grid grid-cols-2 text-center">
          <NavLink
            to="/authorization/phone"
            className={({ isActive }) =>
              isActive
                ? "text-base leading-[19px] text-primary bg-primary bg-opacity-20 py-[18px]"
                : "text-base leading-[19px] text-primary py-[18px]"
            }
          >
            <button>Telefon raqam</button>
          </NavLink>
          <NavLink
            to="/authorization/email"
            className={({ isActive }) =>
              isActive
                ? "text-base leading-[19px] text-primary bg-primary bg-opacity-20 py-[18px]"
                : "text-base leading-[19px] text-primary py-[18px]"
            }
          >
            <button>Email</button>
          </NavLink>
        </nav>
        <Divider sx={{ opacity: 0.2, backgroundColor: "#2C3033" }} />
        <Outlet />{" "}
      </div>
    </div>
  );
}
