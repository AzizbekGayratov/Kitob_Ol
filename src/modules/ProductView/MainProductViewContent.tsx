import { SwiperComponent } from "./components/SwiperSection";
import { About } from "./components/AboutProduct";
import Connect from "./components/Comments/MainContent/Connect";
import { useOutletContext } from "react-router-dom";
import { Book } from "./ProductView";

export default function MainProductViewContent() {
  const rawData = useOutletContext<{ data: Book }>();
  const data = rawData.data;
  

  return (
    <>
      <SwiperComponent data={data} />
      <About />
      <Connect />
    </>
  );
}
