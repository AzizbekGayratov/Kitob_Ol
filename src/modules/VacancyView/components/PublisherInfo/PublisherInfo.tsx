import { VacancyProps } from "modules/Home/components/Vacancies";

export default function PublisherInfo({
  data,
  isForMobile,
}: {
  data: VacancyProps;
  isForMobile: boolean;
}) {
  console.log(data);
  
  return <div className={isForMobile ? "block sm:hidden" : "hidden sm:block"}>PublisherInfo</div>;
}
