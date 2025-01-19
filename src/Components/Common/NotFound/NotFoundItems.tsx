import { NotFoundGif } from "assets/images/gif";
import { useSelector } from "react-redux";

export default function NotFoundItems() {
  const { language } = useSelector(
    (state: { language: { language: "uz" | "ru" | "en" } }) => state.language
  );

  return (
    <div className="w-full flex items-center justify-center">
      <div className="flex flex-col items-center">
        <img
          src={NotFoundGif}
          alt="not found"
          className="lg:width-[300px] lg:h-[300px]"
        />
        <p className="text-3xl font-Poppins font-semibold text-primary">
          {language === "uz"
            ? "Hech narsa topilmadi"
            : language === "ru"
            ? "Ничего не найдено"
            : "Nothing found"}
        </p>
      </div>
    </div>
  );
}
