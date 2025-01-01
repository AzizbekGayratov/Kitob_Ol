import { VacancyProps } from "modules/Home/components/Vacancies";
import {
  Description,
  PublisherInfo,
  PublisherList,
  VacancyInfo,
} from "./components";

export default function MainVacancyContent({
  data,
  list,
}: {
  data: VacancyProps;
  list: VacancyProps[];
}) {
  return (
    <>
      <div className="flex gap-2">
        <VacancyInfo data={data} />
        <PublisherInfo data={data} isForMobile={false} />
      </div>
      <Description data={data} />
      <PublisherInfo data={data} isForMobile={true} />
      <PublisherList data={list} />
    </>
  );
}
