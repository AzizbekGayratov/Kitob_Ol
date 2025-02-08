import { LogOutBtn } from "assets/images/svg";
import { useNavigate } from "react-router-dom";

export default function MobileFormTopBtn() {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => {
        window.localStorage.removeItem("token");
        navigate("/authorization/phone");
      }}
      className="sm:hidden p-2 rounded-full bg-[rgba(44,48,51,0.1)]"
    >
      <img src={LogOutBtn} alt="logout button" width={12} height={12} />
    </button>
  );
}
