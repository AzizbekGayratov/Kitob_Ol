import { Book } from "modules/ProductView/ProductView";
import ContactInfo from "./MainContent/ContactInfo";
import { useSelector } from "react-redux";

export default function MainContent({ data }: { data: Book }) {
  const { language } = useSelector(
    (state: { language: { language: "uz" | "ru" | "en" } }) => state.language
  );
  
  

  return (
    <div className="sm:p-10 pt-5 px-4 pb-10 flex items-center md:flex-row flex-col md:gap-0 gap-10 justify-between">
      <ContactInfo data={data} />
      <div className="flex flex-col gap-4">
        <a href={`tel:${data?.seller_phone_number}`}>
          <button className="pt-[19px] pb-[18px] px-[67px] bg-[#2C3033] rounded text-white min-w-[230px]">
            {language === "uz"
              ? "Telefon qilish"
              : language === "ru"
              ? "Позвонить"
              : "Call"}
          </button>
        </a>
        <button
          onClick={() => alert("Murojaat qilish")}
          className="pt-[19px] pb-[18px] px-[60px] border border-[#2C3033] rounded text-[#2C3033] min-w-[230px]"
        >
          {language === "uz"
            ? "Murojaat qilish"
            : language === "ru"
            ? "Связаться"
            : "Contact"}
        </button>
      </div>
    </div>
  );
}
