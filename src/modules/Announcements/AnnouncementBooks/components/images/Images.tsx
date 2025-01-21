import { ComponentPropsType } from "modules/Announcements/types/Types";
import ImageCard from "./components/imageContainer/ImageCard";
import { useSelector } from "react-redux";

export default function Images({
  formData,
  setFormData,
  reset,
}: ComponentPropsType) {
  const { language } = useSelector(
    (state: { language: { language: "uz" | "ru" | "en" } }) => state.language
  );
  return (
    <div className="container bg-white p-7">
      <div>
        <h2 className={`font-semibold text-[32px] text-primary`}>
          {language === "uz"
            ? "Rasmlar"
            : language === "ru"
            ? "Изображения"
            : "Images"}
        </h2>

        <p
          className={`font-Inter font-normal text-xl text-primary sm:w-[50%] `}
        >
          {language === "uz"
            ? "Birinchi surat e'loningiz asosiy rasmi bo'ladi. Suratlar tartibini ularning ustiga bosib va olib o'tish bilan o'zgartirishingiz mumkin."
            : language === "ru"
            ? "Первая фотография будет основным изображением вашего объявления. Вы можете изменить порядок фотографий, нажав и перетащив их."
            : "The first image will be your main image for your ad. You can change the order of the images by clicking and dragging them."}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-16 mt-7 md:max-w-[82%]">
        {Array(2)
          .fill(null)
          .map((_, index) => (
            <ImageCard
              key={index}
              imageIndex={index}
              formData={formData}
              setFormData={setFormData}
              reset={reset}
            />
          ))}
      </div>
    </div>
  );
}
