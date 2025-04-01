import { Link } from "react-router-dom";
import LikeBtn from "../../LikeBtn";
import { VacancyProps } from "../../Vacancies";
import { useSelector } from "react-redux";

export default function VacancyViewPage({ data }: { data: VacancyProps }) {
  const { language } = useSelector(
    (state: { language: { language: "uz" | "ru" | "en" } }) => state.language
  );

  return (
    <div className="rounded bg-white pt-6 pb-12 px-4">
      <div className="flex items-center justify-between mb-4">
        <Link to={`/vacancy/${data.id}`}>
          <h3 className="text-primary font-medium text-xl leading-5">
            {data.title}
          </h3>
        </Link>
        <LikeBtn isFavorite={data.is_favorite} bookId={data.id} isBook={false} />
      </div>
      <p className="text-[12px] leading-[15px] text-primary opacity-80">
        {data.city_name[language]}
      </p>
      <ul className="mt-2 mb-4 flex flex-col gap-1 pl-4 list-disc">
        <li className="text-[12px] leading-[15px] text-primary opacity-80">
          {data.working_styles}
        </li>
        <li className="text-[12px] leading-[15px] text-primary opacity-80">
          {data.working_types}
        </li>
      </ul>
      <span className="text-[#CE3738] text-lg font-semibold leading-7">
        {data.salary_from} uzs - {data.salary_to} uzs
      </span>
    </div>
  );
}
