import React, { useState } from "react";
import AboutAnnouncement from "./components/aboutAnnouncement/AboutAnnouncement";
import Connect from "./components/connect/Connect";
import Description from "./components/description/Description";
import Images from "./components/images/Images";
import Location from "./components/location/Location";
import SubmitForm from "./components/submitForm/SubmitForm";

function AnnouncementBook() {
  // const initialForm = {
  //   bookName: "",
  //   bookCategory: "",
  //   bookAuthor: "",
  //   bookID: "",
  //   selectedBookLanguage: "",
  //   isInternationalBook: false,
  //   selectedTextType: "",
  //   bookTranslator: "",
  //   bookPages: "",
  //   bookPublisher: "",
  //   bookYear: "",
  //   bookPrice: "",
  //   bookCurrency: "",
  //   paperFormat: "",
  //   bookCover: "",
  //   bookCondition: "",
  //   applicant: "",
  //   email: "",
  //   phoneNumber: "",
  //   description: "",
  //   usefulInformations: "",
  //   location: "",
  //   images: [],
  // };

  const initialForm = {
    title: "", // was bookName
    category_id: "", // was bookCategory
    author_id: "", // was bookAuthor
    shitrix_code: "", // was bookID
    language_id: "", // was selectedBookLanguage
    is_new: false, // was isInternationalBook
    writing_type: "", // was selectedTextType
    translator_id: "", // was bookTranslator
    total_pages: "", // was bookPages
    publisher_id: "", // was bookPublisher
    published_year: "", // was bookYear
    price: "", // was bookPrice
    cover_format: "", // was paperFormat
    cover_type: "", // was bookCover
    description: "", // was description
    location: {
      // was location
      city_id: "",
      district_id: "",
    },
    image_url: "", // new field
    img_url: "", // new field
    stock: 0, // new field

    // Optional fields (unused but retained)
    bookCurrency: "", // optional
    bookCondition: "", // optional
    applicant: "", // optional
    email: "", // optional
    phoneNumber: "", // optional
    usefulInformations: "", // optional
    useSecondaryInformations: '', // optional
    images: [], // optional
  };

  // const initialForm = {
  //   title: "",
  //   writing_type: "",
  //   cover_type: "",
  //   bookCategory: "",
  //   bookAuthor: "",
  //   paperFormat: "",
  //   bookID: "",
  //   selectedBookLanguage: "",
  //   isInternationalBook: false,
  //   bookTranslator: "",
  //   bookPages: "",
  //   bookPublisher: "",
  //   bookYear: "",
  //   bookPrice: "",
  //   bookCurrency: "",
  //   bookCondition: "",
  //   applicant: "",
  //   email: "",
  //   phoneNumber: "",
  //   description: "",
  //   usefulInformations: "",
  //   location: "",
  //   images: [],
  // };

  const [formData, setFormData] = useState(initialForm);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    console.log("Submitted");

    // Reset Form
    resetForm();
  };

  const resetForm = () => {
    setFormData(initialForm);
    console.log("Resetted");
  };

  return (
    <section className="sm:p-2 flex flex-col gap-10">
      <form
        className="p-2 flex flex-col gap-10"
        onSubmit={handleSubmit}
        onReset={resetForm}
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
