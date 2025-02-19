import {
  ActiveBooksIcon,
  ActiveVacancyIcon,
  BooksIcon,
  VacancyIcon,
} from "assets/images/svg";
import { useState } from "react";
import { useSelector } from "react-redux";
import { ListOfBooks, ListOfVacancies } from ".";

export interface Book {
  author_name: string;
  author_surname: string;
  book_id: string;
  category_name: {
    en: string;
    ru: string;
    uz: string;
  };
  city_name: {
    en: string;
    ru: string;
    uz: string;
  };
  cover_format: string;
  cover_type: string;
  created_at: string;
  description: string;
  district_name: string;
  id: string;
  image_url: string;
  img_url: string;
  is_new: boolean;
  language_name: {
    en: string;
    ru: string;
    uz: string;
  };
  price: number;
  published_year: string;
  publisher_name: string;
  seller_email: string;
  seller_img: string;
  seller_name: string;
  seller_phone_number: string;
  shitrix_code: string;
  stock: number;
  title: {
    en: string;
    ru: string;
    uz: string;
  };
  total_pages: number;
  translator_name: string;
  translator_surname: string;
  user_id: string;
  vacancy_id: string;
  view_count: number;
  writing_type: string;
}

export interface Vacancy {
  book_id: string;
  id: string;
  phone_number: string;
  publisher_id: string;
  publisher_image: string;
  salary_from: number;
  salary_to: number;
  status: string;
  user_id: string;
  vacancy_city_id: string;
  vacancy_city_name: {
    en: string;
    ru: string;
    uz: string;
  };
  vacancy_created_at: string;
  vacancy_description: string;
  vacancy_district_id: string;
  vacancy_id: string;
  vacancy_publisher_name: string;
  vacancy_title: string;
  vacancy_view_count: number;
  working_styles: string;
  working_types: string;
}

export default function Wrapper({ favourites }: { favourites: any }) {
  const [showFavouritedBooks, setShowFavouritedBooks] = useState(true);

  const booksList = favourites.filter((item: Book) => {
    if (item.vacancy_id.includes("undefined")) {
      return item.book_id;
    }
  });
  const vacancyList = favourites.filter((item: Vacancy) => {
    if (item.book_id.includes("undefined")) {
      return item.vacancy_id;
    }
  });

  const { language } = useSelector(
    (state: { language: { language: "uz" | "ru" | "en" } }) => state.language
  );

  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-10">
        <button
          onClick={() => setShowFavouritedBooks(true)}
          className={
            showFavouritedBooks
              ? "bg-primary rounded sm:py-[19px] py-[14px] text-white text-[16px] leading-[19px] flex items-center justify-center flex-col gap-1"
              : "bg-[#D9D9D9] rounded sm:py-[19px] py-[14px] text-[16px] leading-[19px]  flex items-center justify-center flex-col gap-1"
          }
        >
          {showFavouritedBooks ? (
            <img src={BooksIcon} alt="icon" className="hidden sm:block" />
          ) : (
            <img src={ActiveBooksIcon} alt="icon" className="hidden sm:block" />
          )}
          {language === "uz"
            ? "Kitoblar"
            : language === "ru"
            ? "Книги"
            : "Books"}
        </button>
        <button
          onClick={() => setShowFavouritedBooks(false)}
          className={
            !showFavouritedBooks
              ? "bg-primary rounded sm:py-[19px] py-[14px] text-white text-[16px] leading-[19px] flex items-center justify-center flex-col gap-1"
              : "bg-[#D9D9D9] rounded sm:py-[19px] py-[14px] text-[16px] leading-[19px]  flex items-center justify-center flex-col gap-1"
          }
        >
          {showFavouritedBooks ? (
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
        </button>
      </div>
      {showFavouritedBooks ? (
        <ListOfBooks booksList={booksList} />
      ) : (
        <ListOfVacancies vacanciesList={vacancyList} />
      )}
    </section>
  );
}
