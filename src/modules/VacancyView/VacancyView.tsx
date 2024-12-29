import { useParams } from "react-router-dom";
import MainVacancyContent from "./MainVacancyContent";
import { useEffect, useMemo, useState } from "react";
import { Loading } from "Components/Common/Loading";
import { VacancyProps } from "modules/Home/components/Vacancies";
import api from "Services/Api";

export default function VacancyView() {
  const { name } = useParams();
  const [data, setData] = useState<VacancyProps | null>(null);
  
  // List da shu publisherni boshqa e'lonlari chiqadi shu sabab hali qilmay turing, hozircha shu ma'lumotlarni interface'ga chiqarish kerak va stillarni moslab tug'irlab qo'ying
  // const [list, setList] = useState<VacancyProps[]>([]);
  
  const [loading, setLoading] = useState(true);

  // const GetSellerBookList = async (id: string) => {
  //   try {
  //     const response = await api.get("/vacancies/list", {
  //       params: {
  //         // seller_id: id,
  //       },
  //     });
  //     if (response.data) {
  //       setList(response.data.books);
  //     }
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  useEffect(() => {
    window.scrollTo(0, 0);
    const getVacancies = async () => {
      try {
        const response = await api.get("/vacancies/get", {
          params: {
            id: name,
          },
        });

        if (response.data) {
          setData(response.data);
          // await GetSellerBookList(response?.data?.seller_id);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    getVacancies();
  }, []);

  const memoizedData = useMemo(() => data, [data]);
  // const memoizedList = useMemo(() => list, [list]);
  const title = useMemo(() => data?.title || "Loading...", [data?.title]);

  console.log({
    memoizedData,
    title,
  });

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="container">
      <p className="">{name}</p>
      <MainVacancyContent />
    </div>
  );
}
