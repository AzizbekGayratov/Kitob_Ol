import { useSelector } from "react-redux";
import PublisherLogOutButton from "./PublisherLogOutButton";
import PublisherMobileFormTopBtn from "./PublisherMobileFormTopBtn";
// import ProfileDelete from "./ProfileDelete";
import { PublisherProfileProps } from "modules/PublisherProfile/PublisherProfile";

export default function FormTop() {
  const { language } = useSelector(
    (state: { language: { language: "uz" | "ru" | "en" } }) => state.language
  );

  const { type } = useSelector(
    (state: { project: { publisherProfile: PublisherProfileProps } }) =>
      state.project.publisherProfile
  );

  const shopProps =
    language === "uz" ? "Do'kon" : language === "ru" ? "магазина" : "Shop";
  const publisherProps =
    language === "uz"
      ? "Nashriyot"
      : language === "ru"
      ? "издательства"
      : "Publisher";

  const title = type == "shop" ? shopProps : publisherProps;
  return (
    <div className="md:px-20 md:py-8 px-4 py-5 flex items-center justify-between border-b border-b-[#2c303333]">
      <h2 className="text-[28px] font-semibold leading-[34px]">
        {language === "uz"
          ? `${title} profilim`
          : language === "ru"
          ? `Профиль ${title}`
          : `${title} profile`}
      </h2>
      <div className="flex gap-2 items-center">
        <>
          <PublisherLogOutButton />
          <PublisherMobileFormTopBtn />
        </>
        {/* <ProfileDelete /> */}
      </div>
    </div>
  );
}
