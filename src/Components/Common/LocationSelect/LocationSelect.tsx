import { useState, useEffect } from "react";
import api from "Services/Api";
import {
  CityProps,
  DistrictProps,
  languagesType,
} from "modules/Announcements/types/Types";
import { useSelector } from "react-redux";

interface LocationSelectProps {
  selectedLocation: {
    city_id: string;
    district_id: string;
  };
  setSelectedLocation: (location: {
    city_id: string;
    district_id: string;
  }) => void;
  reset: boolean | any;
}

export default function LocationSelect({
  selectedLocation,
  setSelectedLocation,
  reset,
}: LocationSelectProps) {
  const [cities, setCities] = useState<CityProps[]>([]);
  const [districtList, setDistrictList] = useState<DistrictProps[]>([]);
  const [location, setLocation] = useState("Shaharni tanlang");
  const [city_id, setCity_id] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");

  const { language } = useSelector(
    (state: { language: { language: languagesType } }) => state.language
  );

  // Fetch cities on mount
  useEffect(() => {
    const fetchCities = async () => {
      try {
        const response = await api.get("/cities/list");
        setCities(response.data.Cities?.cities || []);
      } catch (error) {
        console.error("Error fetching cities:", error);
        setCities([]);
      }
    };
    fetchCities();
  }, []);

  // Reset state based on `reset` prop
  useEffect(() => {
    if (reset) {
      setCity_id("");
      setLocation("Shaharni tanlang");
      setSelectedDistrict("");
      setDistrictList([]);
    }
  }, [reset]);

  // Fetch districts when city changes
  useEffect(() => {
    const fetchDistricts = async () => {
      const selectedCity = cities.find((c) => c.name[language] === location);
      if (!selectedCity) return;

      setCity_id(selectedCity.id);
      try {
        const response = await api.get(
          `/districts/list?city_id=${selectedCity.id}`
        );
        setDistrictList(response.data.Districts?.districts || []);
      } catch (error) {
        console.error("Error fetching districts:", error);
        setDistrictList([]);
      }
    };

    if (location !== "Shaharni tanlang") {
      fetchDistricts();
    }
  }, [location, cities, language]);

  // Handle district selection
  const handleDistrictChange = (district_id: string) => {
    setSelectedLocation({ city_id, district_id });
    setSelectedDistrict(district_id);
  };

  return (
    <div className="container bg-white p-7">
      <h2 className="font-semibold text-[32px] text-primary">
        <label htmlFor="location">Manzilni kiriting*</label>
      </h2>

      <div className="grid grid-cols-2 gap-5 mt-4">
        {/* City selection dropdown */}
        <select
          onChange={(e) => {
            setLocation(e.target.value);
            setSelectedDistrict(""); // Reset district when city changes
          }}
          className="form_input"
          id="location"
          value={location}
        >
          <option value="Shaharni tanlang" disabled hidden>
            Shaharni tanlang
          </option>

          {cities.length > 0 ? (
            cities.map((city) => (
              <option key={city.id} value={city.name[language]}>
                {city.name[language]}
              </option>
            ))
          ) : (
            <option disabled>No cities available</option>
          )}
        </select>

        {/* District selection dropdown */}
        {location !== "Shaharni tanlang" && districtList.length > 0 && (
          <select
            onChange={(e) => handleDistrictChange(e.target.value)}
            className="form_input"
            value={selectedDistrict}
          >
            <option value="" disabled hidden>
              Tumanni tanlang
            </option>
            {districtList.length > 0 ? (
              districtList.map((district) => (
                <option key={district.id} value={district.id}>
                  {district.name[language]}
                </option>
              ))
            ) : (
              <option disabled>No districts available</option>
            )}
          </select>
        )}
      </div>
    </div>
  );
}
