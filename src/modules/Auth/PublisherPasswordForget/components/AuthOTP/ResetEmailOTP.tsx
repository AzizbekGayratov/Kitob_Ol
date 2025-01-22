import React from "react";
import { useNavigate } from "react-router-dom";
import AuthOTP from "./AuthOTP";
// import { Storage } from "../../../../../Services";
import { useSelector } from "react-redux";

export default function ResetEmailOTP() {
  const [otp, setOtp] = React.useState("");
  const [error, setError] = React.useState("");
  const [timer, setTimer] = React.useState(60); // Timer state
  const [isResending, setIsResending] = React.useState(false);
  const navigate = useNavigate();
  const { language } = useSelector(
    (state: { language: { language: "uz" | "ru" | "en" } }) => state.language
  );

  const isResendProp =
    language === "uz"
      ? "Yuborilmoqda..."
      : language === "ru"
      ? "Отправляется..."
      : "Sending...";
  const nextProp =
    language === "uz" ? "Keyingisi" : language === "ru" ? "Далее" : "Next";

  React.useEffect(() => {
    if (timer > 0) {
      const countdown = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);

      return () => clearInterval(countdown); // Cleanup interval
    }
  }, [timer]);

  const resendOTP = async () => {
    const email = window.sessionStorage.getItem("email");
    setIsResending(true);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_REACT_AUTH_URL}/auth/sms/password/forgot/email`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

      if (response.ok) {
        setTimer(60); // Reset timer to 60 seconds
      } else {
        setError("Kodni qayta yuborishda xatolik yuz berdi.");
      }
    } catch (error) {
      console.error("Resend OTP error:", error);
      setError("Serverda xatolik yuz berdi.");
    } finally {
      setIsResending(false);
    }
  };

  const submitData = (e: any) => {
    e.preventDefault();
    const email = window.sessionStorage.getItem("email");

    const fetchData = async () => {
      try {
        const response = await fetch(
          `${
            import.meta.env.VITE_REACT_AUTH_URL
          }/auth/publisher/password/reset/email`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              confirmationCode: otp,
              newPassword: "1234",
              email: email,
            }),
          }
        );

        if (response.ok) {
          const data = await response.json();
          console.log(data);
          
          // Storage.set("token", data);

          // if (requestType === "register") {
          //   navigate("/authorization/user/register", {
          //     replace: true,
          //   });
          // } else if (requestType === "login") {
          //   navigate("/");
          // }
        } else if (response.status === 500) {
          setError("Siz kiritgan kod noto'g'ri yoki serverda xatolik yuz berdi.");
        } else {
          throw new Error("Request failed");
        }
      } catch (error) {
        console.error(error);
        setError("Serverda xatolik yuz berdi.");
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
          {language === "uz"
            ? "Siz kiritgan email manzilingizga kod yuborildi. Iltimos kodni kiriting!"
            : language === "ru"
            ? "Код был отправлен на указанный вами адрес электронной почты. Пожалуйста, введите код!"
            : "A code has been sent to the email address you entered. Please enter the code!"}
        </p>
        <AuthOTP otp={otp} setOtp={setOtp} />
        {error && <p className="text-red-500 mt-6">{error}</p>}
        <p className="mt-5 text-base leading-[19px] font-light text-primary opacity-70">
          {timer === 0 ? (
            <span
              className="text-blue-500 cursor-pointer"
              onClick={resendOTP}
              role="button"
            >
              {language === "uz"
                ? "Kodni qayta yuborish"
                : language === "ru"
                ? "Отправить код повторно"
                : "Resend code"}
            </span>
          ) : language === "uz" ? (
            `Kodni ${timer} sekunddan so'ng qayta yuborish`
          ) : language === "ru" ? (
            `Отправить код повторно через ${timer} секунд`
          ) : (
            `Resend code in ${timer} seconds`
          )}
        </p>
      </div>
      <div className="grid grid-cols-2 sm:mt-0 mt-[350px]">
        <button
          type="button"
          onClick={() => {
            setOtp("");
            navigate(-1);
          }}
          className="bg-primary bg-opacity-20 py-[18px] text-base leading-[19px]"
        >
          {language === "uz" ? "Orqaga" : language === "ru" ? "Назад" : "Back"}
        </button>
        <button
          type="submit"
          className="bg-primary text-white py-[18px] text-base leading-[19px]"
          disabled={isResending}
        >
          {isResending ? isResendProp : nextProp}
        </button>
      </div>
    </form>
  );
}
