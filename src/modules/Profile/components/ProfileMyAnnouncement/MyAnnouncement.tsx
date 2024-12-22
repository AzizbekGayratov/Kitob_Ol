import AnnouncementMain from "./components/AnnouncementMain";
import TitleBar from "../../../../Components/Common/TitleBar";
import { useSelector } from "react-redux";

export default function MyAnnouncement() {
  const { language } = useSelector(
    (state: { language: { language: "uz" | "ru" | "en" } }) => state.language
  );

  return (
    <section className="max-w-[1374px] mx-auto px-1 mt-10 bg-white">
      <TitleBar
        value={
          language === "uz"
            ? "Mening e'lonlarim"
            : language === "ru"
            ? "Мои объявления"
            : "My announcements"
        }
      />
      <AnnouncementMain />
    </section>
  );
}
