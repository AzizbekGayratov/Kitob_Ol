import React from "react";
import TextArea from "./components/TextArea";
import { ComponentPropsType } from "modules/Announcements/types/Types";
import { useSelector } from "react-redux";

export default function Description({
  formData,
  setFormData,
}: ComponentPropsType) {
  const { description = "" } = formData;

  const { language } = useSelector(
    (state: { language: { language: "uz" | "ru" | "en" } }) => state.language
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="container bg-white p-7">
      <h2 className="font-semibold text-[32px] text-primary">
        {language === "uz"
          ? "Tavsif"
          : language === "ru"
          ? "Описание"
          : "Description"}
      </h2>

      <div className="flex flex-col gap-7 sm:gap-16 md:max-w-[82%] mt-7">
        <div>
          <TextArea
            name="description"
            rows={15}
            maxLength={9000}
            placeholder={
              language === "uz"
                ? "O'zingizni shu e'lonni ko'rayotgan odam sifatida tavsif yozing!"
                : language === "ru"
                ? "Опишите, как вы оцените эту книгу!"
                : "Describe how you would rate this book!"
            }
            value={description}
            onChange={handleInputChange}
          />
          <label
            htmlFor="description"
            className="flex justify-between font-Inter font-normal text-base mt-2"
          >
            <p className={description.length < 25 ? "text-red-500" : ""}>
              {description.length < 25
                ? language === "uz"
                  ? `Yana kamida ${25 - description.length} ta belgi yozing`
                  : language === "ru"
                  ? `Добавьте еще ${25 - description.length} символов`
                  : `Add ${25 - description.length} more characters`
                : language === "uz"
                ? "Tayyor"
                : language === "ru"
                ? "Готово"
                : "Ready"}
            </p>
            <p>{description.length}/9000</p>
          </label>
        </div>
      </div>
    </div>
  );
}
