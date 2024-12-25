import { NotFoundItems } from "Components/Common";
import { Book } from "modules/ProductView/ProductView";
import { useSelector } from "react-redux";
import BookViewPage from "./components/BookViewPage";

export default function SellerList({
  data,
  bookId,
}: {
  data: Book[];
  bookId: string;
}) {
  console.log(data);
  const { language } = useSelector(
    (state: { language: { language: "uz" | "ru" | "en" } }) => state.language
  );

    const filteredData = data.filter((item) => item.id !== bookId);
  return (
    <div className="my-10">
      <h2 className="font-Inter font-semibold text-[28px] leading-[34px] mb-10 px-4">
        {language === "uz"
          ? "Foydalanuvchining boshqa e’lonlari"
          : language === "ru"
          ? "Другие объявления пользователя"
          : "Other user ads"}
      </h2>
      <div>
        {filteredData.length === 0 ? (
          <NotFoundItems />
        ) : (
          <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-10 gap-4 px-4">
            {data.map((item: Book) => {
              return <BookViewPage key={item.id} data={item} />;
            })}
          </div>
        )}
      </div>
    </div>
  );
}
