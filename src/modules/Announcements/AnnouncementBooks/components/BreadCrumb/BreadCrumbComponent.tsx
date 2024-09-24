import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../../../../../Components/Ui/breadcrumb";
import { LuHome } from "react-icons/lu";
import { RxDividerVertical } from "react-icons/rx";

export default function BreadCrumbComponent({ name }: { name: string }) {
  return (
    <div className="px-4 py-5 xl:px-0 hidden sm:block">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink
              href="/"
              className="text-[15px] leading-[18px] text-[#818181]"
            >
              <LuHome />
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <RxDividerVertical size={20} />
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbPage className="text-[15px] leading-[18px] text-[#2F2F2F]">
              {name}
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <h2 className="lg:mt-[45px] mt-5 text-[28px] font-semibold leading-[34px]">
        {window.location.pathname.includes("comments") ? "Izohlar" : name}
      </h2>
    </div>
  );
}
