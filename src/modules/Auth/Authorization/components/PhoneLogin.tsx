import Input from "react-phone-number-input/input";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function PhoneLogin() {
  const [phone, setPhone] = React.useState("+998");
  const [error, setError] = React.useState("");
  const [isRegistered, setIsRegistered] = React.useState(false);
  const navigate = useNavigate();

  const submitData = (e: any) => {
    e.preventDefault();
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_REACT_AUTH_URL}/auth/sms/${
            isRegistered ? "login" : "register"
          }/phone`,
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
          navigate("/authorization/phone/otp");
        } else if (response.status === 400) {
          setIsRegistered(!isRegistered);
          setError(
            isRegistered
              ? "Bu raqam ro'yxatdan o'tmagan"
              : "Bu raqam allaqachon ro'yxatdan o'tgan"
          );
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
        <Input
          value={phone}
          onChange={(value) => setPhone(value as string)}
          className="form_input"
          required
        />
        {error ? (
          <p className="text-red-500 text-base leading-[19px] font-light mt-4 ">
            {error}
          </p>
        ) : (
          <p className="text-base leading-[19px] font-light text-primary opacity-70 max-w-[280px] mt-4 sm:px-5">
            Avtorizatsiya qilish uchun iltimos email manzilingizni kiriting!
          </p>
        )}
      </div>
      <div className="grid grid-cols-1 sm:mt-0 mt-[350px]">
        <button
          type="submit"
          className="bg-primary text-white py-[18px] text-base leading-[19px]"
        >
          {error
            ? isRegistered
              ? "Login qilish"
              : "Registratsiya qilish"
            : "Keyingisi"}
        </button>
      </div>
    </form>
  );
}
