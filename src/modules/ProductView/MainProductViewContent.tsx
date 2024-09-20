import { SwiperComponent } from "./components/SwiperSection";
import { About } from "./components/AboutProduct";
import Connect from "./components/Comments/MainContent/Connect";

export default function MainProductViewContent() {
  return (
    <>
      <SwiperComponent />
      <About />
      <Connect />
    </>
  );
}
