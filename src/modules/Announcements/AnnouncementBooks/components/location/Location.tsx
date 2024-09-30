import api from "Services/Api";
import { ComponentPropsType } from "modules/Announcements/types/Types";
import { useEffect, useState } from "react";

interface CityProps {
  id: string;
  name: {
    en: string;
    ru: string;
    uz: string;
  };
}
interface DistrictProps {
  id: string;
  name_json: string;
}

export default function Location({
  formData,
  setFormData,
}: ComponentPropsType) {
  // list
  const [cities, setCities] = useState<CityProps[]>([]);
  const [districtList, setDistrictList] = useState<DistrictProps[]>([]);

  // selected
  const [location, setLocation] = useState("");

  // id
  const [city_id, setCity_id] = useState("");

  useEffect(() => {
    const fetchList = async () => {
      try {
        const response = await api.get("/cities/list");
        const data = response.data;
        setCities(data.cities);
      } catch (error) {
        console.error(error);
      }
    };
    fetchList();
  }, []);
  
  useEffect(() => {
    const fetchData = async () => {
      const city_id = await cities.filter((c) => {
        let id;
        if (location === c.name.en) {
          id = c.id;
          setCity_id(c.id);
        }
        return id;
      });

      try {
        const response = await api.get(`/districts/list?id=${city_id[0]?.id}`);
        const data = response.data;

        setDistrictList(data.districts);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [location]);

  const handleInputChange = (id: string) => {
    console.log({
      city_id,
      district_id: id,
    });
    setFormData({ ...formData, location: { city_id, district_id: id } });
  };

  return (
    <div className="container bg-white p-7">
      <h2 className="font-semibold text-[32px] text-primary">
        <label htmlFor="location">Manzilni kiriting*</label>
      </h2>
      <div className="grid grid-cols-2 gap-5 mt-4">
        <select
          onChange={(e) => {
            // e.preventDefault();
            setLocation(e.target.value);
          }}
          className="form_input"
        >
          {cities.map((i, _) => (
            <option key={_}>{i.name.en}</option>
          ))}
        </select>
        {location.length !== 0 && (
          <select
            onChange={(e) => {
              districtList.map((i, _) => {
                if (JSON.parse(i.name_json).en === e.target.value) {
                  handleInputChange(i.id);
                }
              });
            }}
            className="form_input"
          >
            {districtList.map((i, _) => (
              <option key={_}>{JSON.parse(i.name_json).en}</option>
            ))}
          </select>
        )}
      </div>
    </div>
  );
}
