import { useParams } from "react-router-dom";
import MainVacancyContent from "./MainVacancyContent";
import { useEffect, useMemo, useState } from "react";
import { Loading } from "Components/Common/Loading";
import { VacancyProps } from "modules/Home/components/Vacancies";
import api from "Services/Api";
import {
  BreadCrumbComponent,
  MobileBreadCrumb,
} from "modules/ProductView/components/BreadCrumb";
import { safeParse } from "lib/utils";

export default function VacancyView() {
  const { name } = useParams();
  const [data, setData] = useState<VacancyProps | null>(null);
  const [list, setList] = useState<VacancyProps[]>([]);

  const [loading, setLoading] = useState(true);
  const token = safeParse(window.localStorage.getItem("token"));

  const getPublisherOtherVacancies = async (id: string) => {
    try {
      const response = await api.get("/vacancies/list", {
        params: {
          publisher_id: id,
        },
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token.access_token}`,
        }
      });

      if (response.data) {
        setList(response.data.vacancies);
      }
    } catch (error) {
      console.error(error);
    }
  };

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
          await getPublisherOtherVacancies(response?.data?.publisher_id);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    getVacancies();
  }, [name]);

  const memoizedData = useMemo(() => data, [data]);
  const memoizedList = useMemo(() => list, [list]);
  const title = useMemo(() => data?.title || "Loading...", [data?.title]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="container">
      <>
        <BreadCrumbComponent name={title as string} />
        <MobileBreadCrumb name={title as string} />
      </>
      <MainVacancyContent
        data={memoizedData as VacancyProps}
        list={memoizedList}
      />
    </div>
  );
}
