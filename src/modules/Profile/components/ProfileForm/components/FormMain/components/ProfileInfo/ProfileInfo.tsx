import { useSelector } from "react-redux";
import Input from "react-phone-number-input/input";
import { ProfileProps } from "modules/Profile/Profile";

export default function ProfileInfo() {
  const profileDataFromRedux = useSelector(
    (state: { project: { profile: ProfileProps } }) => state.project.profile
  );
  const { language } = useSelector(
    (state: { language: { language: "uz" | "ru" | "en" } }) => state.language
  );
  const rawData = window.sessionStorage.getItem("profile");
  const profileData = rawData ? JSON.parse(rawData) : null;
  const profile = profileData || profileDataFromRedux;

  const userProp =
    language === "uz"
      ? "Foydalanuvchi"
      : language === "ru"
      ? "Пользователь"
      : "User";
  const otherProp =
    language === "uz"
      ? "Do’kon yoki Nashriyot"
      : language === "ru"
      ? "Издательство или магазин"
      : "Publisher or Shop";
  const role = "user" ? userProp : otherProp;

  return (
    <ul className="profileWrapper">
      <li>
        <label htmlFor="user_name" className="form_label">
          {language === "uz" ? "Ism" : language === "ru" ? "Имя" : "First name"}
        </label>
        <input
          value={profile.first_name}
          disabled
          id="user_name"
          name="user_name"
          className="form_input"
        />
      </li>
      <li>
        <label htmlFor="user_lastName" className="form_label">
          {language === "uz"
            ? "Familiya"
            : language === "ru"
            ? "Фамилия"
            : "Last name"}
        </label>
        <input
          value={profile.last_name}
          disabled
          id="user_lastName"
          name="user_lastName"
          className="form_input"
        />
      </li>
      <li>
        <label htmlFor="user_birthDate" className="form_label">
          {language === "uz"
            ? "Tug'ilgan sanasi"
            : language === "ru"
            ? "Дата рождения"
            : "Date of birth"}
        </label>
        <input
          value={profile.date_of_birth}
          disabled
          id="user_birthDate"
          name="user_birthDate"
          className="form_input"
        />
      </li>
      <li>
        <label htmlFor="user_phone" className="form_label">
          {language === "uz"
            ? "Telefon raqami"
            : language === "ru"
            ? "Номер телефона"
            : "Phone number"}
        </label>
        <Input
          value={profile.phone_number}
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
          {language === "uz"
            ? "Email manzil"
            : language === "ru"
            ? "Адрес электронной почты"
            : "Email address"}
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
          {language === "uz"
            ? "Kim sifatida ro'yxatdan o'tgan"
            : language === "ru"
            ? "Кто зарегистрировался"
            : "Who is registered as"}
        </label>
        <input
          value={role}
          disabled
          id="user_gender"
          name="user_gender"
          className="form_input"
        />
      </li>
    </ul>
  );
}
