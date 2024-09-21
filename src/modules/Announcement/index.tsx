import React, { useState } from "react";
import AboutAnnouncement from "./components/aboutAnnouncement/AboutAnnouncement";
import Connect from "./components/connect/Connect";
import Description from "./components/description/Description";
import Images from "./components/images/Images";
import Location from "./components/location/Location";
import SubmitForm from "./components/submitForm/SubmitForm";

function Index() {
  const initialForm = {
    bookName: "",
    bookCategory: "",
    bookAuthor: "",
    bookID: "",
    selectedBookLanguage: "",
    isInternationalBook: false,
    selectedTextType: "",
    bookTranslator: "",
    bookPages: "",
    bookPublisher: "",
    bookYear: "",
    bookPrice: "",
    bookCurrency: "",
    paperFormat: "",
    bookCover: "",
    bookCondition: "",
    applicant: "",
    email: "",
    phoneNumber: "",
    description: "",
    usefulInformations: "",
    location: "",
    images: [],
  };

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
    <section className="p-2 flex flex-col gap-10">
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

export default Index;
