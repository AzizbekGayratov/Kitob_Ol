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
    <div className="flex flex-col gap-4">
      <a href={`tel:${phone}`}>
        <button className="pt-[19px] pb-[18px] px-[67px] bg-[#2C3033] rounded text-white">
          Telefon qilish
        </button>
      </a>
      <Link to={`/product/${name}/comments`}>
        <button className="pt-[19px] pb-[18px] px-[60px] border border-[#2C3033] rounded text-[#2C3033]">
          Murojaat qilish
        </button>
      </Link>
    </div>
  );
}
