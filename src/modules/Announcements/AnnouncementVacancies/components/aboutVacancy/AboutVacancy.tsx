import FormContainer from "modules/Announcements/AnnouncementBooks/components/aboutAnnouncement/components/formContainer/FormContainer";
import Label from "modules/Announcements/AnnouncementBooks/components/aboutAnnouncement/components/label/Label";
import { ComponentPropsTypeJob } from "modules/Announcements/types/Types";

export default function AboutVacancy({
  jobFormData,
  setJobFormData,
}: ComponentPropsTypeJob) {
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setJobFormData({ ...jobFormData, [name]: value });
  };
  console.log(jobFormData);

  return (
    <div className="container bg-white p-7">
      <h2 className="font-semibold text-[32px] text-primary">
        Ish haqida ma'lumotlar kiriting
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-16 mt-7">
        <FormContainer>
          <Label htmlFor="status">Kimsiz*</Label>

          <div className="flex gap-7 flex-col lg:flex-row">
            <div className="flex gap-4 items-center">
              <input
                type="radio"
                name="status"
                id="employer"
                value="employer"
                checked={jobFormData.status === "employer"}
                onChange={handleInputChange}
                className="size-5 accent-primary"
                required
              />
              <Label htmlFor="employer">Ish beruvchiman</Label>
            </div>

            <div className="flex gap-4 items-center">
              <input
                type="radio"
                name="status"
                id="jobSeeker"
                value="jobSeeker"
                checked={jobFormData.status === "jobSeeker"}
                onChange={handleInputChange}
                className="size-5 accent-primary"
                required
              />
              <Label htmlFor="jobSeeker">Ish izlayapman</Label>
            </div>
          </div>
        </FormContainer>

        <FormContainer>
          <Label htmlFor="title">Ish nomi*</Label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Ish nomi"
            className="form_input"
            value={jobFormData.title}
            onChange={handleInputChange}
            required
          />
        </FormContainer>

        <FormContainer>
          <Label htmlFor="salary_from">Maosh*</Label>

          <div className="grid grid-cols-6 gap-2">
            <input
              type="number"
              name="salary_from"
              id="salary_from"
              value={jobFormData.salary_from}
              placeholder="700 dan"
              onChange={handleInputChange}
              required
              className="col-span-4 lg:col-span-5 form_input"
            />

            <select
              className="form_input px-2 col-span-2 lg:col-span-1"
              value={jobFormData.fromJobCurrency || "UZS"}
              name="fromJobCurrency"
              id="fromJobCurrency"
              onChange={handleInputChange}
              required
            >
              <option value="UZS">UZS</option>
              <option value="USD">USD</option>
            </select>
          </div>
        </FormContainer>

        <FormContainer>
          <div className="size-8"></div>

          <div className="grid grid-cols-6 gap-2">
            <input
              type="number"
              name="salary_to"
              id="salary_to"
              value={jobFormData.salary_to}
              placeholder="1200 gacha"
              onChange={handleInputChange}
              required
              className="col-span-4 lg:col-span-5 form_input"
            />

            <select
              className="form_input px-2 col-span-2 lg:col-span-1"
              value={jobFormData.toJobCurrency || "UZS"}
              name="toJobCurrency"
              id="toJobCurrency"
              onChange={handleInputChange}
              required
            >
              <option value="UZS">UZS</option>
              <option value="USD">USD</option>
            </select>
          </div>
        </FormContainer>

        <FormContainer>
          <Label htmlFor="working_types">Ish turi</Label>

          <select
            className="form_input px-2"
            value={jobFormData.working_types}
            name="working_types"
            id="working_types"
            onChange={handleInputChange}
          >
            <option value="" disabled>
              Ish turi
            </option>

            <option value="online">Online</option>
            <option value="offline">Offline</option>
          </select>
        </FormContainer>

        <FormContainer>
          <Label htmlFor="typeOfTraining">Mashg'ulot turi</Label>

          <select
            className="form_input px-2"
            value={jobFormData.typeOfTraining}
            name="typeOfTraining"
            id="typeOfTraining"
            onChange={handleInputChange}
          >
            <option value="" disabled>
              Mashg'ulot turi
            </option>

            <option value="practice">Practice</option>
            <option value="realJob">Real Job</option>
          </select>
        </FormContainer>

        <FormContainer>
          <Label htmlFor="working_styles">Ish tarzi</Label>

          <select
            className="form_input px-2"
            value={jobFormData.working_styles}
            name="working_styles"
            id="working_styles"
            onChange={handleInputChange}
          >
            <option value="" disabled>
              Ish tarzi
            </option>

            <option value="remote">Remote</option>
            <option value="offline">Offline</option>
            <option value="hybrid">Hybrid</option>
          </select>
        </FormContainer>

        <FormContainer>
          <Label htmlFor="phone_number">Telefon raqam*</Label>

          <input
            type="number"
            name="phone_number"
            id="phone_number"
            className="form_input"
            placeholder="+998 99 999 99 99"
            value={jobFormData.phone_number}
            onChange={handleInputChange}
            required
          />
        </FormContainer>
      </div>
    </div>
  );
}
