import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

export type Profile = {
  name: string;
  lastName: string;
  birthDate: string;
  phone: string;
  email: string;
  gender: "Erkak" | "Ayol";
  avatar: string;
};


export default function ButtonGroup() {
  const {
    profile: { phone },
  } = useSelector((state: { project: { profile: Profile } }) => state.project);

  const { name } = useParams();
  return (
    <div className="grid md:grid-cols-2  max-w-full">
      <a href={`tel:${phone}`}>
        <button className="text-white font-normal bg-[#2C3033] w-full py-[18px] ">
          Telefon qilish
        </button>
      </a>
      <Link to={`/product/${name}/comments`}>
        <button className="text-black font-normal bg-[#EEEEEE] w-full py-[18px]">
          Izoh yozish
        </button>
      </Link>
    </div>
  );
}
