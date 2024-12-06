import { useEffect, useState } from "react";
import api from "Services/Api";
import { useDispatch, useSelector } from "react-redux";
import { setPage, setTotalItems } from "Store/paginationSlice/paginationSlice";
import { VacancyViewPage } from "./Hero/components";

export interface VacancyProps {
  created_at: string;
  description: string;
  id: string;
  location: {
    city_id: string;
    district_id: string;
  };
  phone_number: string;
  publisher_id: string;
  salary_from: number;
  salary_to: number;
  status: string;
  title: string;
  view_count: number;
  working_styles: string;
  working_types: string;
}

export default function Vacancies() {
  const { itemsPerPage, currentPage } = useSelector(
    (state: any) => state.paginationValue
  );

  console.log(itemsPerPage, currentPage);
  const VacancyFilter = useSelector((state: any) => state.VacancyFilter);
  

  const dispatch = useDispatch();
  const [arr, setArr] = useState<VacancyProps[]>([]);
  console.log(arr);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("/vacancies/list", {
          params: {
            ...VacancyFilter,
            limit: itemsPerPage,
          },
        });

        if (!response.data) {
          throw new Error("Data not found");
        }

        dispatch(setTotalItems(response.data.count));
        setArr(response.data.vacancies);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();

    return () => {
      dispatch(setPage(1));
    };
  }, []);

  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-x-10 lg:gap-y-6 gap-4 px-4">
      {arr.map((i) => (
        <VacancyViewPage key={i.id} data={i} />
      ))}
    </div>
  );
}
