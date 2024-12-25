import { useEffect, useState } from "react";
import api from "Services/Api";
import { useDispatch, useSelector } from "react-redux";
import { setTotalItems } from "Store/paginationSlice/paginationSlice";
import { VacancyViewPage } from "./Hero/components";
import Loading from "./Loading";
import NotFound from "Components/Common/NotFound/NotFoundItems";

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
  const vacancyFilter = useSelector((state: any) => state.VacancyFilter);

  const dispatch = useDispatch();
  const [vacancies, setVacancies] = useState<VacancyProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchVacancies = async () => {
    setLoading(true);
    try {
      const response = await api.get("/vacancies/list", {
        params: {
          ...vacancyFilter, // Include filter criteria
          limit: itemsPerPage,
          offset: (currentPage - 1) * itemsPerPage, // Calculate offset based on the current page
        },
      });

      if (!response.data) {
        throw new Error("Data not found");
      }

      dispatch(setTotalItems(response.data.count)); // Update total items for pagination
      setVacancies(response.data.vacancies); // Set the fetched vacancies
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVacancies();
  }, [dispatch, vacancyFilter, currentPage]); // Re-run when filters or page changes

  return (
    <div>
      {loading ? (
        <Loading />
      ) : vacancies ? (
        <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-x-10 lg:gap-y-6 gap-4 px-4">
          {vacancies.map((vacancy) => (
            <VacancyViewPage key={vacancy.id} data={vacancy} />
          ))}
        </div>
      ) : (
        <NotFound />
      )}
    </div>
  );
}
