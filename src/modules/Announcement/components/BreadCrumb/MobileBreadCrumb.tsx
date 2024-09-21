import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../../../../Components/Ui/breadcrumb.tsx";
import { LuHome } from "react-icons/lu";
import { RxDividerVertical } from "react-icons/rx";

export default function MobileBreadCrumb({ name }: { name: string }) {
  return (
    <div className="px-4 sm:py-5 block sm:hidden">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink
              href="/"
              className="text-[15px] leading-[18px] text-[#C1C1C1]"
            >
              <LuHome size={12} />
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <RxDividerVertical size={30} />
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbPage className="text-[15px] leading-[18px] text-[#2F2F2F]">
              {name}
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
}
