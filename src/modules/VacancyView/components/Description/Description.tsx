import { VacancyProps } from "modules/Home/components/Vacancies";
import { useSelector } from "react-redux";
export default function Description({ data }: { data: VacancyProps }) {
  console.log(data);
  const { language } = useSelector(
    (state: { language: { language: "uz" | "ru" | "en" } }) => state.language
  );

  return (
    <div className="bg-white mt-10 mb-10 sm:mb-[100px]">
      <div className="px-4 sm:px-10 py-5 sm:py-6 border-b border-b-[rgba(44,48,51,0.5)]">
        <h3 className="text-[#2C3033] text-xl font-bold leading-6">
          {language === "uz"
            ? "Tavsif"
            : language === "ru"
            ? "Описание"
            : "Description"}
        </h3>
      </div>
      <div className="pt-5 sm:pt-[28px] px-4 sm:px-10 pb-10 sm:pb-[60px]">
        <p className="opacity-80 sm:text-[18px] sm:leading-[28px] text-[15px] leading-6 overflow-clip">
          {data?.description}
        </p>
      </div>
    </div>
  );
}
