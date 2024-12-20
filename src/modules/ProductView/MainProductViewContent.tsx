import { SwiperComponent } from "./components/SwiperSection";
import { About } from "./components/AboutProduct";
import Connect from "./components/Comments/MainContent/Connect";
import { Book, PublisherProps } from "./ProductView";

export default function MainProductViewContent({
  data,
  publisher,
}: {
  data: Book;
  publisher: PublisherProps;
}) {

  return (
    <>
      <SwiperComponent data={data} />
      <About data={data} />
      <Connect publisher={publisher} />
    </>
  );
}
