import { setIsProfileUpdating } from "Store/profileSlice/profileSlice";
import { useDispatch, useSelector } from "react-redux";

export default function UpdateProfileBtn() {
  const dispatch = useDispatch();
  const { language } = useSelector(
    (state: { language: { language: "uz" | "ru" | "en" } }) => state.language
  );

  return (
    <button
      onClick={() => dispatch(setIsProfileUpdating(true))}
      className="mt-10 w-full border border-[#2c3033] rounded text-[16px] hover:bg-[#2c30331a] transition-all px-5 cursor-pointer text-[#2C3033] leading-5 py-[18px]"
    >
      {language === "uz"
        ? "Tahrirlash"
        : language === "ru"
        ? "Редактировать"
        : "Edit"}
    </button>
  );
}
