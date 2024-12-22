import React from "react";
import { Link, useNavigate } from "react-router-dom";
import PhoneNumberInput from "Components/Common/Input/PhoneNumberInput";
import { useSelector } from "react-redux";

export default function PhoneLogin() {
  const [phone, setPhone] = React.useState("+998");
  const navigate = useNavigate();
  const { language } = useSelector(
    (state: { language: { language: "uz" | "ru" | "en" } }) => state.language
  );

  const submitData = (e: any) => {
    e.preventDefault();
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_REACT_AUTH_URL}/auth/sms/login/phone`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              phone: phone,
            }),
          }
        );
        if (response.ok) {
          setPhone("+998");
          window.sessionStorage.setItem("auth_response_type", "login");
          window.sessionStorage.setItem("phone", phone);
          navigate("/authorization/phone/otp");
        } else if (response.status === 400) {
          const responseRegister = await fetch(
            `${import.meta.env.VITE_REACT_AUTH_URL}/auth/sms/register/phone`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                phone: phone,
              }),
            }
          );

          if (responseRegister.ok) {
            setPhone("+998");
            window.sessionStorage.setItem("auth_response_type", "register");
            window.sessionStorage.setItem("phone", phone);
            navigate("/authorization/phone/otp");
          } else {
            throw new Error("Request failed");
          }
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  };

  return (
    <form
      onSubmit={(e) => {
        submitData(e);
      }}
    >
      <div className="sm:p-10 sm:pb-[100px] p-4">
        <p className="text-base leading-[19px] font-light text-primary opacity-70 mb-[10px] sm:px-5">
          {language === "uz"
            ? "Telefon raqamingizni kiriting*"
            : language === "ru"
            ? "Введите свой номер телефона*"
            : "Enter your phone number*"}
        </p>
        {/* <Input
          value={phone}
          onChange={(value) => setPhone(value as string)}
          className="form_input"
          required
        /> */}
        <PhoneNumberInput phone={phone} setPhone={setPhone} />
        <p className="text-base leading-[19px] font-light text-primary opacity-70 max-w-[280px] mt-4 sm:px-5">
          {language === "uz"
            ? "Avtorizatsiya qilish uchun iltimos telefon raqamingizni kiriting!"
            : language === "ru"
            ? "Пожалуйста, введите свой номер телефона для авторизации!"
            : "Please enter your phone number for authorization!"}
        </p>
        <Link
          to="/"
          className="text-blue-400 text-xs inline-block mt-3 sm:px-2"
        >
          Kitobol.uz
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:mt-0 mt-[350px]">
        <button
          type="submit"
          className="bg-primary text-white py-[18px] text-base leading-[19px]"
        >
          {language === "uz"
            ? "Keyingisi"
            : language === "ru"
            ? "Далее"
            : "Next"}
        </button>
      </div>
    </form>
  );
}
