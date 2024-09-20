import AnnouncementMain from "./components/AnnouncementMain";
import TitleBar from "../../../../Components/Common/TitleBar";

export default function MyAnnouncement() {
  return (
    <section className="max-w-[1374px] mx-auto px-1 mt-10 bg-white">
      <TitleBar value="Mening e'lonlarim" />
      <AnnouncementMain />
    </section>
  );
}
