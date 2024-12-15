import { Outlet, useParams } from "react-router-dom";
import { BreadCrumbComponent, MobileBreadCrumb } from "./components/BreadCrumb";
import { useEffect, useState } from "react";
import api from "Services/Api";

export interface Book {
  author_id: string;
  category_id: string;
  cover_format: string;
  cover_type: string;
  created_at: string;
  description: string;
  id: string;
  image_url: string;
  img_url: string;
  language_id: string;
  location: {
    city_id: string;
    district_id: string;
  };
  price: number;
  published_year: string;
  publisher_id: string;
  seller_id: string;
  shitrix_code: string;
  title: string;
  total_pages: number;
  translator_id: string;
  view_count: number;
  writing_type: string;
}

export default function ProductView() {
  const { name } = useParams();
  const [data, setData] = useState<Book | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const getBooks = async () => {
      try {
        const response = await api.get("/books/get", {
          params: {
            book_id: name,
          },
        });

        if (response.data) {
          setData(response.data);
        }
      } catch (error) {
        console.error(error);
      }
    };
    getBooks();
  }, []);

  return (
    <div className="max-w-[1380px] mx-auto pb-10">
      <>
        <BreadCrumbComponent name={data?.title as string} />
        <MobileBreadCrumb name={data?.title as string} />
      </>
      <Outlet context={{ data }} />
    </div>
  );
}
