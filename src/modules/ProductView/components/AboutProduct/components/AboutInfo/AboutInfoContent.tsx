import { Book } from "modules/ProductView/ProductView";
import { useSelector } from "react-redux";

export default function AboutInfoContent({ data }: { data: Book }) {
  const { language } = useSelector(
    (state: { language: { language: "uz" | "ru" | "en" } }) => state.language
  );

  return (
    <div className="sm:pt-10 pt-0 sm:px-10 px-4 pb-[50px]">
      <div className="flex flex-col gap-[14px] sm:mb-[28px] mb-10">
        <span className="text-[#2F2F2F] text-[13px] leading-4">Narx</span>
        <p className="text-xl leading-6 font-bold">{data.price} so'm</p>
      </div>
      <ul className="grid xl:grid-cols-3 gap-y-4 sm:gap-x-5 gap-x-10 md:grid-cols-4 grid-cols-2">
        <li className="flex flex-col py-2 gap-1">
          <span className="text-[#2F2F2F] sm:text-[13px] text-[11px] leading-4">
            Muallif
          </span>
          <p className="sm:text-xl text-sm sm:leading-6 leading-4 font-bold">
            {data.author_name} {data.author_surname}
          </p>
        </li>
        <li className="flex flex-col py-2 gap-1">
          <span className="text-[#2F2F2F] sm:text-[13px] text-[11px] leading-4">
            Tarjimon
          </span>
          <p className="sm:text-xl text-sm sm:leading-6 leading-4 font-bold">
            {data.translator_name} {data.translator_surname}
          </p>
        </li>
        <li className="flex flex-col py-2 gap-1">
          <span className="text-[#2F2F2F] sm:text-[13px] text-[11px] leading-4">
            Tili
          </span>
          <p className="sm:text-xl text-sm sm:leading-6 leading-4 font-bold">
            {data.language_name[language]}
          </p>
        </li>
        <li className="flex flex-col py-2 gap-1">
          <span className="text-[#2F2F2F] sm:text-[13px] text-[11px] leading-4">
            Kategoriya
          </span>
          <p className="sm:text-xl text-sm sm:leading-6 leading-4 font-bold">
            {data.category_name[language]}
          </p>
        </li>
        <li className="flex flex-col py-2 gap-1">
          <span className="text-[#2F2F2F] sm:text-[13px] text-[11px] leading-4">
            ISBN(ID)
          </span>
          <p className="sm:text-xl text-sm sm:leading-6 leading-4 font-bold">
            {data.shitrix_code}
          </p>
        </li>
        <li className="flex flex-col py-2 gap-1">
          <span className="text-[#2F2F2F] sm:text-[13px] text-[11px] leading-4">
            Nashriyot
          </span>
          <p className="sm:text-xl text-sm sm:leading-6 leading-4 font-bold">
            {data.publisher_name}
          </p>
        </li>
        <li className="flex flex-col py-2 gap-1">
          <span className="text-[#2F2F2F] sm:text-[13px] text-[11px] leading-4">
            Muqova
          </span>
          <p className="sm:text-xl text-sm sm:leading-6 leading-4 font-bold">
            {data.cover_type}
          </p>
        </li>
        <li className="flex flex-col py-2 gap-1">
          <span className="text-[#2F2F2F] sm:text-[13px] text-[11px] leading-4">
            Safiha
          </span>
          <p className="sm:text-xl text-sm sm:leading-6 leading-4 font-bold">
            {data.total_pages}
          </p>
        </li>
        <li className="flex flex-col py-2 gap-1">
          <span className="text-[#2F2F2F] sm:text-[13px] text-[11px] leading-4">
            Yozuvi
          </span>
          <p className="sm:text-xl text-sm sm:leading-6 leading-4 font-bold">
            {data.writing_type}
          </p>
        </li>
        <li className="flex flex-col py-2 gap-1">
          <span className="text-[#2F2F2F] sm:text-[13px] text-[11px] leading-4">
            Holati
          </span>
          <p className="sm:text-xl text-sm sm:leading-6 leading-4 font-bold">
            {data.is_new ? "Yangi" : "Foydalanilgan"}
          </p>
        </li>
        <li className="flex flex-col py-2 gap-1">
          <span className="text-[#2F2F2F] sm:text-[13px] text-[11px] leading-4">
            Qog'oz formati
          </span>
          <p className="sm:text-xl text-sm sm:leading-6 leading-4 font-bold">
            {data.cover_format}
          </p>
        </li>
        <li className="flex flex-col py-2 gap-1">
          <span className="text-[#2F2F2F] sm:text-[13px] text-[11px] leading-4">
            Yili
          </span>
          <p className="sm:text-xl text-sm sm:leading-6 leading-4 font-bold">
            {data.published_year}
          </p>
        </li>
      </ul>
      <p className="sm:hidden text-[16px] leading-6 mt-5 text-right">
        Ko'rilgan: {data.view_count}
      </p>
    </div>
  );
}
