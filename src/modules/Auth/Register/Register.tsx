import React, { useState } from "react";
import { HiOutlineUser } from "react-icons/hi2";
import { PiEyeClosed, PiEye } from "react-icons/pi";
import { LuImagePlus } from "react-icons/lu";
import { HiOutlineTrash } from "react-icons/hi2";

export default function Registration() {
  // State larni yaratish
  const [formData, setFormData] = useState({
    brand: "",
    phoneNum: "",
    location: "",
    login: "",
    parol: "",
    email: "",
    extraLocation: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [image, setImage] = useState<string | null>(null);
  const [dropdownOpen, setDropdownOpen] = useState(false); // dropdownni ochish uchun
  const [extraEmails, setExtraEmails] = useState([{ id: 1, email: "" }]);
  const [extraLocations, setExtraLocations] = useState([
    { id: 1, location: "" },
  ]);
  const [extraNumber, setExtraNumber] = useState([{ id: 1, number: "" }]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
  const file: File | null = e.target.files ? e.target.files[0] : null;
  if (file) {
    setImage(URL.createObjectURL(file));
  }
};


  const removeImage = () => {
    setImage(null); // Rasmdan voz kechish uchun
  };

  //   // Qo'shimcha input uchun funksiya
  const addExtraEmail = () => {
    if (extraEmails.length < 2) {
      setExtraEmails([
        ...extraEmails,
        { id: extraEmails.length + 1, email: "" },
      ]);
    }
  };

  const removeExtraEmail = (id: number) => {
    setExtraEmails(extraEmails.filter((email) => email.id !== id));
  };

  const handleExtraEmailChange = (id: number, value: string) => {
    const updatedEmails = extraEmails.map((email) =>
      email.id === id ? { ...email, email: value } : email
    );
    setExtraEmails(updatedEmails);
  };

  const addExtraNumber = () => {
    if (extraNumber.length < 2) {
      setExtraNumber([
        ...extraNumber,
        { id: extraNumber.length + 1, number: "" },
      ]);
    }
  };

  const removeExtraNumber = (id: number) => {
    setExtraNumber(extraNumber.filter((number) => number.id !== id));
  };

  const handleExtraNumberChange = (id: number, value: string) => {
    const updatedNumber = extraNumber.map((number) =>
      number.id === id ? { ...number, number: value } : number
    );
    setExtraNumber(updatedNumber);
  };

  //   // Qo'shimcha manzil inputi uchun funksiya
  const addExtraLocation = () => {
    if (extraLocations.length < 2) {
      setExtraLocations([
        ...extraLocations,
        { id: extraLocations.length + 1, location: "" },
      ]);
    }
  };

  const removeExtraLocation = (id: number) => {
    setExtraLocations(extraLocations.filter((loc) => loc.id !== id));
  };

  const handleExtraLocationChange = (id: number, value: string) => {
    const updatedLocations = extraLocations.map((loc) =>
      loc.id === id ? { ...loc, location: value } : loc
    );
    setExtraLocations(updatedLocations);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

return (
    <section className=" mx-auto container px-4 sm:px-8">
      <h1 className="text-[28px] text-gray-900 font-semibold mt-6 mb-16">
        Ro'yxatdan o'tish
      </h1>
      <section className="w-full h-full bg-white rounded p-[40px] mb-20">
        <div className="w-full -mt-24 flex justify-center sm:justify-start sm:ml-6 items-center relative">
          <div className="w-full flex justify-center">
            <div className="relative">
              <div className="rounded-full w-[110px] h-[110px] border-rootBg border-[10px] bg-[#D9D9D9] overflow-hidden">
                {image ? (
                  <img
                    src={image}
                    alt="User Upload"
                    className="object-cover w-full h-full"
                  />
                ) : (
                  <HiOutlineUser className="mt-8 ml-8" size={26} />
                )}
              </div>
              {/* Input file */}
              <input
                type="file"
                id="imageInput"
                accept="image/*"
                onChange={handleImageChange}
                className="absolute bottom-0 right-0 w-[35px] h-[35px] cursor-pointer opacity-0"
              />
              {/* Dropdownni label bilan qo'shish */}
              <div
                className="absolute bottom-[8px] right-[12px] bg-black text-white py-2 px-2 rounded-full cursor-pointer flex items-center"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                <LuImagePlus />
              </div>

              {/* Dropdown menyusi */}
              {dropdownOpen && (
                <div className="absolute top-[105px] right-[20px] bg-white border border-gray-300 rounded-md shadow-lg w-[150px]">
                  <label
                    htmlFor="imageInput"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
                  >
                    Set Image
                  </label>
                  <button
                    type="button"
                    className="fixed px-4 py-2 text-gray-700 bg-white border rounded-md pr-6 hover:bg-gray-100 text-left"
                    onClick={removeImage}
                  >
                    Remove Image
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="mt-6 sm:mt-10">
          <h2 className="font-semibold text-[32px] mb-10">
            Ma'lumotlarni kiriting
          </h2>
        </div>
        <form className=" gap-10" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-x-8 sm:grid-cols-2 mb-8">
            <div>
              <h2 className="font-normal text-2xl mb-6 text-black">
                Brend nomini kiriting
              </h2>
              <input
                className="bg-[#F4F4F4] rounded-sm px-6 py-3 w-full"
                type="text"
                name="brand"
                id="brand"
                placeholder="Brend"
                value={formData.brand}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <h2 className="font-normal text-2xl mb-6 text-black">
                Email manzilini kiriting
              </h2>
              <div className="flex gap-x-3 items-center">
                <input
                  className="bg-[#F4F4F4] rounded-sm px-6 py-3 w-full"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Someone@gmail.com"
                  value={formData.email}
                  onChange={handleInputChange}
                />
                <button
                  onClick={addExtraEmail}
                  className="text-center w-9 h-8 text-xl  bg-[#F4F4F4] text-black border rounded-full"
                >
                  +
                </button>
              </div>
              {extraEmails.map((emailField) => (
                <div
                  key={emailField.id}

className="flex items-center mt-10 space-x-4"
                >
                  <input
                    className="bg-[#F4F4F4] rounded-sm px-6 py-3 w-full"
                    type="email"
                    placeholder="Someone@gmail.com"
                    value={emailField.email}
                    onChange={(e) =>
                      handleExtraEmailChange(emailField.id, e.target.value)
                    }
                  />
                  <button
                    className="border rounded-full p-2 bg-white border-red-400"
                    type="button"
                    onClick={() => removeExtraEmail(emailField.id)}
                  >
                    <HiOutlineTrash size={12} color="red" />
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 gap-x-8 mb-8 sm:grid-cols-2">
            <div>
              <h2 className="font-normal text-2xl mb-6 text-black">
                Telefon raqam*
              </h2>
              <input
                className="bg-[#F4F4F4] rounded-sm px-6 py-3 w-full"
                type="number"
                name="phoneNum"
                id="phoneNum1"
                placeholder="+998 99 999 99 99"
                value={formData.phoneNum}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <h2 className="font-normal text-2xl mb-6 text-black">
                Telefon raqam*
              </h2>
              <div className="flex items-center gap-x-3">
                <input
                  className="bg-[#F4F4F4] rounded-sm px-6 py-3 w-full"
                  type="number"
                  name="phoneNum"
                  id="phoneNum"
                  placeholder="+998 99 999 99 99"
                  value={formData.phoneNum}
                  onChange={handleInputChange}
                />
                <button
                  onClick={addExtraNumber}
                  className="text-center w-9 h-8 text-xl  bg-[#F4F4F4] text-black border rounded-full"
                >
                  +
                </button>
              </div>
              {extraNumber.map((number) => (
                <div
                  key={number.id}
                  className="flex items-center mt-10 space-x-4"
                >
                  <input
                    className="bg-[#F4F4F4] rounded-sm px-6 py-3 w-full"
                    type="email"
                    placeholder="+998 99 999 99 99"
                    value={number.number}
                    onChange={(e) =>
                      handleExtraNumberChange(number.id, e.target.value)
                    }
                  />
                  <button
                    className="border rounded-full p-2 bg-white border-red-400"
                    type="button"
                    onClick={() => removeExtraNumber(number.id)}
                  >
                    <HiOutlineTrash size={12} color="red" />
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 gap-x-8 mb-8 sm:grid-cols-2">
            <div>
              <h2 className="font-normal text-2xl mb-6 text-black">
                Manzilni tanlang
              </h2>
              <input
                className="bg-[#F4F4F4] rounded-sm px-6 py-3 w-full"
                type="text"
                name="location"
                id="location"
                placeholder="Shahar yoki Pochta indeksi"
                value={formData.location}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <h2 className="font-normal text-2xl mb-6 text-black">
                Qo’shimcha manzilni kiriting
              </h2>
              <div className="flex gap-x-3 items-center">
                <input
                  className="bg-[#F4F4F4] rounded-sm px-6 py-3 w-full"
                  type="text"

name="extraLocation"
                  id="extraLocation"
                  placeholder="Namangan"
                  value={formData.extraLocation}
                  onChange={handleInputChange}
                />
                <button
                  onClick={addExtraLocation}
                  className="text-center w-9 h-8 text-xl  bg-[#F4F4F4] text-black border rounded-full"
                >
                  +
                </button>
              </div>
              {extraLocations.map((loc) => (
                <div key={loc.id} className="flex items-center mt-10 space-x-4">
                  <input
                    className="bg-[#F4F4F4] rounded-sm px-6 py-3 w-full"
                    type="email"
                    placeholder="Qo'shimcha email"
                    value={loc.location}
                    onChange={(e) =>
                      handleExtraLocationChange(loc.id, e.target.value)
                    }
                  />
                  <button
                    className="border rounded-full p-2 bg-white border-red-400"
                    type="button"
                    onClick={() => removeExtraLocation(loc.id)}
                  >
                    <HiOutlineTrash size={12} color="red" />
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 gap-x-8 sm:grid-cols-2">
            <div>
              <h2 className="font-normal text-2xl mb-6  text-black">Log in</h2>
              <input
                className="bg-[#F4F4F4] px-6 rounded-sm py-3 w-full"
                type="password"
                name="login"
                id="login1"
                placeholder="Nasibjon0770"
                value={formData.login}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <h2 className="font-normal text-2xl mb-6  text-black">
                Password
              </h2>
              <input
                className="bg-[#F4F4F4] mb-[56px] px-6 placeholder:text-xl rounded-sm py-3 w-full"
                type="password"
                name="login"
                id="login"
                placeholder="********"
                value={formData.login}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-x-8 mb-8 sm:grid-cols-2">
            <div>
              <h2 className="font-normal text-2xl  text-black">
                Parolni tasdiqlash
              </h2>
              <div className="flex mt-6">
                <input
                  className="bg-[#F4F4F4] rounded-sm px-6 py-3 w-full"
                  type={showPassword ? "text" : "password"} // showPassword qiymatiga qarab turi o'zgaradi
                  name="parol"
                  id="parol"
                  value={formData.parol}
                  onChange={handleInputChange}
                />
                <button
                  type="button"
                  className="-ml-10"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <PiEye size={22} />
                  ) : (
                    <PiEyeClosed size={22} />
                  )}
                </button>
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-[#2C3033] text-white text-xl rounded py-2.5 mt-8"
            >
              Ro’yxatdan o’tish
            </button>
          </div>
        </form>
      </section>
    </section>
  );
}