import { useParams } from "react-router-dom";
import { BreadCrumbComponent, MobileBreadCrumb } from "./components/BreadCrumb";
import { useEffect, useMemo, useState } from "react";
import api from "Services/Api";
import MainProductViewContent from "./MainProductViewContent";
import { Loading } from "Components/Common/Loading";

export interface Book {
  author_id: string;
  author_name: string;
  author_surname: string;
  category_id: string;
  category_name: {
    en: string;
    ru: string;
    uz: string;
  };
  city_id: string;
  city_name: {
    en: string;
    ru: string;
    uz: string;
  };
  cover_format: string;
  cover_type: string;
  created_at: string;
  description: string;
  district_id: string;
  district_name: {
    en: string;
    ru: string;
    uz: string;
  };
  id: string;
  image_url: string;
  img_url: string;
  is_new: boolean;
  language_id: string;
  language_name: {
    en: string;
    ru: string;
    uz: string;
  };
  price: number;
  published_year: string;
  publisher_id: string;
  publisher_name: string;
  seller_email: string;
  seller_id: string;
  seller_name: string;
  seller_phone_number: string;
  shitrix_code: string;
  title: string;
  total_pages: number;
  translator_id: string;
  translator_name: string;
  translator_surname: string;
  view_count: number;
  writing_type: string;
}

// export interface PublisherProps {
//   email: string;
//   id: string;
//   image_url: string;
//   location: {
//     city_id: string;
//     district_id: string;
//   };
//   name: string;
//   phone_number: string;
//   status: boolean;
//   type: string;
// }

export default function ProductView() {
  const { name } = useParams();
  const [data, setData] = useState<Book | null>(null);
  const [list, setList] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);

  const GetSellerBookList = async (id: string) => {
    try {
      const response = await api.get("/books/list", {
        params: {
          seller_id: id,
        },
      });
      if (response.data) {
        setList(response.data.books);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    const getBooks = async () => {
      try {
        const response = await api.get("/books/get/full", {
          params: {
            book_id: name,
          },
        });

        if (response.data) {
          setData(response.data);
          await GetSellerBookList(response?.data?.seller_id);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    getBooks();
  }, []);

  const memoizedData = useMemo(() => data, [data]);
  const memoizedList = useMemo(() => list, [list]);
  const title = useMemo(() => data?.title || "Loading...", [data?.title]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="max-w-[1380px] mx-auto pb-10">
      <>
        <BreadCrumbComponent name={title as string} />
        <MobileBreadCrumb name={title as string} />
      </>
      <MainProductViewContent data={memoizedData as Book} list={memoizedList} />
    </div>
  );
}
