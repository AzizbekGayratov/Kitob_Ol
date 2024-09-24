import React from "react";
import TextArea from "./components/TextArea";
import { ComponentPropsType } from "modules/Announcements/types/Types";

export default function Description({
  formData,
  setFormData,
}: ComponentPropsType) {
  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="container bg-white p-7">
      <h2 className="font-semibold text-[32px] text-primary">Tavsif</h2>

      <div className="flex flex-col gap-7 sm:gap-16 md:max-w-[82%] mt-7 space-y-10 ">
        <div>
          <TextArea
            name="description"
            rows={15}
            maxLength={9000}
            placeholder="O'zingizni shu e'lonni ko'rayotgan odam sifatida tavsif yozing!"
            value={formData.description}
            onChange={handleInputChange}
          />

          <label
            htmlFor="description"
            className="flex justify-between font-Inter font-normal text-base mt-2"
          >
            <p>Yana kamida 80 ta belgi yozing</p>

            <p>{formData.description.length}/9000</p>
          </label>
        </div>

        <div>
          <TextArea
            name="usefulInformations"
            rows={15}
            maxLength={800}
            placeholder="Boshqa foydali malumotlar"
            value={formData.useSecondaryInformations}
            onChange={handleInputChange}
          />

          <label
            htmlFor="usefulInformations"
            className="flex justify-between font-Inter font-normal text-base mt-2"
          >
            <p>Yana kamida 80 ta belgi yozing</p>

            <p>{formData.useSecondaryInformations.length}/800</p>
          </label>
        </div>
      </div>
    </div>
  );
}
