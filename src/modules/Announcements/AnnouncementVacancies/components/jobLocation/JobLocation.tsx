import { ComponentPropsTypeJob } from "modules/Announcements/types/Types";

export default function JobLocation({
  jobFormData,
  setJobFormData,
}: ComponentPropsTypeJob) {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    // Assuming we differentiate between city_id and district_id by checking if the input is numeric (for district_id)
    const isNumeric = /^\d+$/.test(value);

    setJobFormData({
      ...jobFormData,
      location: {
        ...jobFormData.location,
        city_id: isNumeric ? jobFormData.location.city_id : value, // Update city_id if input is not numeric
        district_id: isNumeric ? value : jobFormData.location.district_id, // Update district_id if input is numeric
      },
    });
  };

  return (
    <div className="container bg-white p-7">
      <h2 className="font-semibold text-[32px] text-primary">
        <label htmlFor="jobLocation">Manzilni kiriting*</label>
      </h2>

      <input
        type="text"
        name="jobLocation"
        id="jobLocation"
        placeholder="Shahar yoki Pochta indeksi"
        className="form_input mt-5 md:max-w-[48%]"
        value={jobFormData.location.city_id || jobFormData.location.district_id}
        onChange={handleInputChange}
        required
      />
    </div>
  );
}
