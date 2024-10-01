import React, { useState } from "react";
import AboutAnnouncement from "./components/aboutAnnouncement/AboutAnnouncement";
import Connect from "./components/connect/Connect";
import Description from "./components/description/Description";
import Images from "./components/images/Images";
import Location from "./components/location/Location";
import SubmitForm from "./components/submitForm/SubmitForm";
import { FormDataType } from "../types/Types";

function AnnouncementBook() {
  const initialForm: FormDataType = {
    title: "", // was bookName ✅
    category_id: "", // was bookCategory ✅
    author_id: "", // was bookAuthor
    shitrix_code: "", // was bookID ✅
    language_id: "", // was selectedBookLanguage ✅
    is_new: "", // ✅
    writing_type: "", // was selectedTextType ✅
    translator_id: "", // was bookTranslator ✅
    total_pages: "", // was bookPages ✅
    publisher_id: "", // was bookPublisher
    published_year: "", // was bookYear ✅
    price: "", // was bookPrice ✅
    cover_format: "", // was paperFormat ✅
    cover_type: "", // was bookCover ✅
    description: "", // was description ✅
    location: {
      city_id: "", // ✅
      district_id: "", // ✅
    }, // ✅

    image_url: "", // new field
    img_url: "", // new field
    stock: 0, // new field

    // Optional fields (unused but retained)
    bookCurrency: "", // optional
    bookCondition: false, // optional
    applicant: "", // optional
    email: "", // optional
    phoneNumber: "", // optional
    usefulInformations: "", // optional
    useSecondaryInformations: "", // optional
    images: [], // optional
  };

  /* 
  {
  "published_year": "string", ✅
  "translator_id": "string", ✅
  "shitrix_code": "string", ✅ 
  "cover_format": "string", ✅
  "publisher_id": "string", ✅
  "language_id": "string", ✅
  "category_id": "string", ✅
  "description": "string", ✅
  "writing_type": "string" ✅
  "district_id": "string" ✅
  "cover_type": "string", ✅
  "city_id": "string", ✅
  "title": "string", ✅
  "total_pages": 0, ✅
  "is_new": true, ✅
  "location": { ✅
  "price": 0, ✅
  }, ✅
  "stock": 0,
  "image_url": "string",
  "img_url": "string",
  "author_id": "string",
  }
  */

  const [formData, setFormData] = useState(initialForm);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Call API to create a new book
      // Here you can use formData to send the data to the server
      // resetForm();
    } catch (error) {
      console.error("Submission failed:", error);
    }
  };

  const resetForm = () => {
    setFormData(initialForm);
    console.log("Resetted");
  };

  console.log("Submitting:", formData);

  return (
    <section className="sm:p-2 flex flex-col gap-10">
      <form
        className="p-2 flex flex-col gap-10"
        onChange={handleSubmit}
        // onReset={resetForm}
      >
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
