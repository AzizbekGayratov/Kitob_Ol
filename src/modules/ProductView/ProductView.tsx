import { Outlet, useParams } from "react-router-dom";
import { BreadCrumbComponent, MobileBreadCrumb } from "./components/BreadCrumb";

export default function ProductView() {
  const { name } = useParams();

  return (
    <div className="max-w-[1380px] mx-auto pb-10">
      <>
        <BreadCrumbComponent name={name as string} />
        <MobileBreadCrumb name={name as string} />
      </>
      <Outlet />
    </div>
  );
}
