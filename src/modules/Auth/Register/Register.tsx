import { useState } from "react";
import { ImageUpload } from "./components";

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
    phone_number: "",
  });

  return (
    <section className=" mx-auto container px-4 sm:px-8">
      <h1 className="text-[28px] text-gray-900 font-semibold mt-6 mb-16">
        Ro'yxatdan o'tish
      </h1>
      <section className="w-full h-full bg-white rounded p-[40px] mb-20">
        <div className="w-full -mt-24 flex justify-center sm:justify-start sm:ml-6 items-center relative">
          <div className="w-full flex justify-center">
            <ImageUpload  formData={formData} setFormData={setFormData} />
          </div>
        </div>
      </section>
    </section>
  );
}
