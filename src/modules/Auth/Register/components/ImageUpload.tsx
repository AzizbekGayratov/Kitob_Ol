import { FaRegUser } from "react-icons/fa";

export default function ImageUpload({
  formData,
  setFormData,
}: {
  formData: any;
  setFormData: any;
}) {
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, image_url: reader.result });
      };
      reader.readAsDataURL(selectedFile);
    }
  };
  return (
    <div className="relative">
      <input
        type="file"
        name="image"
        id="image"
        accept="image/*"
        onChange={handleImageChange}
        className="hidden"
      />
      <label
        htmlFor="image"
        className="rounded-full h-[140px] w-[140px] border-[10px] bg-[#D9D9D9] border-rootBg flex flex-col items-center justify-center cursor-pointer overflow-hidden"
      >
        {formData.image_url ? (
          <img
            src={formData.image_url}
            alt="image"
            className="w-full h-full object-cover rounded-lg"
          />
        ) : (
          <>
            <FaRegUser  size={34}/>
          </>
        )}
      </label>
    </div>
  );
}
