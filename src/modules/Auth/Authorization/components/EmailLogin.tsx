import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function EmailLogin() {
  const [email, setEmail] = React.useState("");
  const navigate = useNavigate();

  const submitData = (e: any) => {
    e.preventDefault();
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_REACT_AUTH_URL}/auth/sms/login/email`,
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
          window.sessionStorage.setItem("auth_response_type", "login");
          window.sessionStorage.setItem("email", email);
          navigate("/authorization/email/otp");
        } else if (response.status === 400) {
          const responseRegister = await fetch(
            `${import.meta.env.VITE_REACT_AUTH_URL}/auth/sms/register/email`,
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

          if (responseRegister.ok) {
            setEmail("");
            window.sessionStorage.setItem("auth_response_type", "register");
            window.sessionStorage.setItem("email", email);
            navigate("/authorization/email/otp");
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
