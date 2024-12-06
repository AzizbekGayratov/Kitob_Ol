import { useEffect, useState } from "react";
import api from "Services/Api";
import { useDispatch, useSelector } from "react-redux";
import { setPage, setTotalItems } from "Store/paginationSlice/paginationSlice";
import { setState } from "Store/FilterSlice/bookFilterSlice";
import { BookViewPage } from "./Hero/components";

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
  const dispatch = useDispatch();
  const bookFilter = useSelector((state: any) => state.bookFilter);
  const [arr, setArr] = useState<BookProps[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("/books/list", {
          params: {
            ...bookFilter,
            limit: itemsPerPage,
          },
        });

        if (!response.data) {
          throw new Error("Data not found");
        }

        dispatch(setTotalItems(response.data.count));
        setArr(response.data.books);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();

    return () => {
      dispatch(setPage(1));
    };
  }, [dispatch]);

  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-10 gap-4 px-4">
      {arr.map((i) => (
        <BookViewPage key={i.id} data={i} />
      ))}
    </div>
  );
}
