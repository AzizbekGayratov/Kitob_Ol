import { LogOutBtn } from "assets/images/svg";
import LogOut from "./LogOut";

export default function LogOutButton() {
  return (
    <button
      onClick={() => {
        LogOut();
      }}
      className="hidden sm:flex items-center gap-4 py-3 px-6 rounded text-textColor text-[16px] leading-[19px] bg-[rgba(44,48,51,0.1)]"
    >
      Log out <img src={LogOutBtn} alt="svg" />
    </button>
  );
}
