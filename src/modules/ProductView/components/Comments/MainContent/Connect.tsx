import { PublisherProps } from "modules/ProductView/ProductView";
import { TitleBar } from "../../../../../Components/Common";
import MainContent from "../MainContent";
export default function Connect({ publisher }: { publisher: PublisherProps }) {
  return (
    <section className="bg-white rounded mt-10">
      <TitleBar value="Murojaat qilish" />
      <MainContent data={publisher} />
    </section>
  );
}
