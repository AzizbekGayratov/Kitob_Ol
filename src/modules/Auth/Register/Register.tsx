import React, { useState } from "react";
import { ImageUpload } from "./components";
import MainContent from "./components/MainContent/MainContent";

export default function Registration() {
  // State larni yaratish
  const [formData, setFormData] = useState({
    city_id: "",
    district_id: "",
    email: "",
    image_url: "",
    login: "",
    name: "",
    p_type: "",
    password: "",
    phone_number: "+998",
  });
  const [reset, setReset] = useState("");

  const resetForm = () => {
    setReset("");
    setFormData({
      city_id: "",
      district_id: "",
      email: "",
      image_url: "",
      login: "",
      name: "",
      p_type: "",
      password: "",
      phone_number: "+998",
    });
    setReset("resetted");
    console.log("Form has been resetted");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `${import.meta.env.VITE_REACT_AUTH_URL}/auth/publisher/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      console.log(response);
    } catch (error) {
      console.error("Submission failed:", error);
    }
  };

  return (
    <section className=" mx-auto container px-4 sm:px-8">
      <h1 className="text-[28px] text-black font-semibold mt-6 mb-16">
        Ro'yxatdan o'tish
      </h1>
      <form onSubmit={handleSubmit} className="bg-white rounded p-10 pb-[60px]">
        <div className="mb-10">
          <div className="w-full -mt-24 flex flex-col justify-center sm:justify-start sm:ml-6 items-center relative">
            <div className="w-full flex justify-center">
              <ImageUpload formData={formData} setFormData={setFormData} />
            </div>
          </div>
          <div>
            <h2 className="-mt-10 text-primary text-[32px] font-semibold leading-[39px]">
              Malumotlarni kiriting
            </h2>
            <MainContent data={formData} setData={setFormData} reset={reset} />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
              <button
                onClick={() => resetForm()}
                className="bg-white rounded text-base leading-[19px] border text-primary border-primary py-4 px-5 sm:px-7"
              >
                Bekor qilish
              </button>
              <button
                type="submit"
                className="bg-primary rounded text-base leading-[19px] text-white py-4 px-3 sm:px-5"
              >
                Ro'yxatdan o'tish
              </button>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
}
