import { useNavigate } from "react-router-dom";
import { Storage } from "../../../../../../../Services";
import { MdDeleteOutline } from "react-icons/md";
import { useSelector } from "react-redux";
export default function ProfileDelete() {
  const navigate = useNavigate();
  const token = JSON.parse(Storage.get("token") as unknown as string);
  const { language } = useSelector(
    (state: { language: { language: "uz" | "ru" | "en" } }) => state.language
  );

  const handleDeleteProfile = () => {
    console.log(token);

    const submitDelete = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_REACT_AUTH_URL}/auth/user/profile/delete`,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token.access_token}`,
            },
          }
        );

        if (response.ok) {
          Storage.clear();
          navigate("/authorization/phone");
        }
      } catch (error) {
        console.error(error);
      }
    };

    submitDelete();
  };

  return (
    <button
      onClick={handleDeleteProfile}
      className="flex items-center gap-4 sm:py-3 sm:px-6 p-2 rounded-full sm:rounded text-white text-[16px] leading-[19px] bg-primary"
    >
      <span className="hidden sm:block">
        {language === "uz"
          ? "O'chirish"
          : language === "ru"
          ? "Удалить"
          : "Delete"}
      </span>
      <MdDeleteOutline className="sm:w-6 sm:h-6 w-3 h-3" />
    </button>
  );
}
