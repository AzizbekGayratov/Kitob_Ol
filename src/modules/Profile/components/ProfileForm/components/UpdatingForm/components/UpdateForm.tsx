import PhoneInput from "react-phone-number-input/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../../../../../Components/Ui/select";
import { ProfileProps } from "modules/Profile/Profile";

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
  return (
    <>
      <ul className="profileWrapper">
        <li>
          <label htmlFor="user_name" className="form_label">
            Ism
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
            Familiya
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
            Tug'ilgan sanasi
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
            Telefon raqami
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
            Email manzil
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
            Kim sifatida ro'yxatdan o'tgan
          </label>
          <Select
            value={data.role}
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
              <SelectItem value="user">Foydalanuvchi</SelectItem>
              <SelectItem value="publisher">Nashriyot yoki Do’kon</SelectItem>
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
