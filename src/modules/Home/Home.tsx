import { NavLink, Outlet, useLocation } from "react-router-dom";
import { Filter, Hero, PaganitionComponent, VacancyFilter } from "./components";
import {
  ActiveBooksIcon,
  ActiveVacancyIcon,
  BooksIcon,
  VacancyIcon,
} from "assets/images/svg";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateProfileData } from "Store/profileSlice/profileSlice";

const Home = () => {
  const location = useLocation();
  const { access_token } = JSON.parse(localStorage.getItem("token") || "");
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);

    const getUserProfile = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_REACT_AUTH_URL}/auth/profile`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${access_token}`,
            },
          }
        );

        if (response.ok) {
          const data = await response.json();
          dispatch(updateProfileData(data));
          window.sessionStorage.setItem("profile", JSON.stringify(data));
        } else if (response.status === 401) {
          window.localStorage.removeItem("token");
        }
      } catch (error) {
        console.error(error);
      }
    };

    getUserProfile();
  }, []);

  return (
    <div className="container">
      <Hero />
      <section className="sm:px-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-10 mb-10">
          <button>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "bg-primary rounded sm:py-[19px] py-[14px] text-white text-[16px] leading-[19px] flex items-center justify-center flex-col gap-1"
                  : "bg-[#D9D9D9] rounded sm:py-[19px] py-[14px] text-[16px] leading-[19px]  flex items-center justify-center flex-col gap-1"
              }
              to="/"
            >
              {location.pathname === "/" ? (
                <img src={BooksIcon} alt="icon" className="hidden sm:block" />
              ) : (
                <img
                  src={ActiveBooksIcon}
                  alt="icon"
                  className="hidden sm:block"
                />
              )}
              Kitoblar
            </NavLink>
          </button>
          <button>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "bg-primary rounded sm:py-[19px] py-[14px] text-white text-[16px] leading-[19px]  flex items-center justify-center flex-col gap-1"
                  : "bg-[#D9D9D9] rounded sm:py-[19px] py-[14px] text-[16px] leading-[19px]  flex items-center justify-center flex-col gap-1"
              }
              to="/vacancies"
            >
              {location.pathname === "/" ? (
                <img src={VacancyIcon} alt="icon" className="hidden sm:block" />
              ) : (
                <img
                  src={ActiveVacancyIcon}
                  alt="icon"
                  className="hidden sm:block"
                />
              )}
              Ish
            </NavLink>
          </button>
        </div>
        {location.pathname === "/vacancies" ? <VacancyFilter /> : <Filter />}
        <Outlet />
        <PaganitionComponent />
      </section>
    </div>
  );
};

export default Home;
