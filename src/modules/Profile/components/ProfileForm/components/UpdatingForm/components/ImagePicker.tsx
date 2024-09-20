import { useSelector } from "react-redux";
import imagePicker from "../../../../../../../assets/images/svg/imagePicker.svg";

export type Profile = {
  name: string;
  lastName: string;
  birthDate: string;
  phone: string;
  email: string;
  gender: "Erkak" | "Ayol";
  avatar: string;
};

export default function ImagePicker() {
  const { avatar } = useSelector(
    (state: { project: { profile: Profile } }) => state.project.profile
  );

  //   avatarka hover bolganda "hover:scale-105 transition-transform" qoshsa boladi
  //   Image almashtirishni qanday api bilan bog'lig'bolgani sabab oddiy div qilib quydim
  return (
    <div className="mb-10 relative w-[120px] mx-auto">
      <div className="w-[120px] h-[120px] mx-auto overflow-hidden rounded-full cursor-pointer">
        <img
          src={avatar}
          className="w-full h-full object-cover"
          alt="user avatar"
        />
      </div>
      <div className="p-[10px] bg-[#2C3033] rounded-[100px] border border-white absolute right-0 bottom-0 cursor-pointer">
        <label htmlFor="image">
          <img src={imagePicker} alt="svg" />
        </label>
        <input
          type="file"
          id="image"
          style={{ display: "none" }}
          accept="image/*"
        />
      </div>
    </div>
  );
}
