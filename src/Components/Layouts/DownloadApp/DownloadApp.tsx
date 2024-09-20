import { AppStore, PlayMarket } from "../../../assets/images/svg";
import ButtonComponent from "./components/ButtonComponent";
import ImageContainer from "./components/ImageContainer";
import "./style.css";

export default function DownloadApp() {
  return (
    <section className="container flex items-center md:justify-between justify-center md:pt-10 md:pb-0 py-10 text-center md:text-left">
      <div className="wrapper">
        <h2 className="text-5xl font-semibold leading-[120%] text-primary mb-20 sm:mb-[100px]">
          Mobil ilovamizni o'rnating va xizmatlarimizdan osonroq foydalaning.
        </h2>
        <div className="flex sm:flex-row flex-col items-center gap-[35px]">
          <div>
            <ButtonComponent
              img={PlayMarket}
              subTitle={"Get it on"}
              title={"Google Play"}
            />
          </div>
          <div>
            <ButtonComponent
              img={AppStore}
              subTitle={"Available on"}
              title={"AppStore"}
            />
          </div>
        </div>
      </div>
      <ImageContainer />
    </section>
  );
}
