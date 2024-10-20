import React, { useState, useEffect } from "react";
import AboutAnnouncement from "./components/aboutAnnouncement/AboutAnnouncement";
import Connect from "./components/connect/Connect";
import Description from "./components/description/Description";
import Images from "./components/images/Images";
import Location from "./components/location/Location";
import SubmitForm from "./components/submitForm/SubmitForm";
import { FormDataType } from "../types/Types";
import api from "Services/Api";

function AnnouncementBook() {
  const initialForm: FormDataType = {
    author_id: "",
    category_id: "",
    cover_format: "",
    cover_type: "",
    description: "",
    image_url: "",
    img_url: "",
    is_new: "",
    language_id: "",
    location: {
      city_id: "",
      district_id: "",
    },
    price: 0,
    published_year: "",
    shitrix_code: "",
    publisher_id: "",
    stock: 0,
    title: "",
    total_pages: 0,
    translator_id: "",
    writing_type: "",
  };

  const [formData, setFormData] = useState(initialForm);

  const token = JSON.parse(localStorage.getItem("token") as string);
  const userToken = token?.access_token || "";
  // console.log(userToken);

  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    const getAuthorId = async () => {
      try {
        const response = await api.get("/authors/list");

        setFormData((prevFormData) => ({
          ...prevFormData,
          author_id: response.data.id,
          publisher_id: userToken,
        }));
        // console.log(response.data);
      } catch (error) {
        console.error("Failed to fetch author ID:", error);
      }
    };

    getAuthorId();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await api.post("/books/create", formData);
      console.log("Submission successful:", response.data);
      setSuccessMessage("Announcement submitted successfully!");
      console.log(successMessage);

      resetForm(); // Reset the form after successful submission
    } catch (error) {
      console.error("Submission failed:", error);
    }
  };

  const resetForm = () => {
    setFormData(initialForm);
    console.log("Form has been reset");
  };

  return (
    <section className="sm:p-2 flex flex-col gap-10">
      <form className="p-2 flex flex-col gap-10" onSubmit={handleSubmit}>
        <AboutAnnouncement formData={formData} setFormData={setFormData} />
        <Images formData={formData} setFormData={setFormData} />
        <Description formData={formData} setFormData={setFormData} />
        <Location formData={formData} setFormData={setFormData} />
        <Connect formData={formData} setFormData={setFormData} />
        <SubmitForm />
      </form>
    </section>
  );
}

export default AnnouncementBook;
