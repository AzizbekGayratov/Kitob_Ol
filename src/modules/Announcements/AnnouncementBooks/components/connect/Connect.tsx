import Label from "../aboutAnnouncement/components/label/Label";
import FormContainer from "../aboutAnnouncement/components/formContainer/FormContainer";
import Input from "react-phone-number-input/input";
import { useEffect, useState } from "react";

export default function Connect({ reset }: any) {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");

  useEffect(() => {
    if (reset === "resetted") {
      setName("");
      setEmail("");
      setPhoneNumber("");
    }
  }, [reset]);

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
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
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
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormContainer>

        <FormContainer>
          <Label htmlFor="phone_number">Telefon raqam</Label>

          <Input
            name="phone_number"
            id="phone_number"
            className="form_input"
            placeholder="+998 99 999 99 99"
            value={phoneNumber}
            onChange={(e: any) => {
              setPhoneNumber(e.target.value);
            }}
          />
        </FormContainer>
      </div>
    </div>
  );
}
