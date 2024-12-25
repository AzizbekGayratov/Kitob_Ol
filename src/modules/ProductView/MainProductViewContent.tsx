import { SwiperComponent } from "./components/SwiperSection";
import { About } from "./components/AboutProduct";
import Connect from "./components/Comments/MainContent/Connect";
import { Book } from "./ProductView";
import SellerList from "./components/SellerList/SellerList";

export default function MainProductViewContent({
  data,
  list,
}: {
  data: Book;
  list: Book[];
}) {
  return (
    <>
      <SwiperComponent data={data} />
      <About data={data} />
      <Connect publisher={data} />
      <SellerList data={list} bookId={data?.id} />
    </>
  );
}
