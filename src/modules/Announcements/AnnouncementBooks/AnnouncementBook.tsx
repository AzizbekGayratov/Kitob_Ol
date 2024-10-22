import React, { useState } from "react";
import AboutAnnouncement from "./components/aboutAnnouncement/AboutAnnouncement";
import Description from "./components/description/Description";
import Images from "./components/images/Images";
import Location from "./components/location/Location";
import SubmitForm from "./components/submitForm/SubmitForm";
import { FormDataType } from "../types/Types";
import api from "Services/Api";
import { Storage } from "Services";
import { useNavigate } from "react-router-dom";

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
  price: null,
  published_year: "",
  shitrix_code: "",
  publisher_id: "",
  stock: 0,
  title: "",
  total_pages: null,
  translator_id: "",
  writing_type: "",
  sellerId: "",
};

function AnnouncementBook() {
  const [formData, setFormData] = useState(initialForm);
  const [reset, setReset] = useState("");

  const navigate = useNavigate();

  console.log({ ...formData, is_new: formData.is_new === "true" });

  const token = Storage.get("token");
  let access_token = token ? JSON.parse(token).access_token : "";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(access_token);

    try {
      const submissionData = {
        ...formData,
        price: formData.price ? parseFloat(formData.price.toString()) : null,
        total_pages: formData.total_pages
          ? parseFloat(formData.total_pages.toString())
          : null,
      };

      const response = await api.post("/books/create", submissionData, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });

      console.log("Submission successful:", response.data);

      resetForm();

      navigate("/profile");
    } catch (error) {
      console.error("Submission failed:", error);
    }
  };

  const resetForm = () => {
    setReset("");
    setFormData(initialForm);
    setReset("resetted");
    console.log("Form has been reset");
  };

  return (
    <section className="sm:p-2 flex flex-col gap-10">
      <form className="p-2 flex flex-col gap-10" onSubmit={handleSubmit}>
        <AboutAnnouncement formData={formData} setFormData={setFormData} />
        <Images formData={formData} setFormData={setFormData} reset={reset} />
        <Description formData={formData} setFormData={setFormData} />
        <Location formData={formData} setFormData={setFormData} reset={reset} />
        <SubmitForm />
      </form>
    </section>
  );
}

export default AnnouncementBook;
