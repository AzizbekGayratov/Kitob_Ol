import React, { useState } from "react";
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
    price: "",
    published_year: "",
    shitrix_code: "",
    publisher_id: "",
    stock: 0,
    title: "",
    total_pages: "",
    translator_id: "",
    writing_type: "",
  };

  const [formData, setFormData] = useState(initialForm);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(""); // Clear previous messages
    setSuccessMessage("");

    try {
      // const response = await api.post("/books/create", formData);
      // console.log(api.head);

      const response = await fetch(
        `${import.meta.env.VITE_REACT_API_URL}/books/create`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImF4YWRqb25vdnNhcmRvcmJla2tAZ21haWwuY29tIiwiZXhwIjoxNzI4MjUwNTk2LCJpYXQiOjE3MjgyMzk3OTYsImlkIjoiNDY5ZDAwODMtZTJjMC00OWI0LWEyYTUtNDY0ZWFjYTdkOWMxIiwibG9naW4iOiJzYXJkb3JiZWsiLCJ0eXBlIjoicHVibGlzaGVyIn0.uwDcdwjK0_6O7D6ZRCuNRVbWg6Lug03eWseHWsg5siw`}`,
          },
          body: JSON.stringify(formData),
        }
      );
      // console.log("Submission successful:", response.data);
      if (response.ok) {
        setSuccessMessage("Announcement submitted successfully!");
        resetForm(); // Reset the form after successful submission
      }
    } catch (error) {
      console.error("Submission failed:", error);
      setErrorMessage("Submission failed. Please try again.");
    }
  };

  const resetForm = () => {
    setFormData(initialForm);
    console.log("Form has been reset");
  };

  return (
    <section className="sm:p-2 flex flex-col gap-10">
      {errorMessage && <div className="text-red-500">{errorMessage}</div>}
      {successMessage && <div className="text-green-500">{successMessage}</div>}
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
