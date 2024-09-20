import Input from "react-phone-number-input/input";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function PhoneRegister() {
  const [phone, setPhone] = React.useState("+998");
  const navigate = useNavigate();

  const submitData = (e: any) => {
    e.preventDefault();
    const sendSMS = async () => {
      try {
        const response = await fetch(
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

        if (response.ok) {
          setPhone("+998");
          window.sessionStorage.setItem("phone", phone);
          navigate("/register/phone/otp");
        }

      } catch (error) {
        console.error(error);
      }
    };
    sendSMS();
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
        <Input
          value={phone}
          onChange={(value) => {
            setPhone(value as string);
          }}
          className="form_input"
          required
        />
        <p className="text-base leading-[19px] font-light text-primary opacity-70 max-w-[280px] mt-4 sm:px-5">
          kirish uchun iltimos telefon raqamingini kiriting!
        </p>
      </div>
      <div className="grid grid-cols-1 sm:mt-0 mt-[350px]">
        <button className="bg-primary text-white py-[18px] text-base leading-[19px]">
          Keyingisi
        </button>
      </div>
    </form>
  );
}
