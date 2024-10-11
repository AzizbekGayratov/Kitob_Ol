import { evenlyCard, perCard } from "../../../assets/images/jpg";
import LikeBtn from "./LikeBtn";
import { Link } from "react-router-dom";

export default function Books() {
  const arr = new Array(12).fill(null);
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-10 gap-4 px-4">
      {arr.map((_, index) => (
        <div key={index} className="rounded bg-white">
          <div className="w-full">
            <img
              src={index % 2 === 1 ? perCard : evenlyCard}
              alt="oynani oldida ochiq turgan kitob"
              className="w-full"
            />
          </div>
          <div className="pb-8 pt-4 pl-5 pr-4">
            <div className="flex items-center justify-between mb-4">
              <div>
                <Link to="/product/book">
                  <h3 className="text-primary font-medium text-xl leading-5">
                    Milk and honey
                  </h3>
                </Link>
                <p className="text-primary text-xs opacity-80">
                  Namangan shahar
                </p>
              </div>
              <LikeBtn />
            </div>
            <span className="text-[#CE3738] text-2xl font-semibold leading-7">
              24.000 so'm
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
