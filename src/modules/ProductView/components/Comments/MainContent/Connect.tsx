import { PublisherProps } from "modules/ProductView/ProductView";
import { TitleBar } from "../../../../../Components/Common";
import MainContent from "../MainContent";
import { useSelector } from "react-redux";
export default function Connect({ publisher }: { publisher: PublisherProps }) {
  const { language } = useSelector(
    (state: { language: { language: "uz" | "ru" | "en" } }) => state.language
  );
  return (
    <section className="bg-white rounded mt-10">
      <TitleBar
        value={
          language === "uz"
            ? "Murojaat qilish"
            : language === "ru"
            ? "Связаться"
            : "Contact"
        }
      />
      <MainContent data={publisher} />
    </section>
  );
}
