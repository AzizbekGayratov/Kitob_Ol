import Input from "react-phone-number-input/input";
import { useSelector } from "react-redux";

export type Profile = {
  name: string;
  lastName: string;
  birthDate: string;
  phone: string;
  email: string;
  gender: "Erkak" | "Ayol";
  avatar: string;
};


export default function ContactInfo() {
  const { profile } = useSelector(
    (state: { project: { profile: Profile } }) => state.project
  );

  // #responsive design da savol bor
  return (
    <div className="flex items-center gap-5">
      <div className="sm:w-[120px] sm:h-[120px] w-[100px] h-[100px] overflow-hidden rounded-full">
        <img src={profile?.avatar} alt="user avatar" />
      </div>
      <address className="flex flex-col pt-[10px] pb-4 gap-[10px]">
        <p className="text-[#2C3033] font-semibold">{profile?.name}</p>
        <span className="text-[#2C3033] opacity-70">Toshkent, Chilonzor</span>
        <Input
          value={profile.phone}
          disabled
          id="user_phone"
          name="user_phone"
          onChange={() => {
            // onchange yozilmaganda error bergani sabab yozib quydim
          }}
          className="text-[#2C3033] font-semibold text-xl leading-[24px] bg-transparent border-none"
        />
      </address>
    </div>
  );
}
