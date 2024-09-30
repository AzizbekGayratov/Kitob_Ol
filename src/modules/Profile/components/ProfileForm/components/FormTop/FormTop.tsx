import LogOutButton from "./LogOutButton";
import MobileFormTopBtn from "./MobileFormTopBtn";
import ProfileDelete from "./profileDelete/ProfileDelete";

export default function FormTop() {
  return (
    <div className="md:px-20 md:py-8 px-4 py-5 flex items-center justify-between border-b border-b-[#2c303333]">
      <h2 className="text-[28px] font-semibold leading-[34px]">
        Mening profilim
      </h2>
      <div className="flex gap-2 items-center">
        <>
          <LogOutButton />
          <MobileFormTopBtn />
        </>
        <ProfileDelete />
      </div>
    </div>
  );
}
