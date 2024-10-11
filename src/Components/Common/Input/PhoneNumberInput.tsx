import Input from "react-phone-number-input/input";

export default function PhoneNumberInput({
  phone,
  setPhone,
}: {
  phone: string;
  setPhone: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <Input
      value={phone}
      onChange={(value) => setPhone(value as string)}
      className="form_input"
      required
    />
  );
}
