import { useState } from "react";
import AboutVacancy from "./components/aboutVacancy/AboutVacancy";
import JobDescription from "./components/jobDescription/JobDescription";
import JobLocation from "./components/jobLocation/JobLocation";
import SubmitForm from "../AnnouncementBooks/components/submitForm/SubmitForm";
import api from "Services/Api";
import { Storage } from "Services";

const initialJobForm = {
  description: "",
  status: "",
  title: "",
  salary_from: 0,
  salary_to: 0,
  typeOfTraining: "",
  working_types: "",
  working_styles: "",
  phone_number: "",
  location: {
    city_id: "",
    district_id: "",
  },
};

function AnnouncementVacancy() {
  const [jobFormData, setJobFormData] = useState(initialJobForm);
  const [reset, setReset] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  const token = Storage.get("token");
  let access_token = token ? JSON.parse(token).access_token : "";
  console.log(access_token);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const submissionData = {
        ...jobFormData,
        salary_from: jobFormData.salary_from
          ? parseFloat(jobFormData.salary_from.toString())
          : null,
        salary_to: jobFormData.salary_to
          ? parseFloat(jobFormData.salary_to.toString())
          : null,
      };

      const response = await api.post("/vacancies/create", submissionData, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });

      resetForm();

      console.log("Submission successful:", response.data);
    } catch (error) {
      console.error("Submission failed:", error);
    }
  };

  const resetForm = () => {
    setReset("");
    setJobFormData(initialJobForm);
    setReset("resetted");
    console.log("Form has been reset");
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
          reset={reset}
        />

        <SubmitForm modalOpen={modalOpen} setModalOpen={setModalOpen} />
      </form>
    </section>
  );
}

export default AnnouncementVacancy;
