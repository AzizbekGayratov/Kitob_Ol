import { AnnoymouseUser } from "assets/images/jpg";
import { VacancyProps } from "modules/Home/components/Vacancies";
import PhoneInput from "react-phone-number-input/input";
import { useSelector } from "react-redux";

export default function PublisherInfo({
  data,
  isForMobile,
}: {
  data: VacancyProps;
  isForMobile: boolean;
}) {
  const { language } = useSelector(
    (state: { language: { language: "uz" | "ru" | "en" } }) => state.language
  );

  return (
    <div
      className={`${
        isForMobile ? "block desktop:hidden" : "hidden desktop:flex"
      } bg-white flex-col justify-between sm:min-w-[450px]`}
    >
      <div className="py-5 px-8 border-b border-b-[#E9E9E9]">
        <h3 className="font-Poppins text-[15px] font-semibold leading-6">
          {language === "uz"
            ? "Murojaat qilish"
            : language === "ru"
            ? "Связаться"
            : "Contact"}
        </h3>
      </div>
      <div className="sm:px-[34px] pt-7 pb-10">
        <div className="flex items-center flex-col sm:flex-row text-center sm:text-left justify-center sm:justify-normal gap-5 sm:py-2">
          <div className="w-[80px] h-[80px] rounded-full overflow-hidden border border-primary">
            <img
              // src={AnnoymouseUser || ""}
              src={AnnoymouseUser}
              alt=""
            />
          </div>
          <div className="flex flex-col gap-[10px]">
            <p className="text-primary font-semibold text-base leading-5">
              {data?.publisher_name}
            </p>
            <p className="text-primary text-base leading-5 text-opacity-70">
              {data?.city_name[language]}, {data?.district_name[language]}
            </p>
            <PhoneInput
              className="text-primary text-xl text-center sm:text-left font-semibold leading-6"
              value={data?.phone_number}
              onChange={(e) => {
                console.log(e);
              }}
              disabled
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2">
        <button className="bg-primary text-white text-base leading-[19px]">
          <a href={`tel:${data?.phone_number}`} className="block py-[18px]">
            {language === "uz"
              ? "Telefon qilish"
              : language === "ru"
              ? "Позвонить"
              : "Call"}
          </a>
        </button>
        <button
          className="border border-primary py-[17px] text-base leading-[19px]"
          onClick={() => alert("Izoh yozish")}
        >
          {language === "uz"
            ? "Izoh yozish"
            : language === "ru"
            ? "Написать отзыв"
            : "Write a review"}
        </button>
      </div>
    </div>
  );
}
