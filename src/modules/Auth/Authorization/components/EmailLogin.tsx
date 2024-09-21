import React from "react";
import { useNavigate } from "react-router-dom";

export default function EmailLogin() {
  const [email, setEmail] = React.useState("");
  const [isRegistered, setIsRegistered] = React.useState(true);
  const [error, setError] = React.useState("");
  const navigate = useNavigate();

  const submitData = (e: any) => {
    e.preventDefault();
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_REACT_AUTH_URL}/auth/sms/${
            isRegistered ? "login" : "register"
          }/email`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email,
            }),
          }
        );
        if (response.ok) {
          setEmail("");
          window.sessionStorage.setItem("email", email);
          navigate("/authorization/email/otp");
        } else if (response.status === 400) {
          setIsRegistered(!isRegistered);
          setError(
            isRegistered
              ? "Bu email ro'yxatdan o'tmagan"
              : "Bu email allaqachon ro'yxatdan o'tgan"
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
          Email manzilingizni kiriting*
        </p>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form_input"
          placeholder="Someone007@gmail.com"
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
