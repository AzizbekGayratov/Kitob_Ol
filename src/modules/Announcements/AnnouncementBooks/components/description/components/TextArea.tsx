import { TextAreaProps } from "modules/Announcements/types/Types";

export default function TextArea({
  name,
  rows,
  maxLength,
  placeholder,
  value,
  onChange,
}: TextAreaProps) {
  return (
    <textarea
      name={name}
      id={name}
      className="resize-y form_input w-full border-none outline-none p-2"
      rows={rows}
      maxLength={maxLength}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}
