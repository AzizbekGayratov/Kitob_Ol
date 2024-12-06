import PhoneInput from "react-phone-number-input/input";

export default function UpdatingProfileData({
  data,
  setData,
  submit,
}: any) {
  return (
    <form>
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
            placeholder="Ismingizni kiriting"
            required
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
            placeholder="Familiyangizni kiriting"
            required
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
            required
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
            onChange={(value?: string | undefined) => {
              // bu yerda kichik muammo bulishi mumkun
              setData({ ...data, phone_number: value });
            }}
            className="form_active_input"
            placeholder="+998 99 999 99 99"
            required
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
            placeholder="Email manzilingizni kiriting"
            required
          />
        </li>
        <li className="flex flex-col justify-end">
          <button
            className="rounded w-full py-[18px] px-[35px] bg-primary text-white leading-5"
            onClick={(e) => {
              e.preventDefault();
              submit();
            }}
            type="submit"
          >
            Yuborish
          </button>
        </li>
      </ul>
    </form>
  );
}
