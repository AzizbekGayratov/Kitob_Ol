import { Link } from "react-router-dom";
import LikeBtn from "modules/Home/components/LikeBtn";
import { LogoSvg } from "assets/images/svg";
import "./bookView.css";
import { Navigation, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Book } from "../Wrapper";

export default function BookCard({ data }: { data: Book }) {
  const image =
    data.image_url.slice(0, 5) === "https" ? data.image_url : LogoSvg;

  const subImage = data.img_url.slice(0, 5) === "https" ? data.img_url : null;

  return (
    <div className="property-card border shadow-lg">
      <Link to={`/product/${data.id}`}>
        <div
          className="property-image"
          style={{
            backgroundImage: `url(${LogoSvg})`,
          }}
        >
          <div className="property-image-title">
            <Swiper
              modules={[Navigation, Autoplay, A11y]}
              spaceBetween={50}
              slidesPerView={1}
              navigation={false}
              style={{ zIndex: 0 }}
              autoplay={{ delay: 1800 }}
            >
              <SwiperSlide>
                <img src={image} alt="img" className="w-full h-full" />
              </SwiperSlide>
              {subImage && (
                <SwiperSlide>
                  <img src={subImage} alt="img" className="w-full h-full" />
                </SwiperSlide>
              )}
            </Swiper>
          </div>
        </div>
      </Link>
      <div className="property-description">
        <h5>{data.book_id}</h5>
        <p>
          {String(data.price).replace(/(\d)(?=(\d{3})+$)/g, "$1.")}
          {""}
          uzs
        </p>
      </div>
      <div className="property-social-icons">
        <LikeBtn bookId={data.id}  isFavorite={data.is_favorite}/>
      </div>
    </div>
  );
}
