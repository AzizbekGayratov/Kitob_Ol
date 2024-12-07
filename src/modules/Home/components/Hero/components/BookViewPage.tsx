import { BookProps } from "../../Books";
import { Link } from "react-router-dom";
import LikeBtn from "../../LikeBtn";
import { LogoSvg } from "assets/images/svg";

export default function BookViewPage({ data }: { data: BookProps }) {
  return (
    <div className="rounded bg-white flex flex-col justify-between ">
      <div className="h-[260px]">
        {data.image_url &&
        data.image_url[0] +
          data.image_url[1] +
          data.image_url[2] +
          data.image_url[3] +
          data.image_url[4] ===
          "https" ? (
          <img
            src={data.image_url}
            alt="oynani oldida ochiq turgan kitob"
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="bg-[#2C30330D] h-[260px]">
            <img src={LogoSvg} alt="logo image"  className="w-full h-full"/>
          </div>
        )}
      </div>
      <div className="pb-8 pt-4 pl-5 pr-4">
        <div className="flex items-center justify-between mb-4">
          <div>
            <Link to={`/product/${data.id}`}>
              <h3 className="text-primary font-medium text-xl leading-5">
                {data.title}
              </h3>
            </Link>
          </div>
          <LikeBtn />
        </div>
        <span className="text-[#CE3738] text-2xl font-semibold leading-7">
          {data.price} so'm
        </span>
      </div>
    </div>
  );
}
