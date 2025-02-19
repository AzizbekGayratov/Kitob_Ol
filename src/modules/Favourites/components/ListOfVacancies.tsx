import { NotFoundItems } from "Components/Common";
import { VacancyCard } from "./CardComponents";
import { Vacancy } from "./Wrapper";

export default function ListOfVacancies({
  vacanciesList,
}: {
  vacanciesList: Vacancy[];
}) {
  return (
    <>
      <div className="grid desktop:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-x-10 lg:gap-y-6 gap-4 px-2">
        {vacanciesList.map((item: Vacancy) => (
          <VacancyCard key={item.id} data={item} />
        ))}
      </div>
      {vacanciesList.length === 0 && <NotFoundItems />}
    </>
  );
}
