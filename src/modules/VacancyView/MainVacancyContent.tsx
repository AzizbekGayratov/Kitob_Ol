import { VacancyProps } from "modules/Home/components/Vacancies";
import { Description, PublisherInfo, VacancyInfo } from "./components";

export default function MainVacancyContent({
  data,
}: {
  data: VacancyProps;
}) {
    return (
    <>
      <div className="flex gap-2">
        <VacancyInfo data={data} />
        <PublisherInfo data={data} isForMobile={false} />
      </div>
      {/* <Description data={data} /> */}
      <PublisherInfo data={data} isForMobile={true} />
    </>
  );
}
