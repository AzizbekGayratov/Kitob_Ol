// import api from "Services/Api";
import { AnnoymouseUser } from "assets/images/jpg";
import { languagesType } from "modules/Announcements/types/Types";
import { Book } from "modules/ProductView/ProductView";
// import { useEffect, useState } from "react";
import Input from "react-phone-number-input/input";
import { useSelector } from "react-redux";

// type LocationProps = {
//   [key in languagesType]: string;
// };

export default function ContactInfo({ data }: { data: Book }) {
  // const [city, setCity] = useState<LocationProps | null>(null);
  // const [district, setDistrict] = useState<LocationProps | null>(null);
  //   const fetchData = async () => {
  //   try {
  //     const response1 = api.get("/cities/get", {
  //       params: {
  //         id: data.,
  //       },
  //     });
  //     const response2 = api.get("/districts/get", {
  //       params: {
  //         id: data.location.district_id,
  //       },
  //     });

  //     setCity((await response1).data.name);
  //     setDistrict((await response2).data.name);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  // useEffect(() => {
  //   fetchData();
  // }, []);

  const { language } = useSelector(
    (state: { language: { language: languagesType } }) => state.language
  );

  // #responsive design da savol bor
  return (
    <div className="flex flex-col md:flex-row items-center gap-5">
      <div className="sm:size-[120px] size-[100px] overflow-hidden rounded-full">
        <img src={data?.image_url || AnnoymouseUser} alt="user avatar" />
        {/* <img src={AnnoymouseUser} alt="user avatar" /> */}
      </div>

      <address className="flex flex-col pt-[10px] pb-4 gap-[10px] text-center md:text-left">
        <p className="text-[#2C3033] font-semibold text-lg md:text-base capitalize">
          {data?.seller_name}
        </p>
        <a
          href={`mailto:${data?.seller_email}`}
          className="text-[#2C3033] opacity-70"
        >
          {data?.city_name[language]}, {data?.district_name[language]}
        </a>

        <Input
          value={data?.seller_phone_number}
          disabled
          id="user_phone"
          name="user_phone"
          onChange={() => {
            // onchange yozilmaganda error bergani sabab yozib quydim
          }}
          className="text-[#2C3033] font-semibold text-xl leading-[24px] bg-transparent border-none text-center md:text-left"
        />
      </address>
    </div>
  );
}
