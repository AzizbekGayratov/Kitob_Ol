import { useSelector } from "react-redux";
import Input from "react-phone-number-input/input";
import { PublisherProfileProps } from "modules/PublisherProfile/PublisherProfile";

export default function ProfileInfo() {
  const profileDataFromRedux = useSelector(
    (state: { project: { publisherProfile: PublisherProfileProps } }) =>
      state.project.publisherProfile
  );
  const { language } = useSelector(
    (state: { language: { language: "uz" | "ru" | "en" } }) => state.language
  );
  const rawData = window.sessionStorage.getItem("profile");
  const profileData = rawData ? JSON.parse(rawData) : null;
  const profile = profileData || profileDataFromRedux;

  return (
    <ul className="profileWrapper">
      <li>
        <label htmlFor="user_name" className="form_label">
          {language === "uz"
            ? "Tashkilot nomi"
            : language === "ru"
            ? "Название организации"
            : "Organization name"}
        </label>
        <input
          value={profile?.name}
          disabled
          id="user_name"
          name="user_name"
          className="form_input"
        />
      </li>
      <li>
        <label htmlFor="user_birthDate" className="form_label">
          {language === "uz" ? "Shahri" : language === "ru" ? "Город" : "City"}
        </label>
        <input
          value={profile?.location?.city_id}
          disabled
          id="user_birthDate"
          name="user_birthDate"
          className="form_input"
        />
      </li>
      <li>
        <label htmlFor="user_lastName" className="form_label">
          {language === "uz"
            ? "Tumani"
            : language === "ru"
            ? "Район"
            : "District"}
        </label>
        <input
          value={profile?.location?.district_id}
          disabled
          id="user_lastName"
          name="user_lastName"
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
          value={profile?.phone_number}
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
          value={profile?.email}
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
          value={profile?.type}
          disabled
          id="user_gender"
          name="user_gender"
          className="form_input"
        />
      </li>
    </ul>
  );
}
