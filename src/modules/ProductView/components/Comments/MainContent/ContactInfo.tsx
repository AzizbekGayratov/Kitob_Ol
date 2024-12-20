import { PublisherProps } from "modules/ProductView/ProductView";
import Input from "react-phone-number-input/input";

export default function ContactInfo({ data }: { data: PublisherProps }) {

  // #responsive design da savol bor
  return (
    <div className="flex flex-col md:flex-row items-center gap-5">
      <div className="sm:size-[120px] size-[100px] overflow-hidden rounded-full">
        <img src={data.image_url} alt="user avatar" />
      </div>

      <address className="flex flex-col pt-[10px] pb-4 gap-[10px] text-center md:text-left">
        <p className="text-[#2C3033] font-semibold text-lg md:text-base">
          {data.name}
        </p>
        <span className="text-[#2C3033] opacity-70">Toshkent, Chilonzor</span>

        <Input
          value={data.phone_number}
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
