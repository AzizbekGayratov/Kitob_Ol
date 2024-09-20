import { LogOutBtn } from "assets/images/svg";
import Storage from "../../../../../../Services/Storage/Storage";
import { useNavigate } from "react-router-dom";

export default function LogOutButton() {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => {
        Storage.clear();
        navigate("/authorization/phone");
      }}
      className="hidden sm:flex items-center gap-4 py-3 px-6 rounded text-textColor text-[16px] leading-[19px] bg-[rgba(44,48,51,0.1)]"
    >
      Log out <img src={LogOutBtn} alt="svg" />
    </button>
  );
}
