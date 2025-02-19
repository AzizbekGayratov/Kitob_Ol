import { NotFoundItems } from "Components/Common";
import { BookCard } from "./CardComponents";
import { Book } from "./Wrapper";

export default function ListOfBooks({ booksList }: { booksList: Book[] }) {
  return (
    <>
      <div className="grid desktop:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-10 gap-4 px-2">
        {booksList.map((item: Book) => (
          <BookCard key={item.id} data={item} />
        ))}
      </div>
      {booksList.length === 0 && <NotFoundItems />}
    </>
  );
}
