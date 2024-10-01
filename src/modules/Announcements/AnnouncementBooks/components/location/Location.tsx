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
  // City and district lists
  const [cities, setCities] = useState<CityProps[]>([]);
  const [districtList, setDistrictList] = useState<DistrictProps[]>([]);

  // Selected city and location
  const [location, setLocation] = useState("");
  const [city_id, setCity_id] = useState("");

  // Fetch cities list on component mount
  useEffect(() => {
    const fetchCities = async () => {
      try {
        const response = await api.get("/cities/list");
        setCities(response.data.cities);
      } catch (error) {
        console.error("Error fetching cities:", error);
      }
    };
    fetchCities();
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
        const response = await api.get(
          `/districts/list?city_id=${city_id[0]?.id}`
        );
        const data = response.data;

        setDistrictList(data.districts);
      } catch (error) {
        console.error(error);
      }
    };
  }, [location, cities]);

  const handleInputChange = (district_id: string) => {
    setFormData({ ...formData, location: { city_id, district_id } });
  };

  return (
    <div className="container bg-white p-7">
      <h2 className="font-semibold text-[32px] text-primary">
        <label htmlFor="location">Manzilni kiriting*</label>
      </h2>
      <div className="grid grid-cols-2 gap-5 mt-4">
        {/* City selection */}
        <select
          onChange={(e) => setLocation(e.target.value)}
          className="form_input"
          defaultValue=""
        >
          <option value="" disabled hidden>
            Shaharni tanlang
          </option>
          {cities.map((city) => (
            <option key={city.id} value={city.name.en}>
              {city.name.en}
            </option>
          ))}
        </select>

        {/* District selection (visible when city is selected) */}
        {location && (
          <select
            onChange={(e) => {
              const selectedDistrict = districtList.find(
                (d) => JSON.parse(d.name_json).en === e.target.value
              );
              if (selectedDistrict) {
                handleInputChange(selectedDistrict.id);
              }
            }}
            className="form_input"
            defaultValue=""
          >
            <option value="" disabled hidden>
              Tumanni tanlang
            </option>
            {districtList.map((district) => (
              <option
                key={district.id}
                value={JSON.parse(district.name_json).en}
              >
                {JSON.parse(district.name_json).en}
              </option>
            ))}
          </select>
        )}
      </div>
    </div>
  );
}
