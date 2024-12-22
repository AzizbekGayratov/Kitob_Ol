import { useSelector } from "react-redux";
export default function TitleBar({ count }: { count: number }) {
  const { language } = useSelector(
    (state: { language: { language: "uz" | "ru" | "en" } }) => state.language
  );
  return (
    <div className="flex justify-between items-center sm:py-[18px] py-5 sm:px-10 px-4 font-Poppins">
      <h3 className="sm:text-[20px] text-[15px] font-semibold leading-6">
        {language === "uz"
          ? "Kitob haqida"
          : language === "ru"
          ? "О книге"
          : "About book"}
      </h3>
      <p className="sm:block hidden text-[16px] leading-6">
        {language === "uz"
          ? "Ko'rilgan"
          : language === "ru"
          ? "Просмотрено:"
          : "Viewed:"}{" "}
        {count}
      </p>
    </div>
  );
}
