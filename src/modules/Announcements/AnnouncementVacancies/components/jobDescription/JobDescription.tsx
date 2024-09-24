import TextArea from "modules/Announcements/AnnouncementBooks/components/description/components/TextArea";
import { ComponentPropsTypeJob } from "modules/Announcements/types/Types";
import React from "react";

export default function JobDescription({
  jobFormData,
  setJobFormData,
}: ComponentPropsTypeJob) {
  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    setJobFormData({ ...jobFormData, [name]: value });
  };
  console.log(jobFormData);

  return (
    <div className="container bg-white p-7">
      <h2 className="font-semibold text-[32px] text-primary">Tavsif</h2>

      <div className="flex flex-col gap-3 md:max-w-[82%] mt-7">
        <TextArea
          name="description"
          rows={15}
          maxLength={9000}
          placeholder="O'zingizni shu e'lonni ko'rayotgan odam sifatida tavsif yozing!"
          value={jobFormData.description}
          onChange={handleInputChange}
        />

        <label
          htmlFor="description"
          className="flex justify-between font-Inter font-normal text-base mt-2"
        >
          <p>Yana kamida 80 ta belgi yozing</p>

          <p>{jobFormData.description.length}/9000</p>
        </label>
      </div>
    </div>
  );
}
