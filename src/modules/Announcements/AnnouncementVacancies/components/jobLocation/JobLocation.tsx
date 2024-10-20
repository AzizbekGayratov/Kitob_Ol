import {
  ComponentPropsTypeJob,
  CityProps,
  DistrictProps,
  languagesType,
} from "modules/Announcements/types/Types";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import api from "Services/Api";

export default function JobLocation({
  jobFormData,
  setJobFormData,
}: ComponentPropsTypeJob) {
  const [cities, setCities] = useState<CityProps[]>([]);
  const [districtList, setDistrictList] = useState<DistrictProps[]>([]);
  const { language } = useSelector(
    (state: { language: { language: languagesType } }) => state.language
  );

  const [cityId, setCityId] = useState<string>("");
  const [districtId, setDistrictId] = useState<string>("");
  

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

  // Fetch districts when a city is selected
  useEffect(() => {
    const fetchDistricts = async () => {
      if (!cityId) return;

      try {
        const response = await api.get(`/districts/list?city_id=${cityId}`);
        const data = response.data.Districts.districts.map((district: DistrictProps) => ({
          ...district,
          name: district.name,
        }));
        setDistrictList(data);
      } catch (error) {
        console.error("Error fetching districts:", error);
      }
    };

    fetchDistricts();
  }, [cityId]);

  const handleCityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCity = cities.find(
      (city: CityProps) => city.name[language] === e.target.value
    );
    if (selectedCity) {
      setCityId(selectedCity.id);
      setJobFormData({
        ...jobFormData,
        location: { city_id: selectedCity.id, district_id: "" }, // Reset district on city change
      });
      setDistrictList([]); // Clear district list when city changes
      setDistrictId(""); // Reset selected district
    }
  };

  const handleDistrictChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedDistrict = districtList.find(
      (district: DistrictProps) => district.name[language] === e.target.value
    );
    if (selectedDistrict) {
      setDistrictId(selectedDistrict.id);
      setJobFormData({
        ...jobFormData,
        location: { ...jobFormData.location, district_id: selectedDistrict.id },
      });
    }
  };

  return (
    <div className="container bg-white p-7">
      <h2 className="font-semibold text-[32px] text-primary">
        <label htmlFor="jobLocation">Manzilni kiriting*</label>
      </h2>

      <div className="grid grid-cols-2 gap-5 mt-4">
        {/* City selection */}
        <select
          onChange={handleCityChange}
          className="form_input"
          id="location"
          defaultValue=""
        >
          <option value="" disabled hidden>
            Shaharni tanlang
          </option>

          {cities.map((city: CityProps) => (
            <option key={city.id} value={city.name[language]}>
              {city.name[language]}
            </option>
          ))}
        </select>

        {/* District selection (visible when city is selected) */}
        {cityId && (
          <select
            onChange={handleDistrictChange}
            className="form_input"
            defaultValue=""
          >
            <option value="" disabled hidden>
              Tumanni tanlang
            </option>
            {districtList.map((district: DistrictProps) => (
              <option key={district.id} value={district.name[language]}>
                {district.name[language]}
              </option>
            ))}
          </select>
        )}
      </div>
    </div>
  );
}
