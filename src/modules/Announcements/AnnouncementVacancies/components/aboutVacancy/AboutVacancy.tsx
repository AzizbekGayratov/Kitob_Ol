import TextInput from "modules/Announcements/components/textInput/TextInput";
import FormContainer from "modules/Announcements/components/formContainer/FormContainer";
import Label from "modules/Announcements/components/label/Label";
import { ComponentPropsTypeJob } from "modules/Announcements/types/Types";
import Input from "react-phone-number-input/input";
import SelectInput from "modules/Announcements/components/selectInput/SelectInput";
import { customDatas } from "modules/Announcements/CustomData";

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
          <h3 className="font-Inter font-normal text-2xl">Kimsiz*</h3>

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

          <TextInput
            type="text"
            name="title"
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
            <TextInput
              type="number"
              name="salary_from"
              value={
                jobFormData.salary_from === 0 ? null : jobFormData.salary_from
              }
              placeholder="700 dan"
              onChange={handleInputChange}
              required
              className="col-span-4 lg:col-span-5"
            />

            <SelectInput
              name="salary_from"
              id="salary_from"
              className="px-2 col-span-2 lg:col-span-1"
              options={customDatas.currencies}
            />
          </div>
        </FormContainer>

        <FormContainer>
          <div className="size-8"></div>
          <div className="grid grid-cols-6 gap-2">
            <TextInput
              type="number"
              name="salary_to"
              value={jobFormData.salary_to === 0 ? null : jobFormData.salary_to}
              placeholder="1200 gacha"
              onChange={handleInputChange}
              required
              className="col-span-4 lg:col-span-5"
            />

            <SelectInput
              name="salary_to"
              id="salary_to"
              className="px-2 col-span-2 lg:col-span-1"
              options={customDatas.currencies}
            />
          </div>
        </FormContainer>

        <FormContainer>
          <Label htmlFor="working_types">Ish turi</Label>

          <SelectInput
            name="working_types"
            id="working_types"
            className="px-2"
            options={customDatas.working_types}
            onChange={handleInputChange}
            value={jobFormData.working_types}
            defaultValue="Ish turi"
          />
        </FormContainer>

        <FormContainer>
          <Label htmlFor="typeOfTraining">Mashg'ulot turi</Label>

          <SelectInput
            name="typeOfTraining"
            id="typeOfTraining"
            className="px-2"
            options={customDatas.typeOfTraining}
            onChange={handleInputChange}
            value={jobFormData.typeOfTraining}
            defaultValue="Mashg'ulot turi"
          />
        </FormContainer>

        <FormContainer>
          <Label htmlFor="working_styles">Ish tarzi</Label>

          <SelectInput
            name="working_styles"
            id="working_styles"
            className="px-2"
            options={customDatas.working_styles}
            onChange={handleInputChange}
            value={jobFormData.working_styles}
            defaultValue="Ish tarzi"
          />
        </FormContainer>

        <FormContainer>
          <Label htmlFor="phone_number">Telefon raqam*</Label>

          <Input
            name="phone_number"
            id="phone_number"
            className="form_input"
            placeholder="+998 99 999 99 99"
            value={jobFormData.phone_number}
            onChange={(value) => {
              setJobFormData({
                ...jobFormData,
                phone_number: value,
              });
            }}
            required
          />
        </FormContainer>
      </div>
    </div>
  );
}
