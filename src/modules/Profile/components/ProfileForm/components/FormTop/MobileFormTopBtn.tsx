import { LogOutBtn } from "assets/images/svg";
import LogOut from "./LogOut";

export default function MobileFormTopBtn() {
  return (
    <button
      onClick={() => {
        LogOut();
      }}
      className="sm:hidden p-2 rounded-full bg-[rgba(44,48,51,0.1)]"
    >
      <img src={LogOutBtn} alt="logout button" width={12} height={12} />
    </button>
  );
}
