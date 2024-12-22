import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "./SwiperPagination.css";
import "swiper/css";
import { Pagination, Autoplay } from "swiper/modules";
import { heroPng } from "../../../../assets/images/png";
import { useSelector } from "react-redux";

export default function Hero() {
  const swiperData = [null, null, null, null];
  const { language } = useSelector(
    (state: { language: { language: "uz" | "ru" | "en" } }) => state.language
  );

  return (
    <section className="pt-5 sm:pb-14 pb-6">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
        pagination={{ clickable: true }}
        autoplay={{ delay: 1600 }}
      >
        {swiperData.map((_, index) => (
          <SwiperSlide key={index}>
            <div className="bg-primary rounded px-4 sm:pt-[50px] pt-6 md:pb-14 pb-8 sm:px-[60px] flex justify-between">
              <div
                className={`max-w-[${language === "uz" ? "700px" : "600px"}]`}
              >
                <h1
                  className="text-white sm:pb-20 pb-5 text-[28px] md:text-[48px] lg:text-[64px] font-bold lea
              ding-[120%]"
                >
                  {language === "uz"
                    ? "O'qishni boshlash hech qachon kech emas!"
                    : language === "ru"
                    ? "Никогда не поздно начать читать!"
                    : "It is never late to start reading!"}
                </h1>
                <button className="hidden sm:block bg-white rounded py-[18px] px-[60px] text-[16px] leading-[19px]">
                  {language === "uz"
                    ? "Batafsil"
                    : language === "ru"
                    ? "Подробнее"
                    : "See more"}
                </button>
              </div>
              <div className="max-w-[150px] sm:max-w-[480px] md:-mb-24">
                <img src={heroPng} alt="kitoblar rasmi" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div>
        <button className="sm:hidden bg-white rounded py-[18px] w-full mt-4  text-[16px] leading-[19px]">
          {language === "uz"
            ? "Batafsil"
            : language === "ru"
            ? "Подробнее"
            : "See more"}
        </button>
      </div>
    </section>
  );
}
