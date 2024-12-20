import { Book } from "modules/ProductView/ProductView";
import { AboutInfo } from "./components";
import { useSelector } from "react-redux";

export default function About({ data }: { data: Book }) {
  const { language } = useSelector(
    (state: { language: { language: "uz" | "ru" | "en" } }) => state.language
  );

  return (
    <section className="mt-10 grid xl:grid-cols-11 xl:gap-2 grid-cols-1">
      <AboutInfo data={data} />
      <div className="bg-white col-span-4 xl:mt-0 mt-10 font-Poppins">
        <div className="sm:pt-[15px] py-5 sm:px-[32px] px-4 sm:pb-6 border-b border-b-[#E9E9E9]">
          <h3 className="sm:text-[20px] text-[15px] font-semibold leading-6">
            Kitob haqida
          </h3>
        </div>
        <div className="sm:pt-10 pt-5 sm:pl-9 sm:pr-[20px] px-4 sm:pb-[55px] pb-10 flex flex-col sm:gap-9 gap-5">
          <p className="opacity-80 sm:text-[18px] sm:leading-[28px] text-[15px] leading-6">
            {data.district_name[language]}
          </p>
          <div className="flex flex-col gap-5">
            <h4 className="text-[16px] font-medium leading-6">
              Qo'shimcha tavsif
            </h4>
            <p className="opacity-80 sm:text-[18px] sm:leading-[28px] text-[15px] leading-6">
              {data.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
