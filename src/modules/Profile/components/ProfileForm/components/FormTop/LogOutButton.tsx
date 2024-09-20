import { Storage } from "Services";
import { LogOutBtn } from "assets/images/svg";

export default function LogOutButton() {
  return (
    <button
      onClick={() => {
        Storage.clear();
        window.location.reload();
      }}
      className="hidden sm:flex items-center gap-4 py-3 px-6 rounded text-textColor text-[16px] leading-[19px] bg-[rgba(44,48,51,0.1)]"
    >
      Log out <img src={LogOutBtn} alt="svg" />
    </button>
  );
}
