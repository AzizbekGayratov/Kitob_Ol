import React from "react";
import { useNavigate } from "react-router-dom";
import AuthOTP from "./AuthOTP";
import { Storage } from "../../../../../Services";

export default function AuthPhoneOTP() {
  const [otp, setOtp] = React.useState("");
  const [error, setError] = React.useState("");
  const navigate = useNavigate();

  const submitData = (e: any) => {
    e.preventDefault();
    const phone = window.sessionStorage.getItem("phone");

    const fetchData = async () => {
      const requestType = window.sessionStorage.getItem("auth_response_type");

      try {
        const response = await fetch(
          `${
            import.meta.env.VITE_REACT_AUTH_URL
          }/auth/user/phone/${requestType}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              confirmation_code: otp,
              phone: phone,
            }),
          }
        );

        if (response.ok) {
          window.sessionStorage.clear();
        } else if (response.status === 500) {
          setError("Siz kiritgan kod noto'g'ri");
        } else {
          throw new Error("Request failed");
        }

        if (response.ok) {
          const data = await response.json();
          Storage.set("token", data);
          navigate("/");
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
        <p className="text-base leading-[19px] font-light text-primary opacity-70 sm:mb-[30px] mb-[40px]">
          Siz kiritgan telefon raqamiga kod yuborildi. Iltimos kodni kiriting!
        </p>
        <AuthOTP otp={otp} setOtp={setOtp} />
        {error && <p className="text-red-500 mt-6">{error}</p>}
      </div>
      <div className="grid grid-cols-2 sm:mt-0 mt-[350px]">
        <button
          onClick={() => {
            setOtp("");
            navigate(-1);
          }}
          className="bg-primary bg-opacity-20 py-[18px] text-base leading-[19px]"
        >
          Orqaga
        </button>
        <button className="bg-primary text-white py-[18px] text-base leading-[19px]">
          Keyingisi
        </button>
      </div>
    </form>
  );
}
