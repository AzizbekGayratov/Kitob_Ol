import { LogOutBtn } from "assets/images/svg";

export default function MobileFormTopBtn() {
  return (
    <button
      onClick={() => {
        // bu yerda log out funksiya yozish kerak
        alert("Log out");
      }}
      className="sm:hidden p-2 rounded-full bg-[rgba(44,48,51,0.1)]"
    >
      <img src={LogOutBtn} alt="logout button" width={12} height={12} />
    </button>
  );
}
