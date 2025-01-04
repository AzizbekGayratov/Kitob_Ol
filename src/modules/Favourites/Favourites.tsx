import api from "Services/Api";
import { useEffect, useState } from "react";

export interface Book {
  user_id: string;
  id: string;
  book_id: string;
}

export default function Favourites() {
  const rawToken = window.localStorage.getItem("token");
  const access_token = rawToken ? JSON.parse(rawToken).access_token : "";
  const [favourites, setFavourites] = useState<Book[]>([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("/favourites/list", {
          method: "GET",
          params: {
            limit: 10,
            offset: 0,
          },
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${access_token}`,
          },
        });

        if (response.data) {
          setFavourites(response?.data?.boooks);
          // await getFullData();
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <ul className="">
        {favourites?.map((book: Book) => (
          <li key={book.id}>{book.book_id}</li>
        ))}
      </ul>
    </div>
  );
}
