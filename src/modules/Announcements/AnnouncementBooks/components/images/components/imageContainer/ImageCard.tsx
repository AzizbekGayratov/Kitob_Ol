import React, { useState } from "react";
import { TbTrash } from "react-icons/tb";

interface ImageCardProps {
  imageIndex: number;
  formData: any;
  setFormData: React.Dispatch<React.SetStateAction<any>>;
}

export default function ImageCard({
  imageIndex,
  formData,
  setFormData,
}: ImageCardProps) {
  const [image, setImage] = useState<string | ArrayBuffer | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
        const updatedImages = [...formData.images];
        updatedImages[imageIndex] = reader.result;
        setFormData({ ...formData, images: updatedImages });
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setImage(null);
    const updatedImages = [...formData.images];
    updatedImages[imageIndex] = null;
    setFormData({ ...formData, images: updatedImages });
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
            Rasm qo'shish
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
