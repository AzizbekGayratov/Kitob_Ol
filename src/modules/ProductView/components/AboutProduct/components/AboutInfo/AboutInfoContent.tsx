import { ToCyrillic } from "lib/utils";
import { Book } from "modules/ProductView/ProductView";
import { useSelector } from "react-redux";

export default function AboutInfoContent({ data }: { data: Book }) {
  const { language } = useSelector(
    (state: { language: { language: "uz" | "ru" | "en" } }) => state.language
  );

  // Xolati
  const isNewTrue =
    language === "uz" ? "Yangi" : language === "ru" ? "Новое" : "New";
  const isNewFalse =
    language === "uz" ? "Eski" : language === "ru" ? "Старое" : "Old";

  // cover
  const hard =
    language === "uz" ? "Qattiq" : language === "ru" ? "Жесткий" : "Hard";
  const soft =
    language === "uz" ? "Yumshoq" : language === "ru" ? "Мягкий" : "Soft";

  // type
  const latin =
    language === "uz" ? "Lotin" : language === "ru" ? "Латинский" : "Latin";
  const cyrillic =
    language === "uz"
      ? "Kirilcha"
      : language === "ru"
      ? "Кириллица"
      : "Cyrillic";
  return (
    <div className="sm:pt-10 pt-0 sm:px-10 px-4 pb-[50px]">
      <div className="flex flex-col gap-[14px] sm:mb-[28px] mb-10">
        <span className="text-[#2F2F2F] text-[13px] leading-4">
          {language === "uz" ? "Narx" : language === "ru" ? "Цена" : "Price"}
        </span>
        <p className="text-xl leading-6 font-bold">
          {String(data?.price).replace(/(\d)(?=(\d{3})+$)/g, "$1.")}
          {""}{" "}
          {language === "uz" ? "so'm" : language === "ru" ? "сум" : "soums"}
        </p>
      </div>
      <ul className="grid xl:grid-cols-3 gap-y-4 sm:gap-x-5 gap-x-10 md:grid-cols-4 grid-cols-2">
        <li className="flex flex-col py-2 gap-1">
          <span className="text-[#2F2F2F] sm:text-[13px] text-[11px] leading-4">
            {language === "uz"
              ? "Muallif"
              : language === "ru"
              ? "Автор"
              : "Author"}
          </span>
          <p className="sm:text-xl text-sm sm:leading-6 leading-4 font-bold capitalize">
            {language === "ru"
              ? ToCyrillic(data?.author_name)
              : data?.author_name}{" "}
            {language === "ru"
              ? ToCyrillic(data?.author_surname)
              : data?.author_surname}
          </p>
        </li>
        <li className="flex flex-col py-2 gap-1">
          <span className="text-[#2F2F2F] sm:text-[13px] text-[11px] leading-4">
            {language === "uz"
              ? "Tarjimon"
              : language === "ru"
              ? "Переводчик"
              : "Translator"}
          </span>
          <p className="sm:text-xl text-sm sm:leading-6 leading-4 font-bold capitalize">
            {language === "ru" ? ToCyrillic(data?.translator_name) : data?.translator_name}{" "}
            {language === "ru" ? ToCyrillic(data?.translator_surname) : data?.translator_surname}
          </p>
        </li>
        <li className="flex flex-col py-2 gap-1">
          <span className="text-[#2F2F2F] sm:text-[13px] text-[11px] leading-4">
            {language === "uz"
              ? "Til"
              : language === "ru"
              ? "Язык"
              : "Language"}
          </span>
          <p className="sm:text-xl text-sm sm:leading-6 leading-4 font-bold">
            {data?.language_name[language]}
          </p>
        </li>
        <li className="flex flex-col py-2 gap-1">
          <span className="text-[#2F2F2F] sm:text-[13px] text-[11px] leading-4">
            {language === "uz"
              ? "Kategoriya"
              : language === "ru"
              ? "Категория"
              : "Category"}
          </span>
          <p className="sm:text-xl text-sm sm:leading-6 leading-4 font-bold">
            {data?.category_name[language]}
          </p>
        </li>
        <li className="flex flex-col py-2 gap-1">
          <span className="text-[#2F2F2F] sm:text-[13px] text-[11px] leading-4">
            ISBN(ID)
          </span>
          <p className="sm:text-xl text-sm sm:leading-6 leading-4 font-bold">
            {data?.shitrix_code}
          </p>
        </li>
        <li className="flex flex-col py-2 gap-1">
          <span className="text-[#2F2F2F] sm:text-[13px] text-[11px] leading-4">
            {language === "uz"
              ? "Nashriyot"
              : language === "ru"
              ? "Издательство"
              : "Publisher"}
          </span>
          <p className="sm:text-xl text-sm sm:leading-6 leading-4 font-bold">
            {data?.publisher_name}
          </p>
        </li>
        <li className="flex flex-col py-2 gap-1">
          <span className="text-[#2F2F2F] sm:text-[13px] text-[11px] leading-4">
            {language === "uz"
              ? "Muqova"
              : language === "ru"
              ? "Обложка"
              : "Cover"}
          </span>
          <p className="sm:text-xl text-sm sm:leading-6 leading-4 font-bold capitalize">
            {data?.cover_type === "hard" ? hard : soft}
          </p>
        </li>
        <li className="flex flex-col py-2 gap-1">
          <span className="text-[#2F2F2F] sm:text-[13px] text-[11px] leading-4">
            {language === "uz"
              ? "Sahifa soni"
              : language === "ru"
              ? "Количество страниц"
              : "Number of pages"}
          </span>
          <p className="sm:text-xl text-sm sm:leading-6 leading-4 font-bold">
            {data?.total_pages}
          </p>
        </li>
        <li className="flex flex-col py-2 gap-1">
          <span className="text-[#2F2F2F] sm:text-[13px] text-[11px] leading-4">
            {language === "uz"
              ? "Yozuvi"
              : language === "ru"
              ? "Тип написания"
              : "Type of writing"}
          </span>
          <p className="sm:text-xl text-sm sm:leading-6 leading-4 font-bold capitalize">
            {data?.writing_type === "latin" ? latin : cyrillic}
          </p>
        </li>
        <li className="flex flex-col py-2 gap-1">
          <span className="text-[#2F2F2F] sm:text-[13px] text-[11px] leading-4">
            {language === "uz"
              ? "Holati"
              : language === "ru"
              ? "Состояние"
              : "Condition"}
          </span>
          <p className="sm:text-xl text-sm sm:leading-6 leading-4 font-bold">
            {data?.is_new ? isNewTrue : isNewFalse}
          </p>
        </li>
        <li className="flex flex-col py-2 gap-1">
          <span className="text-[#2F2F2F] sm:text-[13px] text-[11px] leading-4">
            {language === "uz"
              ? "Qog'oz formati"
              : language === "ru"
              ? "Формат обложки"
              : "Cover format"}
          </span>
          <p className="sm:text-xl text-sm sm:leading-6 leading-4 font-bold">
            {data?.cover_format}
          </p>
        </li>
        <li className="flex flex-col py-2 gap-1">
          <span className="text-[#2F2F2F] sm:text-[13px] text-[11px] leading-4">
            {language === "uz" ? "Yili" : language === "ru" ? "Год" : "Year"}
          </span>
          <p className="sm:text-xl text-sm sm:leading-6 leading-4 font-bold">
            {data?.published_year}
          </p>
        </li>
      </ul>
      <p className="sm:hidden text-[16px] leading-6 mt-5 text-right">
        {language === "uz"
          ? "Ko'rilgan:"
          : language === "ru"
          ? "Просмотрено:"
          : "Viewed"}{" "}
        {data?.view_count}
      </p>
    </div>
  );
}
