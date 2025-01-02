import { NotFoundItems } from "Components/Common";
import { VacancyProps } from "modules/Home/components/Vacancies";
import { useSelector } from "react-redux";
import VacancyCard from "./components/VacancyCard";

export default function PublisherList({ data }: { data: VacancyProps[] }) {
  const { language } = useSelector(
    (state: { language: { language: "uz" | "ru" | "en" } }) => state.language
  );
    
  return (
    <div className="my-10">
      <h2 className="font-Inter font-semibold text-[28px] leading-[34px] mb-10 px-4">
        {language === "uz"
          ? "Foydalanuvchining boshqa e’lonlari"
          : language === "ru"
          ? "Другие объявления пользователя"
          : "Other user ads"}
      </h2>
      <div>
        {data.length === 0 ? (
          <NotFoundItems />
        ) : (
          <div className="grid desktop:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-10 gap-4 px-4">
            {data.map((item: VacancyProps) => {
              return <VacancyCard key={item.id} data={item} />;
            })}
          </div>
        )}
      </div>
    </div>
  );
}
