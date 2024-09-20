import { useSelector } from "react-redux";
import Input from "react-phone-number-input/input";

export type Profile = {
  name: string;
  lastName: string;
  birthDate: string;
  phone: string;
  email: string;
  gender: "Erkak" | "Ayol";
  avatar: string;
};


export default function ProfileInfo() {
  const { profile } = useSelector(
    (state: { project: { profile: Profile } }) => state.project
  );

  return (
    <ul className="profileWrapper">
      <li>
        <label htmlFor="user_name" className="form_label">
          Ism
        </label>
        <input
          value={profile.name}
          disabled
          id="user_name"
          name="user_name"
          className="form_input"
        />
      </li>
      <li>
        <label htmlFor="user_lastName" className="form_label">
          Familiya
        </label>
        <input
          value={profile.lastName}
          disabled
          id="user_lastName"
          name="user_lastName"
          className="form_input"
        />
      </li>
      <li>
        <label htmlFor="user_birthDate" className="form_label">
          Tug'ulgan sana
        </label>
        <input
          value={profile.birthDate}
          disabled
          id="user_birthDate"
          name="user_birthDate"
          className="form_input"
        />
      </li>
      <li>
        <label htmlFor="user_phone" className="form_label">
          Telefon raqam
        </label>
        <Input
          value={profile.phone}
          disabled
          id="user_phone"
          name="user_phone"
          onChange={() => {
            // onchange yozilmaganda error bergani sabab yozib quydim
          }}
          className="form_input"
        />
      </li>
      <li>
        <label htmlFor="user_email" className="form_label">
          Email manzil
        </label>
        <input
          value={profile.email}
          disabled
          id="user_email"
          name="user_email"
          className="form_input"
        />
      </li>
      <li>
        <label htmlFor="user_gender" className="form_label">
          Jinsi
        </label>
        <input
          value={profile.gender}
          disabled
          id="user_gender"
          name="user_gender"
          className="form_input"
        />
      </li>
    </ul>
  );
}
