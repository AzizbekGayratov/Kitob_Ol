import api from "Services/Api";
import SelectInput from "modules/Announcements/components/selectInput/SelectInput";
import React from "react";
import { useSelector } from "react-redux";
import { BookTranslatorsType } from "modules/Announcements/types/Types";

export default function TranslatorCreate({
  handleInputChange,
  translators,
  value,
  handleAdditionOfCreatedProp,
  list,
  setList,
}: {
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  translators: { id: string; name: string; surname: string }[];
  value: string;
  handleAdditionOfCreatedProp: (name: string, id: string) => void;
  list: BookTranslatorsType[];
  setList: React.Dispatch<React.SetStateAction<BookTranslatorsType[]>>;
}) {
  const [addOwnAuthor, setAddOwnAuthor] = React.useState<boolean>(true);

  const [firstName, setFirstName] = React.useState<string>("");
  const [lastName, setLastName] = React.useState<string>("");

  // There could occur a problem here === This is extra option of getting token
  // const user_token = safeParse(localStorage.getItem("token"));
  // const publisher_token = safeParse(localStorage.getItem("publisher_token"));
  // const token = publisher_token ? publisher_token : user_token;
  const token =
    JSON.parse(localStorage.getItem("token") as unknown as string) ||
    JSON.parse(localStorage.getItem("publisher_token") as unknown as string);

  const { language } = useSelector(
    (state: { language: { language: "uz" | "ru" | "en" } }) => state.language
  );

  const updateTranslators = async (id: string) => {
    const newAuthor = {
      name: firstName,
      surname: lastName,
      id: id,
    };

    setList([...list, newAuthor]);
    sessionStorage.setItem("translators", JSON.stringify([...list, newAuthor]));
  };

  const handleCreateAuthor = async () => {
    if (firstName && lastName) {
      try {
        const respnose = await api.post(
          "/translators/create",
          {
            name: firstName,
            surname: lastName,
          },
          {
            headers: {
              Authorization: `Bearer ${token.access_token}`,
            },
          }
        );
        

        if (respnose.status === 200 || respnose.status === 201) {
          handleAdditionOfCreatedProp(
            "translator_id",
            respnose.data["Translator ID : "]
          );



          updateTranslators(respnose.data["Translator ID : "]);
          setAddOwnAuthor(!addOwnAuthor);
          setFirstName("");
          setLastName("");
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
      {addOwnAuthor ? (
        <>
          <SelectInput
            name="translator_id"
            id="translator_id"
            onChange={handleInputChange}
            value={value}
            defaultValue={
              language === "uz"
                ? "Tarjimon"
                : language === "ru"
                ? "Переводчик"
                : "Translator"
            }
            options={translators}
          />
          <button
            className="bg-primary rounded text-base leading-[19px] text-white py-4 px-3 sm:px-5"
            onClick={() => setAddOwnAuthor(!addOwnAuthor)}
          >
            Add
          </button>
        </>
      ) : (
        <>
          <input
            name="translator"
            value={firstName}
            className="form_input"
            placeholder={
              language === "uz"
                ? "Ism"
                : language === "ru"
                ? "Имя"
                : "First name"
            }
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            name="translator"
            value={lastName}
            className="form_input"
            placeholder={
              language === "uz"
                ? "Familiya"
                : language === "ru"
                ? "Фамилия"
                : "Last name"
            }
            onChange={(e) => setLastName(e.target.value)}
          />

          <button
            className="bg-primary rounded text-base leading-[19px] text-white py-4 px-3 sm:px-5 w-full sm:w-auto"
            onClick={() => handleCreateAuthor()}
          >
            Create
          </button>
        </>
      )}
    </div>
  );
}
