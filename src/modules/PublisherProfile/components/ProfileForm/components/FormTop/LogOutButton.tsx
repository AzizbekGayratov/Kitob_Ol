import { LogOutBtn } from "assets/images/svg";
import Storage from "../../../../../../Services/Storage/Storage";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function LogOutButton() {
  const navigate = useNavigate();
  const { language } = useSelector(
    (state: { language: { language: "uz" | "ru" | "en" } }) => state.language
  );

  return (
    <button
      onClick={() => {
        Storage.clear();
        window.sessionStorage.clear();
        navigate("/login");
      }}
      className="hidden sm:flex items-center gap-4 py-3 px-6 rounded text-textColor text-[16px] leading-[19px] bg-[rgba(44,48,51,0.1)]"
    >
      {language === "uz" ? "Chiqish" : language === "ru" ? "Выйти" : "Log out"}{" "}
      <img src={LogOutBtn} alt="svg" />
    </button>
  );
}
