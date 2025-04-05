import { useEffect, useState } from "react";
import api from "Services/Api";
import { useDispatch, useSelector } from "react-redux";
import { setTotalItems } from "Store/paginationSlice/paginationSlice";
import { VacancyViewPage } from "./Hero/components";
import NotFound from "Components/Common/NotFound/NotFoundItems";
import HomePageLoader from "./HomePageLoader";
import { safeParse } from "lib/utils";
import { setMinMaxPrice } from "Store/FilterSlice/minMaxPriceSlice";

export interface VacancyProps {
  city_id: string;
  city_name: {
    en: string;
    ru: string;
    uz: string;
  };
  created_at: string;
  description: string;
  district_id: string;
  district_name: {
    en: string;
    ru: string;
    uz: string;
  };
  id: string;
  is_favorite:boolean;
  phone_number: string;
  publisher_id: string;
  publisher_name: string;
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
  
  const token=safeParse(window.localStorage.getItem("token"));

  const fetchVacancies = async () => {
    setLoading(true);
    try {
      const response = await api.get("/vacancies/list", {
        params: {
          ...vacancyFilter, // Include filter criteria
          limit: itemsPerPage,
          offset: (currentPage - 1) * itemsPerPage, // Calculate offset based on the current page
        },
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token?.access_token || ""}`,
        },
      });

      if (!response.data) {
        throw new Error("Data not found");
      }

      dispatch(setTotalItems(response.data.count)); // Update total items for pagination
      setMinMaxPrice({
        minPrice: response?.data?.min_price,
        maxPrice: response?.data?.max_price,
      });
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
        <HomePageLoader />
      ) : (
        <>
          {vacancies.length === 0 && <NotFound />}
          <div className="grid desktop:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-x-10 lg:gap-y-6 gap-4 px-2">
            {vacancies.map((vacancy) => (
              <VacancyViewPage key={vacancy.id} data={vacancy} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
