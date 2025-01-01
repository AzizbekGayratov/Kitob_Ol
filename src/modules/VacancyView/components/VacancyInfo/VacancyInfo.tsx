import { AddDotsToValue } from "lib/utils";
import { VacancyProps } from "modules/Home/components/Vacancies";
import { useSelector } from "react-redux";

export default function VacancyInfo({ data }: { data: VacancyProps }) {
  const { language } = useSelector(
    (state: { language: { language: "uz" | "ru" | "en" } }) => state.language
  );

  const fullTimeUz =
    data?.working_types === "full_time"
      ? "To'liq ish kuni"
      : "Ma'lum soatlarda";
  const fullTimeEn =
    data?.working_types === "full_time" ? "Full time" : "Part time";
  const fullTimeRu =
    data?.working_types === "full_time"
      ? "Полная занятость"
      : "Частичная занятость";

  return (
    <div className="bg-white grow">
      <div className="px-4 py-5 sm:pl-[30px] sm:pr-10 sm:py-4 flex items-center justify-between">
        <h3 className="font-Poppins text-[15px] font-semibold leading-6">
          {language === "uz"
            ? "Ish haqida"
            : language === "ru"
            ? "О работе"
            : "About work"}
        </h3>
        <p className="sm:block hidden text-[16px] leading-6 text-opacity-70">
          {language === "uz"
            ? "Ko'rilgan:"
            : language === "ru"
            ? "Просмотрено:"
            : "Viewed:"}{" "}
          {data?.view_count}
        </p>
      </div>
      <div className="px-4 py-0 sm:pt-10 sm:pl-10 sm:pb-20">
        <div className="mb-10 sm:mb-7">
          <h5 className="text-[#2F2F2F] text-[13px] leading-4 mb-[14px]">
            {language === "uz"
              ? "Maosh"
              : language === "ru"
              ? "Зарплата"
              : "Salary"}
          </h5>
          <p className="text-xl font-bold leading-6">
            {AddDotsToValue(data?.salary_from, true)}{" - "}
            {AddDotsToValue(data?.salary_to, true)} uzs
          </p>
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-16">
          <li className="py-2">
            <h5 className="text-[#C1C1C1] text-[11px] leading-[15.5px]">
              {language === "uz"
                ? "Ish turi"
                : language === "ru"
                ? "Тип работы"
                : "Job type"}
            </h5>
            <p className="text-[#2F2F2F] font-semibold text-[15px] leading-[18px]">
              {language === "uz"
                ? fullTimeUz
                : language === "ru"
                ? fullTimeRu
                : fullTimeEn}
            </p>
          </li>
          <li className="py-2">
            <h5 className="text-[#C1C1C1] text-[11px] leading-[15.5px]">
              {language === "uz"
                ? "Ish tarzi"
                : language === "ru"
                ? "График работы"
                : "Work graphic"}
            </h5>
            <p className="text-[#2F2F2F] font-semibold text-[15px] leading-[18px] capitalize">
              {data?.working_styles}
            </p>
          </li>
        </ul>
      </div>
      <div className="sm:hidden px-4 py-10 flex items-center justify-end">
        <p className="text-[16px] leading-6 text-opacity-70">
          {language === "uz"
            ? "Ko'rilgan:"
            : language === "ru"
            ? "Просмотрено:"
            : "Viewed:"}{" "}
          {data?.view_count}
        </p>
      </div>
    </div>
  );
}
