import { useState } from "react";
import AboutVacancy from "./components/aboutVacancy/AboutVacancy";
import JobDescription from "./components/jobDescription/JobDescription";
import JobLocation from "./components/jobLocation/JobLocation";
import SubmitForm from "../AnnouncementBooks/components/submitForm/SubmitForm";

function AnnouncementVacancy() {
  const initialJobForm = {
    description: "",
    status: "",
    title: "",
    salary_from: undefined,
    salary_to: undefined,
    typeOfTraining: "",
    working_types: "",
    working_styles: "",
    phone_number: "",
    location: {
      city_id: "",
      district_id: "",
    },
    // fromJobCurrency: "",
    // toJobCurrency: "",
  };

  const [jobFormData, setJobFormData] = useState(initialJobForm);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(jobFormData);
    console.log("Submitted");

    // Reset Form
    resetForm();
  };

  const resetForm = () => {
    setJobFormData(initialJobForm);
    console.log("Resetted");
  };

  return (
    <section className="p-2 flex flex-col gap-10">
      <form
        className="p-2 flex flex-col gap-10"
        onSubmit={handleSubmit}
        onReset={resetForm}
      >
        <AboutVacancy
          jobFormData={jobFormData}
          setJobFormData={setJobFormData}
        />

        <JobDescription
          jobFormData={jobFormData}
          setJobFormData={setJobFormData}
        />

        <JobLocation
          jobFormData={jobFormData}
          setJobFormData={setJobFormData}
        />

        <SubmitForm />
      </form>
    </section>
  );
}

export default AnnouncementVacancy;
