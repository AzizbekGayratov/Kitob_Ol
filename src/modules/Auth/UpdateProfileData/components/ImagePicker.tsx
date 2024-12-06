import { useState } from "react";
import imagePicker from "../../../../assets/images/svg/imagePicker.svg";
import api from "Services/Api";

export default function ImagePicker({ data, setData }: any) {
  const [image, setImage] = useState<string | ArrayBuffer | null>(null);

  console.log(image);

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

      if (response.data) {
        setData({ ...data, image_url: Url });
      }
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  return (
    <div className="mb-10 relative w-[120px] mx-auto">
      <div className="w-[120px] h-[120px] mx-auto overflow-hidden rounded-full cursor-pointer">
        <img
          src={data.image_url}
          className="w-full h-full object-cover"
          alt="user avatar"
        />
      </div>
      <label htmlFor="image">
        <div className="p-[10px] bg-[#2C3033] rounded-[100px] border border-white absolute right-0 bottom-0 cursor-pointer">
          <img src={imagePicker} alt="svg" />
          <input
            type="file"
            id="image"
            style={{ display: "none" }}
            accept="image/*"
            onChange={(e) => handleImageChange(e)}
          />
        </div>
      </label>
    </div>
  );
}
