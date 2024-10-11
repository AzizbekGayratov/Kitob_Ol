import React from "react";
import { Link, useNavigate } from "react-router-dom";
import PhoneNumberInput from "Components/Common/Input/PhoneNumberInput";

export default function PhoneLogin() {
  const [phone, setPhone] = React.useState("+998");
  const navigate = useNavigate();

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
          Telefon raqamingizni kiriting*
        </p>
        {/* <Input
          value={phone}
          onChange={(value) => setPhone(value as string)}
          className="form_input"
          required
        /> */}
        <PhoneNumberInput phone={phone} setPhone={setPhone} />
        <p className="text-base leading-[19px] font-light text-primary opacity-70 max-w-[280px] mt-4 sm:px-5">
          Avtorizatsiya qilish uchun iltimos email manzilingizni kiriting!
        </p>
        <Link
          to="/"
          className="text-blue-400 text-xs inline-block mt-3 sm:px-2"
        >
          Visit homepage
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:mt-0 mt-[350px]">
        <button
          type="submit"
          className="bg-primary text-white py-[18px] text-base leading-[19px]"
        >
          Keyingisi
        </button>
      </div>
    </form>
  );
}
