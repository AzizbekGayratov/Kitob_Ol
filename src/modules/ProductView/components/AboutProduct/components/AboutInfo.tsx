import { Book } from "modules/ProductView/ProductView";
import {
  AboutInfoContent,
  TitleBar as AboutInfoTitleBar,
} from "./AboutInfo/index";

export default function AboutInfo({ data }: { data: Book }) {
  return (
    <div className="bg-white col-span-7">
      <AboutInfoTitleBar
        count={data?.view_count === null ? 1 : data?.view_count}
      />
      <AboutInfoContent data={data} />
    </div>
  );
}
