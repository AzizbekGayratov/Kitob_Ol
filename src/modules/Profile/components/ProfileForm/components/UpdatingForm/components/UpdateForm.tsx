import PhoneInput from "react-phone-number-input/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../../../../../Components/Ui/select";
import { ProfileProps } from "modules/Profile/Profile";
import { useSelector } from "react-redux";

export default function UpdateForm({
  data,
  setData,
  submit,
  cancelSubmit,
}: {
  data: ProfileProps;
  setData: React.Dispatch<React.SetStateAction<ProfileProps>>;
  submit: () => void;
  cancelSubmit: () => void;
}) {
  const { language } = useSelector(
    (state: { language: { language: "uz" | "ru" | "en" } }) => state.language
  );

  return (
    <>
      <ul className="profileWrapper">
        <li>
          <label htmlFor="user_name" className="form_label">
            {language === "uz"
              ? "Ism"
              : language === "ru"
              ? "Имя"
              : "First name"}
          </label>
          <input
            value={data.first_name}
            onChange={(e) => setData({ ...data, first_name: e.target.value })}
            id="user_name"
            name="user_name"
            className="form_active_input"
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
            value={data.last_name}
            onChange={(e) => setData({ ...data, last_name: e.target.value })}
            id="user_lastName"
            name="user_lastName"
            className="form_active_input"
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
            type="date"
            value={data.date_of_birth}
            onChange={(e) =>
              setData({ ...data, date_of_birth: e.target.value })
            }
            id="user_birthDate"
            name="user_birthDate"
            className="form_active_input"
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
          <PhoneInput
            value={data.phone_number}
            id="user_phone"
            name="user_phone"
            onChange={(value) => {
              // bu yerda kichik muammo bulishi mumkun
              setData({ ...data, phone_number: value });
            }}
            className="form_active_input"
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
            type="email"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
            id="user_email"
            name="user_email"
            className="form_active_input"
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
          <Select
            value={data.role}
            disabled
            name="user_gender"
            // onValueChange={(value) => {
            //   // #problem
            //   setData({ ...data, role: value as "user" | "publisher" });
            // }}
          >
            <SelectTrigger className="h-[56px] rounded border border-[#2c30331a] text-[16px] py-[18px] px-5 cursor-pointer text-[#2C3033] outline-none leading-5 w-full">
              <SelectValue className="form_input" placeholder={data.role} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="user">
                {language === "uz"
                  ? "Foydalanuvchi"
                  : language === "ru"
                  ? "Пользователь"
                  : "User"}
              </SelectItem>
              <SelectItem value="publisher">
                {language === "uz"
                  ? "Nashriyot yoki Do’kon"
                  : language === "ru"
                  ? "Издательство или магазин"
                  : "Publisher or Shop"}
              </SelectItem>
            </SelectContent>
          </Select>
        </li>
      </ul>
      <div className="mt-10 flex items-center justify-end gap-5">
        <button
          className="rounded py-[18px] px-[20px] text-textColor leading-5 border border-[rgba(44, 48, 51, 0.7)]"
          onClick={() => cancelSubmit()}
        >
          {language === "uz"
            ? "Bekor qilish"
            : language === "ru"
            ? "Отменить"
            : "Cancel"}
        </button>
        <button
          className="rounded py-[18px] px-[35px] bg-primary text-white leading-5"
          onClick={(e) => {
            e.preventDefault();
            submit();
          }}
        >
          {language === "uz"
            ? "Tahrirlash"
            : language === "ru"
            ? "Редактировать"
            : "Edit"}
        </button>
      </div>
    </>
  );
}
