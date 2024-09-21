import { ComponentPropsType } from "modules/Announcement/types/Types";
import ImageCard from "./components/imageContainer/ImageCard";

export default function Images({ formData, setFormData }: ComponentPropsType) {
  return (
    <div className="container bg-white p-7">
      <div>
        <h2 className={`font-semibold text-[32px] text-primary`}>Rasmlar</h2>

        <p
          className={`font-Inter font-normal text-xl text-primary sm:w-[50%] `}
        >
          Birinchi surat e'loningiz asosiy rasmi bo'ladi. Suratlar tartibini
          ularning ustiga bosib va olib o'tish bilan o'zgartirishingiz mumkin.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-16 mt-7 md:max-w-[82%]">
        {Array(6)
          .fill(null)
          .map((_, index) => (
            <ImageCard
              key={index}
              imageIndex={index}
              formData={formData}
              setFormData={setFormData}
            />
          ))}
      </div>
    </div>
  );
}
