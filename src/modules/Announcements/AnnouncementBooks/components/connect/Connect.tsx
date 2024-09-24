import React from "react";
import Label from "../aboutAnnouncement/components/label/Label";
import FormContainer from "../aboutAnnouncement/components/formContainer/FormContainer";
import { ComponentPropsType } from "modules/Announcements/types/Types";

export default function Connect({ formData, setFormData }: ComponentPropsType) {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="container bg-white p-7">
      <h2 className="font-semibold text-[32px] text-primary">
        Aloqa uchun ma'lumotlar
      </h2>

      <div className="md:max-w-[48%] flex flex-col gap-5 sm:gap-16 mt-7">
        <FormContainer>
          <Label htmlFor="applicant">Murojaat qiluvchi shaxs*</Label>

          <input
            type="text"
            name="applicant"
            id="applicant"
            className="form_input"
            placeholder="Nasibjon"
            value={formData.applicant}
            onChange={handleInputChange}
            required
          />
        </FormContainer>

        <FormContainer>
          <Label htmlFor="email">Email manzil</Label>

          <input
            type="email"
            name="email"
            id="email"
            className="form_input"
            placeholder="Nasibjon70@gmail.com"
            value={formData.email}
            onChange={handleInputChange}
          />
        </FormContainer>

        <FormContainer>
          <Label htmlFor="phoneNumber">Telefon raqam</Label>

          <input
            type="number"
            name="phoneNumber"
            id="phoneNumber"
            className="form_input"
            placeholder="+998 88 155 72 73"
            value={formData.phoneNumber}
            onChange={handleInputChange}
          />
        </FormContainer>
      </div>
    </div>
  );
}
