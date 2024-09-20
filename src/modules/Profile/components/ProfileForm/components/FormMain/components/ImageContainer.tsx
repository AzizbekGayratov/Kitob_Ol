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


export default function ImageContainer() {
  const { avatar } = useSelector(
    (state: { project: { profile: Profile } }) => state.project.profile
  );

  //   avatarka hover bolganda "hover:scale-105 transition-transform" qoshsa boladi
  return (
    <div className="w-[120px] h-[120px] mx-auto overflow-hidden rounded-full cursor-pointer mb-10">
      <img
        src={avatar}
        className="w-full h-full object-cover"
        alt="user avatar"
      />
    </div>
  );
}
