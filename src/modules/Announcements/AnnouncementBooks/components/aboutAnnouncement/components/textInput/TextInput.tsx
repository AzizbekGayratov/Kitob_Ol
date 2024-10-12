import { TextInputProps } from "modules/Announcements/types/Types";

export default function TextInput({
  type,
  name,
  value,
  placeholder,
  onChange,
  required,
  className,
}: TextInputProps) {
  return (
    <input
      type={type || "text"}
      placeholder={placeholder}
      name={name}
      id={name}
      className={`${className} form_input `}
      value={value || ""}
      onChange={onChange || undefined}
      required={required}
    />
  );
}
