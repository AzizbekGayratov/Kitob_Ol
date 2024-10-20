import api from "Services/Api";
import {
  ComponentPropsType,
  CityProps,
  DistrictProps,
} from "modules/Announcements/types/Types";
import { useEffect, useState } from "react";

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
        setCities(response.data.Cities.cities);
      } catch (error) {
        console.error("Error fetching cities:", error);
      }
    };
    fetchCities();
  }, []);

  // Fetch district list when location or cities change
  useEffect(() => {
    const fetchData = async () => {
      if (cities.length === 0) return; // Ensure cities are loaded before proceeding

      const selectedCity = cities.find((c) => c.name.en === location);
      if (selectedCity) {
        setCity_id(selectedCity.id);
      } else {
        return; // City not found
      }

      try {
        const response = await api.get(
          `/districts/list?city_id=${selectedCity.id}`
        );
        setDistrictList(response.data.Districts.districts);
      } catch (error) {
        console.error("Error fetching districts:", error);
      }
    };

    fetchData();
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
          id="location"
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
              const selectedDistrict = districtList.find((d) => {
                const nameJson = d.name_json;
                return nameJson && JSON.parse(nameJson).en === e.target.value;
              });
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
              <option key={district.id} value={district.name.en}>
                {district.name.en}
              </option>
            ))}
          </select>
        )}
      </div>
    </div>
  );
}
