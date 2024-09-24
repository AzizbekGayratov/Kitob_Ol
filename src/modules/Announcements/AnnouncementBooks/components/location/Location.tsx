import { ComponentPropsType } from "modules/Announcements/types/Types";

export default function Location({
  formData,
  setFormData,
}: ComponentPropsType) {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="container bg-white p-7">
      <h2 className="font-semibold text-[32px] text-primary">
        <label htmlFor="location">Manzilni kiriting*</label>
      </h2>

      <input
        type="text"
        name="city_id"
        id="location"
        placeholder="Shahar yoki Pochta indeksi"
        className="form_input mt-5 md:max-w-[48%]"
        value={formData.location.city_id}
        onChange={handleInputChange}
        required
      />
    </div>
  );
}
