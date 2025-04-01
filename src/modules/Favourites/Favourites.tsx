import api from "Services/Api";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Wrapper } from "./components";
import { safeParse } from "lib/utils";

export interface Book {
  user_id: string;
  id: string;
  book_id: string;
}

export default function Favourites() {
  const rawToken = window.localStorage.getItem("token");
  // const access_token = safeParse(rawToken)?.access_token;
  const refresh_token = safeParse(rawToken)?.refresh_token;

  const [favourites, setFavourites] = useState<Book[]>([]);
  const { language } = useSelector(
    (state: { language: { language: "uz" | "ru" | "en" } }) => state.language
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("/favourites/list", {
          method: "GET",
          params: {
            limit: 100,
            offset: 0,
          },
          // I did not write there `Bearer` cuz it had been a reason of error
          headers: {
            "Content-Type": "application/json",
            Authorization: `${refresh_token}`,
          },
        });

        if (response.data) {
          setFavourites(response?.data?.boooks);
          // await getFullData();
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      {rawToken ? (
        <Wrapper favourites={favourites} />
      ) : (
        <div className="min-h-[60vh] flex flex-col items-center justify-center">
          <h2 className="text-4xl font-Poppins font-semibold text-primary">
            {language === "uz"
              ? "Bo'limga kirish uchun foydalanuvchi sifatida avtorizatsiya qilishingiz kerak"
              : language === "ru"
              ? "Для использования этой страницы, вы должны войти как пользователь"
              : "To use this page, you must be logged in as a user"}
          </h2>
          <Link
            to="/authorization/phone"
            className="text-white hover:bg-opacity-75 transition-opacity font-Poppins font-semibold text-2xl mt-8 py-4 px-8 bg-primary rounded-full"
          >
            {language === "uz"
              ? "Kirish"
              : language === "ru"
              ? "Войти"
              : "Login"}
          </Link>
        </div>
      )}
    </div>
  );
}
