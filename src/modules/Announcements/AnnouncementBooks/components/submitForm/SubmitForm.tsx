import { useSelector } from "react-redux";

interface SubmitFormPropsType {
  modalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function SubmitForm({
  modalOpen,
  setModalOpen,
}: SubmitFormPropsType) {
  const { language } = useSelector(
    (state: { language: { language: "uz" | "ru" | "en" } }) => state.language
  );

  return (
    <div className="container bg-white p-7 flex flex-col sm:flex-row sm:justify-end gap-4 -mt-5 ">
      <button
        type="button"
        className="bg-white rounded text-base leading-[19px] border text-primary border-primary py-4 px-5 sm:px-7"
        onClick={() => {
          setModalOpen(!modalOpen);
        }}
      >
        {language === "uz"
          ? "Tekshirib ko'rish"
          : language === "ru"
          ? "Проверить"
          : "Check"}
      </button>

      <button
        type="submit"
        className="bg-primary rounded text-base leading-[19px] text-white py-4 px-3 sm:px-5"
      >
        {language === "uz"
          ? "E'lonni joylashtirish"
          : language === "ru"
          ? "Опубликовать"
          : "Publish"}
      </button>
    </div>
  );
}
