import React from "react";

export default function EmailLogin() {
  const [email, setEmail] = React.useState("");

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div className="sm:p-10 sm:pb-[100px] p-4">
        <p className="text-base leading-[19px] font-light text-primary opacity-70 mb-[10px] sm:px-5">
          Email manzilingizni kiriting*
        </p>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form_input"
          placeholder="Someone007@gmail.com"
          required
        />
        <p className="text-base leading-[19px] font-light text-primary opacity-70 max-w-[280px] mt-4 sm:px-5">
          Avtorizatsiya qilish uchun iltimos email manzilingizni kiriting!
        </p>
      </div>
      <div className="grid grid-cols-2 sm:mt-0 mt-[350px]">
        <button className="bg-primary bg-opacity-20 py-[18px] text-base leading-[19px]">
          Bekor qilish
        </button>
        <button className="bg-primary text-white py-[18px] text-base leading-[19px]">
          Keyingisi
        </button>
      </div>
    </form>
  );
}
