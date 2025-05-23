import { Divider } from "@mui/material";
import { Storage } from "../../../Services";
import { useEffect } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function PublisherPasswordForget() {
  const navigate = useNavigate();
  const { language } = useSelector(
    (state: { language: { language: "uz" | "ru" | "en" } }) => state.language
  );

  const rawProfile = sessionStorage.getItem("profile");
  const profile = rawProfile ? JSON.parse(rawProfile) : null;

  useEffect(() => {
    if (Storage.get("publisher_token") && profile) {
      navigate("/");
    }
  }, []);

  return (
    <div className="h-screen flex sm:items-center justify-center">
      <div className="w-full bg-white rounded max-w-[600px]">
        <nav className="grid grid-cols-2 text-center">
          <NavLink
            to="/password/reset/phone"
            className={({ isActive }) =>
              isActive
                ? "text-base leading-[19px] text-primary bg-primary bg-opacity-20 py-[18px]"
                : "text-base leading-[19px] text-primary py-[18px]"
            }
          >
            <button>
              {language === "uz"
                ? "Telefon raqami"
                : language === "ru"
                ? "Номер телефона"
                : "Phone number"}
            </button>
          </NavLink>
          <NavLink
            to="/password/reset/email"
            className={({ isActive }) =>
              isActive
                ? "text-base leading-[19px] text-primary bg-primary bg-opacity-20 py-[18px]"
                : "text-base leading-[19px] text-primary py-[18px]"
            }
          >
            <button>
              {language === "uz"
                ? "Email"
                : language === "ru"
                ? "Электронная почта"
                : "Email"}
            </button>
          </NavLink>
        </nav>
        <Divider sx={{ opacity: 0.2, backgroundColor: "#2C3033" }} />
        <Outlet />{" "}
      </div>
    </div>
  );
}
