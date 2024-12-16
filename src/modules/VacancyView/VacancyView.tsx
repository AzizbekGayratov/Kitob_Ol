import { Outlet, useParams } from "react-router-dom";

export default function VacancyView() {
  const { name } = useParams();

  return (
    <div className="max-w-[1380px] mx-auto pb-10">
      <p className="">{name}</p>
      <Outlet />
    </div>
  );
}
