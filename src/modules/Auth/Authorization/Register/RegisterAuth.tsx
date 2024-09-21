import { Divider } from "@mui/material";
import { Storage } from "../../../../Services";
import { useEffect } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";

export default function RegisterAuth() {
  const navigate = useNavigate();

  useEffect(() => {
    if (Storage.get("token")) {
      navigate("/");
    }
  });

  return (
    <div className="h-screen flex sm:items-center justify-center">
      <div className="w-full bg-white rounded max-w-[600px]">
        <nav className="grid grid-cols-2 text-center">
          <NavLink
            to="/register/phone"
            className={({ isActive }) =>
              isActive
                ? "text-base leading-[19px] text-primary bg-primary bg-opacity-20 py-[18px]"
                : "text-base leading-[19px] text-primary py-[18px]"
            }
          >
            <button>Telefon raqam</button>
          </NavLink>
          <NavLink
            to="/register/email"
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
