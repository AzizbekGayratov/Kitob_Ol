import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import DefaultImg from "../../../../assets/images/svg/Logo.svg";

// Import Swiper styles
import "swiper/css";

// navigation
import "swiper/css/navigation";
// pagination
import "swiper/css/pagination";
import "./SwiperStyles.css";
import { Book } from "modules/ProductView/ProductView";
import { useState } from "react";

export default function SwiperComponent({ data }: { data: Book }) {
  const firstImage =
    data?.image_url.slice(0, 5) === "https" ? data?.image_url : DefaultImg;

  const secondImage =
    data?.img_url.slice(0, 5) === "https" ? data?.img_url : DefaultImg;

  const [isFirstImageTaller, setIsFirstImageTaller] = useState(false);
  const [isSecondImageTaller, setIsSecondImageTaller] = useState(false);

  const handleFirstImageLoad = (
    event: React.SyntheticEvent<HTMLImageElement>
  ) => {
    const { naturalWidth, naturalHeight } = event.target as HTMLImageElement;
    setIsFirstImageTaller(naturalHeight > naturalWidth);
  };
  const handleSecondImageLoad = (
    event: React.SyntheticEvent<HTMLImageElement>
  ) => {
    const { naturalWidth, naturalHeight } = event.target as HTMLImageElement;
    setIsSecondImageTaller(naturalHeight > naturalWidth);
  };

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
        <SwiperSlide style={{ marginLeft: isFirstImageTaller ? "100px" : "0" }}>
          <img
            src={firstImage}
            alt="img"
            onLoad={handleFirstImageLoad}
            style={{
              objectFit: "fill",
            }}
          />
        </SwiperSlide>
        <SwiperSlide
          style={{ marginLeft: isSecondImageTaller ? "0" : "0" }}
        >
          <img
            src={secondImage}
            alt="img"
            onLoad={handleSecondImageLoad}
            style={{
              objectFit: "contain",
            }}
          />
        </SwiperSlide>
      </Swiper>
      {/* <>
        <button className="custom-prev-button">Prev</button>
        <button className="custom-next-button">Next</button>
      </> */}
    </section>
  );
}
