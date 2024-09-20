import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// navigation
import "swiper/css/navigation";
// pagination
import "swiper/css/pagination";
import "./SwiperStyles.css";
import { swiperImage } from "assets/images/png";

export default function SwiperComponent() {
  return (
    <section className="md:p-10 py-5 px-5 bg-white rounded">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 1400,
          disableOnInteraction: false,
          //   pauseOnMouseEnter: true,
        }}
        // navigation={{
        //   prevEl: "custom-prev-button",
        //   nextEl: "custom-next-button",
        // }}
      >
        <SwiperSlide>
          <img src={swiperImage} alt="img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={swiperImage} alt="img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={swiperImage} alt="img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={swiperImage} alt="img" />
        </SwiperSlide>
      </Swiper>
      {/* <>
        <button className="custom-prev-button">Prev</button>
        <button className="custom-next-button">Next</button>
      </> */}
    </section>
  );
}
