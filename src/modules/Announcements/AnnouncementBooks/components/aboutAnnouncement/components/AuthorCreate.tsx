import api from "Services/Api";
import React, { useState } from "react";

export default function AuthorCreate({
  handleInputChange,
}: {
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
}) {
  console.log(handleInputChange);
  
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [biography, setBiography] = useState("");

  const [loading, setLoading] = useState(false);

  const rawToken = window.localStorage.getItem("token");
  const access_token = rawToken ? JSON.parse(rawToken).access_token : "";

  const AddAuthor = async () => {
    setLoading(true);
    try {
      const response = await api.post(
        "/authors/create",
        {
          name,
          surname,
          biography,
        },
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        }
      );

      if (response.status === 201 || response.status === 200) {
        // handleInputChange();
        alert("Author added!")
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex gap-2">
      <div className="flex flex-col gap-2 w-full">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          className="form_input"
          placeholder="Name"
        />
        <input
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
          type="text"
          className="form_input"
          placeholder="Surname"
        />
        <input
          value={biography}
          onChange={(e) => setBiography(e.target.value)}
          type="text"
          className="form_input"
          placeholder="Biograpgy"
        />
      </div>
      <button
        onClick={() => AddAuthor()}
        className="bg-primary rounded text-base leading-[19px] text-white py-4 px-3"
      >
        {loading ? <div className="spinner"></div> : "Add"}
      </button>
    </div>
  );
}
