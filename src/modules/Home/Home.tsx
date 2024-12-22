import { NavLink, Outlet, useLocation } from "react-router-dom";
import { Filter, Hero, PaganitionComponent, VacancyFilter } from "./components";
import {
  ActiveBooksIcon,
  ActiveVacancyIcon,
  BooksIcon,
  VacancyIcon,
} from "assets/images/svg";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const Home = () => {
  const location = useLocation();
  const { language } = useSelector(
    (state: { language: { language: "uz" | "ru" | "en" } }) => state.language
  );

  useEffect(() => {
    window.scrollTo(0, 0);
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
              {language === "uz"
                ? "Kitoblar"
                : language === "ru"
                ? "Книги"
                : "Books"}
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
              {language === "uz"
                ? "Ish"
                : language === "ru"
                ? "Вакансия"
                : "Vacancy"}
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
