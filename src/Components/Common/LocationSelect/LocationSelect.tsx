import { useState, useEffect } from "react";
import api from "Services/Api";
import {
  CityProps,
  DistrictProps,
  languagesType,
} from "modules/Announcements/types/Types";
import { useSelector } from "react-redux";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

interface LocationSelectProps {
  setSelectedLocation: (location: {
    city_id: string;
    district_id: string;
  }) => void;
  reset?: boolean | any;
  stylesForLabel?: string;
  padding?: string;
  showTitle?: boolean;
  isForHomePage?: boolean;
}

export default function LocationSelect({
  setSelectedLocation,
  reset,
  stylesForLabel,
  padding,
  showTitle = true,
  isForHomePage = false,
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
    <div
      className={`container ${
        isForHomePage && "px-0 mt-0"
      } bg-white ${padding}`}
    >
      {showTitle && (
        <h4 className={stylesForLabel} style={{ marginBottom: "20px" }}>
          <label htmlFor="location">
            {language === "uz"
              ? "Manzilni kiriting*"
              : language === "ru"
              ? "Введите адрес*"
              : "Enter address*"}
          </label>
        </h4>
      )}

      <div
        className={`grid grid-cols-${
          location === "Shaharni tanlang" ? "1" : "2"
        } gap-5 mt-0 ${isForHomePage && "mt-0"}`}
      >
        {isForHomePage ? (
          <>
            <FormControl
              fullWidth
              sx={{ backgroundColor: "rgba(44, 48, 51,0.1)" }}
            >
              {/* City selection dropdown */}
              {/* <InputLabel id="location_city_label">Shaharni tanlang</InputLabel> */}
              <Select
                labelId="location_city_label"
                id="location_city_select"
                onChange={(e) => {
                  setLocation(e.target.value);
                  setSelectedDistrict(""); // Reset district when city changes
                }}
                value={location}
              >
                <MenuItem value="Shaharni tanlang" disabled>
                  {language === "uz"
                    ? "Shaharni tanlang"
                    : language === "ru"
                    ? "Выберите город"
                    : "Select city"}
                </MenuItem>
                {cities.map((city) => (
                  <MenuItem key={city.id} value={city.name[language]}>
                    {city.name[language]}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            {/* District selection dropdown */}
            {location !== "Shaharni tanlang" && districtList.length > 0 && (
              <FormControl
                fullWidth
                sx={{ backgroundColor: "rgba(44, 48, 51,0.1)" }}
              >
                <InputLabel id="location_district_label">
                  {language === "uz"
                    ? "Tumanini tanlang"
                    : language === "ru"
                    ? "Выберите район"
                    : "Select district"}
                </InputLabel>
                <Select
                  labelId="location_district_label"
                  id="location_district_select"
                  onChange={(e) => {
                    handleDistrictChange(e.target.value);
                  }}
                  value={selectedDistrict}
                >
                  {districtList.map((district) => (
                    <MenuItem key={district.id} value={district.id}>
                      {district.name[language]}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            )}
          </>
        ) : (
          <>
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
              <option
                value={
                  language === "uz"
                    ? "Shaharni tanlang"
                    : language === "ru"
                    ? "Выберите город"
                    : "Select city"
                }
                disabled
                hidden
              >
                {language === "uz"
                  ? "Shaharni tanlang"
                  : language === "ru"
                  ? "Выберите город"
                  : "Select city"}
              </option>

              {cities.length > 0 ? (
                cities.map((city) => (
                  <option key={city.id} value={city.name[language]}>
                    {city.name[language]}
                  </option>
                ))
              ) : (
                <option disabled>
                  {language === "uz"
                    ? "Shaharlar mavjud emas"
                    : language === "ru"
                    ? "Города не найдены"
                    : "No cities available"}
                </option>
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
                  {language === "uz"
                    ? "Tumanini tanlang"
                    : language === "ru"
                    ? "Выберите район"
                    : "Select district"}
                </option>
                {districtList.length > 0 ? (
                  districtList.map((district) => (
                    <option key={district.id} value={district.id}>
                      {district.name[language]}
                    </option>
                  ))
                ) : (
                  <option disabled>
                    {language === "uz"
                      ? "Shaharlar mavjud emas"
                      : language === "ru"
                      ? "Города не найдены"
                      : "No cities available"}
                  </option>
                )}
              </select>
            )}
          </>
        )}
      </div>
    </div>
  );
}
