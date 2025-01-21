import { ComponentPropsType } from "modules/Announcements/types/Types";
import React, { useEffect, useState } from "react";
import { TbTrash } from "react-icons/tb";
import { useSelector } from "react-redux";
import api from "Services/Api";

export interface ImageCardProps extends ComponentPropsType {
  imageIndex: number; // 0 for image_url, 1 for img_url
}

export default function ImageCard({
  imageIndex,
  formData,
  setFormData,
  reset,
}: ImageCardProps) {
  const [image, setImage] = useState<string | ArrayBuffer | null>(null);
  const { language } = useSelector(
    (state: { language: { language: "uz" | "ru" | "en" } }) => state.language
  );

  useEffect(() => {
    if (reset === "resetted") removeImage();
  }, [reset]);

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result); // Display image preview
      };
      reader.readAsDataURL(selectedFile);

      // Upload the image to the API
      await uploadImage(selectedFile); // Immediately trigger image upload
    }
  };

  const uploadImage = async (selectedFile: File) => {
    try {
      const formDataToUpload = new FormData();
      formDataToUpload.append("file", selectedFile); // Ensure the key matches what the API expects

      const response = await api.post("/img-upload", formDataToUpload, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      const { Message, Url } = response.data;
      console.log("Response:", Message, Url);

      // Update form data with the URL returned by the server
      if (imageIndex === 0) {
        setFormData({ ...formData, image_url: Url }); // Update image_url
      } else if (imageIndex === 1) {
        setFormData({ ...formData, img_url: Url }); // Update img_url
      }
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  const removeImage = () => {
    setImage(null);

    if (imageIndex === 0) {
      setFormData({ ...formData, image_url: "" }); // Clear image_url
    } else if (imageIndex === 1) {
      setFormData({ ...formData, img_url: "" }); // Clear img_url
    }
  };

  return (
    <div className="rounded-sm p-4 text-center cursor-pointer bg-[#FFFBEF] shadow-sm">
      <label className="flex items-center justify-center h-[200px] relative cursor-pointer">
        {image ? (
          <>
            <img
              src={image as string}
              alt="Selected"
              className="w-full h-full rounded-[8px] object-cover"
            />
            <TbTrash
              size={50}
              className="absolute -top-6 -right-6 text-[#FF3939] cursor-pointer border-2 border-[#FFD9D9] rounded-full p-2"
              onClick={removeImage}
            />
          </>
        ) : (
          <div className="text-primary font-Inter text-2xl font-semibold h-full flex items-center justify-center">
            {language === "uz"
              ? "Rasm qo'shish"
              : language === "ru"
              ? "Добавить изображение"
              : "Add image"}
          </div>
        )}
        <input
          className="hidden"
          type="file"
          accept="image/*"
          onChange={handleImageChange}
        />
      </label>
    </div>
  );
}
