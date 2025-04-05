import { useEffect, useState } from "react";
import ListOfAnnouncements from "./ListOfAnnouncements";
import api from "Services/Api";
import { BookProps } from "modules/Home/components/Books";
import { NotFoundItems } from "Components/Common";
import { safeParse } from "lib/utils";

export default function AnnouncementMain() {
  const [data, setData] = useState<BookProps[]>([]);
  const token=safeParse(window.localStorage.getItem("publisher_token"));
  

  useEffect(() => {
    const fetchData = async () => {
      const rawData = window.sessionStorage.getItem("profile");
      const sellerId = rawData ? JSON.parse(rawData).id : null;
      
      try {
        const response = await api.get("/books/list", {
          params: {
            seller_id: sellerId,
          },
          headers: {
            "Content-Type": "application/json",
            Authorization: `${token.resresh_token}`,
          },
        });

        if (response.data) {
          setData(response.data.books);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="md:pt-10 pt-5 md:pl-20 pl-4 md:pb-[90px] pb-[60px] md:pr-[100px] pr-4">
      <ul className="flex flex-col gap-4 sm:gap-5">
        {data ? (
          <>
            {data.map((item: BookProps) => (
              <ListOfAnnouncements key={item.id} data={item} />
            ))}
          </>
        ) : (
          <NotFoundItems />
        )}
      </ul>
    </div>
  );
}
