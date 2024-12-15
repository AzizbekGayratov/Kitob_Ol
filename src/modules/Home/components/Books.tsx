import { useEffect, useState } from "react";
import api from "Services/Api";
import { useDispatch, useSelector } from "react-redux";
import { setTotalItems } from "Store/paginationSlice/paginationSlice";
import { BookViewPage } from "./Hero/components";
import Loading from "./Loading";
import NotFound from "./NotFound";

export interface BookProps {
  author_id: string;
  category_id: string;
  cover_format: string;
  cover_type: string;
  created_at: string;
  description: string;
  id: string;
  image_url: string;
  img_url: string;
  is_new: true;
  language_id: string;
  location: {
    city_id: string;
    district_id: string;
  };
  city_id: string;
  district_id: string;
  price: number;
  published_year: string;
  publisher_id: string;
  shitrix_code: string;
  title: string;
  total_pages: number;
  translator_id: string;
  user_id: string;
  view_count: number;
  writing_type: string;
}

export default function Books() {
  const { itemsPerPage, currentPage } = useSelector(
    (state: any) => state.paginationValue
  );
  const bookFilter = useSelector((state: any) => state.bookFilter);

  const dispatch = useDispatch();
  const [books, setBooks] = useState<BookProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchBooks = async () => {
    setLoading(true);
    try {
      const response = await api.get("/books/list", {
        params: {
          ...bookFilter, // Include all filter criteria
          limit: itemsPerPage,
          offset: (currentPage - 1) * itemsPerPage, // Calculate offset based on page
        },
      });

      if (!response.data) {
        throw new Error("Data not found");
      }

      dispatch(setTotalItems(response.data.count)); // Update total items for pagination
      setBooks(response.data.books); // Set the fetched books
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBooks();
    // Reset to page 1 when component unmounts
  }, [dispatch, bookFilter, currentPage]); // Re-run when filters or page changes

  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-10 gap-4 px-4">
      {loading ? (
        <Loading />
      ) : books ? (
        books.map((book) => <BookViewPage key={book.id} data={book} />)
      ) : (
        <NotFound />
      )}
    </div>
  );
}
