import { useState } from "react";
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
    phone_number: "",
  });
  const [reset, setReset] = useState("");
  console.log(setReset);
  

  return (
    <section className=" mx-auto container px-4 sm:px-8">
      <h1 className="text-[28px] text-black font-semibold mt-6 mb-16">
        Ro'yxatdan o'tish
      </h1>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="bg-white rounded p-10 pb-[60px]"
      >
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
          </div>
        </div>
      </form>
    </section>
  );
}
