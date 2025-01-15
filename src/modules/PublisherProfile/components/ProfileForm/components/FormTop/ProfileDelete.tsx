import { useNavigate } from "react-router-dom";
import { Storage } from "../../../../../../Services";
import { MdDeleteOutline } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { PublisherProfileProps } from "modules/PublisherProfile/PublisherProfile";
import api from "Services/Api";
import { updatePublisherProfile } from "Store/profileSlice/profileSlice";
export default function ProfileDelete() {
  const navigate = useNavigate();
  const token = JSON.parse(Storage.get("publisher_token") as unknown as string);
  const { language } = useSelector(
    (state: { language: { language: "uz" | "ru" | "en" } }) => state.language
  );

  const dispatch = useDispatch();

  const { id } = useSelector(
    (state: { project: { publisherProfile: PublisherProfileProps } }) =>
      state.project.publisherProfile
  );

  const handleDeleteProfile = () => {
    const submitDelete = async () => {
      try {
        const response = await api.delete(`/publishers/delete`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token.access_token}`,
          },
          params: {
            id,
          },
        });

        if (response.status === 200) {
          Storage.clear();
          dispatch(updatePublisherProfile({}));
          navigate("/login");
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
