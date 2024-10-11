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
        className="w-full h-64 rounded-lg border-2 border-dashed border-gray-300 flex flex-col items-center justify-center cursor-pointer"
      >
        <img
          src={formData.image_url}
          alt="image"
          className="w-full h-full object-cover rounded-lg" 
        />
      </label>
    </div>
  );
}
