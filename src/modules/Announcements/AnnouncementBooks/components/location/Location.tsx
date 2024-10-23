// * Since I made the location a separate component, I did not delete the old code, thinking that some error would appear

import LocationSelect from "Components/Common/LocationSelect/LocationSelect";
// import api from "Services/Api";
import {
  ComponentPropsType,
  // CityProps,
  // DistrictProps,
  // languagesType,
} from "modules/Announcements/types/Types";
// import { useEffect, useState } from "react";
// import { useSelector } from "react-redux";

export default function Location({
  formData,
  setFormData,
  reset,
}: ComponentPropsType) {
  // const [cities, setCities] = useState<CityProps[]>([]);
  // const [districtList, setDistrictList] = useState<DistrictProps[]>([]);
  // const [location, setLocation] = useState("Shaharni tanlang");
  // const [city_id, setCity_id] = useState("");
  // const [selectedDistrict, setSelectedDistrict] = useState("");

  // const { language } = useSelector(
  //   (state: { language: { language: languagesType } }) => state.language
  // );

  // // Fetch cities list on component mount
  // useEffect(() => {
  //   const fetchCities = async () => {
  //     try {
  //       const response = await api.get("/cities/list");
  //       setCities(response.data.Cities?.cities || []);
  //     } catch (error) {
  //       console.error("Error fetching cities:", error);
  //       setCities([]);
  //     }
  //   };
  //   fetchCities();
  // }, []);

  // // Reset state based on `reset` prop
  // useEffect(() => {
  //   setCity_id("");
  //   setLocation("Shaharni tanlang");
  //   setSelectedDistrict("");
  //   setDistrictList([]);
  // }, [reset]);

  // // Fetch districts when location (city) changes
  // useEffect(() => {
  //   const fetchDistricts = async () => {
  //     const selectedCity = cities.find((c) => c.name[language] === location);
  //     if (!selectedCity) return;

  //     setCity_id(selectedCity.id);
  //     try {
  //       const response = await api.get(
  //         `/districts/list?city_id=${selectedCity.id}`
  //       );
  //       setDistrictList(response.data.Districts?.districts || []);
  //     } catch (error) {
  //       console.error("Error fetching districts:", error);
  //       setDistrictList([]);
  //     }
  //   };

  //   if (location !== "Shaharni tanlang") {
  //     fetchDistricts();
  //   }
  // }, [location, cities, language]);

  return (
    // <div className="container bg-white p-7">
    //   <h2 className="font-semibold text-[32px] text-primary">
    //     <label htmlFor="location">Manzilni kiriting*</label>
    //   </h2>

    //   <div className="grid grid-cols-2 gap-5 mt-4">
    //     {/* City selection dropdown */}
    //     <select
    //       onChange={(e) => {
    //         setLocation(e.target.value);
    //         setSelectedDistrict(""); // Reset district when city changes
    //       }}
    //       className="form_input"
    //       id="location"
    //       value={location}
    //     >
    //       <option value="Shaharni tanlang" disabled hidden>
    //         Shaharni tanlang
    //       </option>

    //       {cities.length > 0 ? (
    //         cities.map((city) => (
    //           <option key={city.id} value={city.name[language]}>
    //             {city.name[language]}
    //           </option>
    //         ))
    //       ) : (
    //         <option disabled>No cities available</option>
    //       )}
    //     </select>

    //     {/* District selection dropdown */}
    //     {location !== "Shaharni tanlang" && districtList.length > 0 && (
    //       <select
    //         onChange={(e) => {
    //           handleInputChange(e.target.value); // Use the district ID
    //         }}
    //         className="form_input"
    //         value={selectedDistrict}
    //       >
    //         <option value="" disabled hidden>
    //           Tumanni tanlang
    //         </option>
    //         {districtList.length > 0 ? (
    //           districtList.map((district) => (
    //             <option key={district.id} value={district.id}>
    //               {district.name[language]}
    //             </option>
    //           ))
    //         ) : (
    //           <option disabled>No districts available</option>
    //         )}
    //       </select>
    //     )}
    //   </div>
    // </div>

    <LocationSelect
      setSelectedLocation={(location) => setFormData({ ...formData, location })}
      reset={reset}
      stylesForLabel="font-Inter text-[24px] leading-[29px] inline-block"
      padding="p-10"
    />
  );
}
