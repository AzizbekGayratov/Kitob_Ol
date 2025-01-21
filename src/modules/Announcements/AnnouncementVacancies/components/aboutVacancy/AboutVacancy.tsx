import TextInput from "modules/Announcements/components/textInput/TextInput";
import FormContainer from "modules/Announcements/components/formContainer/FormContainer";
import Label from "modules/Announcements/components/label/Label";
import { ComponentPropsTypeJob } from "modules/Announcements/types/Types";
import SelectInput from "modules/Announcements/components/selectInput/SelectInput";
import { customDatas } from "modules/Announcements/CustomData";
import { useState } from "react";
import { useSelector } from "react-redux";
import PhoneInput from "react-phone-number-input/input";

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

  const [status, setStatus] = useState("");

  const handleInputStatusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStatus(e.target.value);
  };

  const { language } = useSelector(
    (state: { language: { language: "uz" | "ru" | "en" } }) => state.language
  );

  const [typeOfTraining, setTypeOfTraining] = useState("");

  return (
    <div className="container bg-white p-7">
      <h2 className="font-semibold text-[32px] text-primary">
        {language === "uz"
          ? "Ish haqida ma'lumotlar kiriting"
          : language === "ru"
          ? "Введите информацию о работе"
          : "Enter information about work"}
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-16 mt-7">
        <FormContainer>
          <h3 className="font-Inter font-normal text-2xl">
            {language === "uz"
              ? "Kimsiz*"
              : language === "ru"
              ? "Вы кто*"
              : "Who are you*"}
          </h3>

          <div className="flex gap-7 flex-col lg:flex-row">
            <div className="flex gap-4 items-center">
              <input
                type="radio"
                name="status"
                id="employer"
                value="employer"
                checked={status === "employer"}
                onChange={handleInputStatusChange}
                className="size-5 accent-primary"
                required
              />
              <Label htmlFor="employer">
                {language === "uz"
                  ? "Ish beruvchiman"
                  : language === "ru"
                  ? "Работодатель"
                  : "Employer"}
              </Label>
            </div>

            <div className="flex gap-4 items-center">
              <input
                type="radio"
                name="status"
                id="jobSeeker"
                value="jobSeeker"
                checked={status === "jobSeeker"}
                onChange={handleInputStatusChange}
                className="size-5 accent-primary"
                required
              />
              <Label htmlFor="jobSeeker">
                {language === "uz"
                  ? "Ish izlayapman"
                  : language === "ru"
                  ? "Ищу работу"
                  : "Job Seeker"}
              </Label>
            </div>
          </div>
        </FormContainer>

        <FormContainer>
          <Label htmlFor="title">
            {language === "uz"
              ? "Ish nomi"
              : language === "ru"
              ? "Название работы"
              : "Job title"}
          </Label>

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
          <Label htmlFor="salary_from">
            {language === "uz"
              ? "Maosh"
              : language === "ru"
              ? "Зарплата"
              : "Salary"}
          </Label>

          <div className="grid grid-cols-6 gap-2">
            <TextInput
              type="number"
              name="salary_from"
              value={
                jobFormData.salary_from === 0 ? null : jobFormData.salary_from
              }
              placeholder={
                language === "uz"
                  ? "... dan"
                  : language === "ru"
                  ? "от ..."
                  : "from ..."
              }
              onChange={handleInputChange}
              required
              className="col-span-6 lg:col-span-6"
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
              placeholder={
                language === "uz"
                  ? "... gacha"
                  : language === "ru"
                  ? "до ..."
                  : "to ..."
              }
              onChange={handleInputChange}
              required
              className="col-span-6 lg:col-span-6"
            />
          </div>
        </FormContainer>

        <FormContainer>
          <Label htmlFor="working_types">
            {language === "uz"
              ? "Ish turi"
              : language === "ru"
              ? "Тип работы"
              : "Working type"}
          </Label>

          <SelectInput
            name="working_types"
            id="working_types"
            className="px-2"
            options={customDatas.working_types}
            onChange={handleInputChange}
            value={jobFormData.working_types}
            defaultValue={
              language === "uz"
                ? "Ish turi"
                : language === "ru"
                ? "Тип работы"
                : "Working type"
            }
          />
        </FormContainer>

        <FormContainer>
          <Label htmlFor="typeOfTraining">
            {language === "uz"
              ? "Mashg'ulot turi"
              : language === "ru"
              ? "Тип занятости"
              : "Type of training"}
          </Label>

          <SelectInput
            name="typeOfTraining"
            id="typeOfTraining"
            className="px-2"
            options={customDatas.typeOfTraining}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
              setTypeOfTraining(e.target.value);
            }}
            value={typeOfTraining}
            defaultValue={
              language === "uz"
                ? "Mashg'ulot turi"
                : language === "ru"
                ? "Тип занятости"
                : "Type of training"
            }
          />
        </FormContainer>

        <FormContainer>
          <Label htmlFor="working_styles">
            {language === "uz"
              ? "Ish tarzi"
              : language === "ru"
              ? "График работы"
              : "Working graphic"}
          </Label>

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
          <Label htmlFor="phone_number">
            {language === "uz"
              ? "Telefon raqami"
              : language === "ru"
              ? "Номер телефона"
              : "Phone number"}
          </Label>

          {/* <Input
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
          /> */}
          <PhoneInput
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
