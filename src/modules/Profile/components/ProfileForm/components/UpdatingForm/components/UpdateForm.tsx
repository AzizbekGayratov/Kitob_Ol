import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PhoneInput from "react-phone-number-input/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../../../../../Components/Ui/select";
import {
  setIsProfileUpdating,
  updateProfileData,
} from "Store/profileSlice/profileSlice";

export type Profile = {
  name: string;
  lastName: string;
  birthDate: string;
  phone: string;
  email: string;
  gender: "Erkak" | "Ayol";
  avatar: string;
};

export default function UpdateForm() {
  const { profile } = useSelector(
    (state: { project: { profile: Profile } }) => state.project
  );

  const [name, setName] = useState<string>(profile.name);
  const [lastName, setLastName] = useState<string>(profile.lastName);
  const [birthDate, setBirthDate] = useState<string>(profile.birthDate);
  const [phone, setPhone] = useState<string | undefined>(profile.phone);
  const [email, setEmail] = useState<string>(profile.email);
  const [gender, setGender] = useState<"Erkak" | "Ayol">(profile.gender);

  const dispatch = useDispatch();

  const cancelSubmit = () => {
    setName(profile.name);
    setLastName(profile.lastName);
    setBirthDate(profile.birthDate);
    setPhone(profile.phone);
    setEmail(profile.email);
    setGender(profile.gender);

    dispatch(setIsProfileUpdating(false));
  };

  const submit = () => {
    const newData = {
      name,
      lastName,
      birthDate,
      phone,
      email,
      gender,
      avatar: profile.avatar,
    };

    console.log(newData);

    dispatch(updateProfileData(newData));
    dispatch(setIsProfileUpdating(false));
  };

  return (
    <>
      <ul className="profileWrapper">
        <li>
          <label htmlFor="user_name" className="form_label">
            Ism
          </label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            id="user_name"
            name="user_name"
            className="form_active_input"
          />
        </li>
        <li>
          <label htmlFor="user_lastName" className="form_label">
            Familiya
          </label>
          <input
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            id="user_lastName"
            name="user_lastName"
            className="form_active_input"
          />
        </li>
        <li>
          <label htmlFor="user_birthDate" className="form_label">
            Tug'ilgan sanasi
          </label>
          <input
            type="date"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
            id="user_birthDate"
            name="user_birthDate"
            className="form_active_input"
          />
        </li>
        <li>
          <label htmlFor="user_phone" className="form_label">
            Telefon raqami
          </label>
          <PhoneInput
            value={phone}
            id="user_phone"
            name="user_phone"
            onChange={(value) => {
              // bu yerda kichik muammo bulishi mumkun
              setPhone(value);
            }}
            className="form_active_input"
          />
        </li>
        <li>
          <label htmlFor="user_email" className="form_label">
            Email manzil
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="user_email"
            name="user_email"
            className="form_active_input"
          />
        </li>
        <li>
          <label htmlFor="user_gender" className="form_label">
            Jinsi
          </label>
          <Select
            value={gender}
            name="user_gender"
            onValueChange={(value) => {
              // #problem
              setGender(value as "Erkak" | "Ayol");
              console.log(value);
            }}
          >
            <SelectTrigger className="h-[56px] rounded border border-[#2c30331a] text-[16px] py-[18px] px-5 cursor-pointer text-[#2C3033] outline-none leading-5 w-full">
              <SelectValue className="form_input" placeholder="Jinsi" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Erkak">Erkak</SelectItem>
              <SelectItem value="Ayol">Ayol</SelectItem>
            </SelectContent>
          </Select>
        </li>
      </ul>
      <div className="mt-10 flex items-center justify-end gap-5">
        <button
          className="rounded py-[18px] px-[20px] text-textColor leading-5 border border-[rgba(44, 48, 51, 0.7)]"
          onClick={() => cancelSubmit()}
        >
          Bekor qilish
        </button>
        <button
          className="rounded py-[18px] px-[35px] bg-primary text-white leading-5"
          onClick={(e) => {
            e.preventDefault();
            submit();
          }}
        >
          Saqlash
        </button>
      </div>
    </>
  );
}
