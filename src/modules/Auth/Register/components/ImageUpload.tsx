import api from "Services/Api";
import { useState } from "react";
import { FaRegUser } from "react-icons/fa";

export default function ImageUpload({
  formData,
  setFormData,
}: {
  formData: any;
  setFormData: any;
}) {
  const [image, setImage] = useState<string | ArrayBuffer | null>(null);
  console.log(image);
  

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        // setFormData({ ...formData, image_url: reader.result });
        setImage(reader.result);
      };
      reader.readAsDataURL(selectedFile);
      await uploadImage(selectedFile);
    }
  };

  const uploadImage = async (selectedFile: File) => {
    try {
      const formDataToUpload = new FormData();
      formDataToUpload.append("file", selectedFile);

      const response = await api.post("/img-upload", formDataToUpload, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      const { Message, Url } = response.data;
      console.log("Response:", Message, Url);

      setFormData({ ...formData, image_url: Url });
      console.log(formData);
      
    } catch (error) {
      console.error("Uploading image:", error);
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
            <FaRegUser size={34} />
          </>
        )}
      </label>
    </div>
  );
}
