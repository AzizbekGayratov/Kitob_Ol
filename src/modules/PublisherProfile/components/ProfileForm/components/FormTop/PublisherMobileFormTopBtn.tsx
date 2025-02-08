import { LogOutBtn } from "assets/images/svg";
import Storage from "../../../../../../Services/Storage/Storage";
import { useNavigate } from "react-router-dom";

export default function PublisherMobileFormTopBtn() {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => {
        Storage.remove("publisher_token");
        navigate("/login");
      }}
      className="sm:hidden p-2 rounded-full bg-[rgba(44,48,51,0.1)]"
    >
      <img src={LogOutBtn} alt="logout button" width={12} height={12} />
    </button>
  );
}
