import { SelectInputType } from "modules/Announcements/types/Types";

export default function SelectInput({
  name,
  id,
  className,
  value,
  onChange,
  required = true,
  defaultValue,
  options,
}: SelectInputType) {
  return (
    <select
      name={name}
      id={id}
      className={`form_input ${className}`}
      value={typeof value === "boolean" ? String(value) : value}
      onChange={onChange}
      required={required}
    >
      <option value="" disabled hidden>
        {defaultValue}
      </option>

      {options.length > 0 ? (
        options.map((opt) => (
          <option key={opt.id} value={opt.id}>
            {opt.name} {opt.surname}
          </option>
        ))
      ) : (
        <option value="" disabled>
          No options available
        </option>
      )}
    </select>
  );
}
