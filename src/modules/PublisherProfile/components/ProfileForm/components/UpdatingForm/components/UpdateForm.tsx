import { useSelector } from "react-redux";
import PhoneInput from "react-phone-number-input/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../../../../../Components/Ui/select";
import { PublisherProfileProps } from "modules/PublisherProfile/PublisherProfile";

export default function UpdateProfileInfo({
  data,
  setData,
  submit,
  cancelSubmit,
}: {
  data: PublisherProfileProps;
  setData: React.Dispatch<React.SetStateAction<PublisherProfileProps>>;
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
              ? "Tashkilot nomi"
              : language === "ru"
              ? "Название организации"
              : "Organization name"}
          </label>
          <input
            value={data.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
            id="user_name"
            name="user_name"
            className="form_active_input"
          />
        </li>
        <li>
          <label htmlFor="city_id" className="form_label">
            {language === "uz"
              ? "Shahri"
              : language === "ru"
              ? "Город"
              : "City"}
          </label>
          <input
            value={data.location.city_id}
            // onChange={(e) =>
            //   setData({
            //     ...data,
            //     location: { ...data.location, city_id: e.target.value },
            //   })
            // }
            id="city_id"
            name="city_id"
            className="form_active_input"
          />
        </li>
        <li>
          <label htmlFor="district_id" className="form_label">
            {language === "uz"
              ? "Tumani"
              : language === "ru"
              ? "Район"
              : "District"}
          </label>
          <input
            value={data.location.district_id}
            // onChange={(e) =>
            //   setData({
            //     ...data,
            //     location: { ...data.location, district_id: e.target.value },
            //   })
            // }
            id="district_id"
            name="district_id"
            className="form_active_input"
          />
        </li>
        <li>
          <label htmlFor="phone_number" className="form_label">
            {language === "uz"
              ? "Telefon raqami"
              : language === "ru"
              ? "Номер телефона"
              : "Phone number"}
          </label>
          <PhoneInput
            value={data.phone_number}
            onChange={(value) =>
              setData({ ...data, phone_number: value || "" })
            }
            id="phone_number"
            name="phone_number"
            className="form_active_input"
          />
        </li>
        <li>
          <label htmlFor="email" className="form_label">
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
            id="email"
            name="email"
            className="form_active_input"
          />
        </li>
        <li>
          <label htmlFor="type" className="form_label">
            {language === "uz"
              ? "Kim sifatida ro'yxatdan o'tgan"
              : language === "ru"
              ? "Кто зарегистрировался"
              : "Who is registered as"}
          </label>
          <Select
            value={data.type}
            name="type"
            disabled
            // onValueChange={(value) => setData({ ...data, type: value })}
          >
            <SelectTrigger className="h-[56px] rounded border border-[#2c30331a] text-[16px] py-[18px] px-5 cursor-pointer text-[#2C3033] outline-none leading-5 w-full">
              <SelectValue className="form_input" placeholder={data.type} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="publisher">
                {language === "uz"
                  ? "Nashriyot"
                  : language === "ru"
                  ? "Издательство"
                  : "Publisher"}
              </SelectItem>
              <SelectItem value="shop">
                {language === "uz"
                  ? "Do’kon"
                  : language === "ru"
                  ? "Магазин"
                  : "Shop"}
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
