import React, { useEffect, useState } from "react";
import Label from "./components/label/Label";
import TextInput from "./components/textInput/TextInput";
import FormContainer from "./components/formContainer/FormContainer";
import {
  ComponentPropsType,
  PublishersType,
} from "modules/Announcements/types/Types";
import api from "Services/Api";

export default function AboutAnnouncement({
  formData,
  setFormData,
}: ComponentPropsType) {
  const [publishers, setPublishers] = useState<any>();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | any>
  ) => {
    const { name, type, value, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  useEffect(() => {
    const getPublishers = async () => {
      const response = await api.get("/publishers/list");
      setPublishers(response.data.publishers || []); // Handle potential undefined data
    };

    getPublishers();
  }, []);

  return (
    <div className="container bg-white p-7">
      <h2 className="font-semibold text-[32px] text-primary">
        Bizga e'loningiz haqida gapirib bering
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-16 mt-7">
        <FormContainer>
          <Label htmlFor="title">Kitob nomini kiriting*</Label>

          <TextInput
            name="title"
            value={formData.title}
            placeholder="Kitob nomi"
            onChange={handleInputChange}
            required
          />
        </FormContainer>

        <FormContainer>
          <Label htmlFor="category_id">Kategoriya</Label>

          <TextInput
            name="category_id"
            value={formData.category_id}
            placeholder="Kategoriya"
            onChange={handleInputChange}
            required
          />
        </FormContainer>

        <FormContainer>
          <Label htmlFor="author_id">Kitob muallifini kiriting*</Label>

          <TextInput
            name="author_id"
            value={formData.author_id}
            placeholder="Muallif"
            onChange={handleInputChange}
            required
          />
        </FormContainer>

        <FormContainer>
          <Label htmlFor="shitrix_code">Kitob IDsini kiriting*</Label>

          <TextInput
            type="number"
            name="shitrix_code"
            value={formData.shitrix_code}
            placeholder="ID"
            onChange={handleInputChange}
            required
          />

          <div className="flex gap-2 items-center mt-2">
            <input
              type="checkbox"
              name="bookCondition"
              id="bookCondition"
              checked={formData.bookCondition}
              onChange={handleInputChange}
              className="size-5"
            />

            <label
              htmlFor="bookCondition"
              className="font-light text-xl font-Inter text-primary"
            >
              Xalqaro kitob
            </label>
          </div>
        </FormContainer>

        <FormContainer>
          <Label htmlFor="language_id">Kitob tili*</Label>

          <select
            name="language_id"
            id="language_id"
            className="form_input"
            value={formData.language_id}
            onChange={handleInputChange}
            required
          >
            <option value="" disabled>
              Til
            </option>

            <option value="uzbek">Uzbek</option>
            <option value="english">English</option>
            <option value="russian">Russian</option>
          </select>
        </FormContainer>

        <FormContainer>
          <Label htmlFor="writing_type">Yozuv turi*</Label>

          <select
            name="writing_type"
            id="writing_type"
            className="form_input"
            value={formData.writing_type}
            onChange={handleInputChange}
            required
          >
            <option value="" disabled>
              Yozuv
            </option>

            <option value="latin">Latin</option>
            <option value="cyrillic">Cyrillic</option>
          </select>
        </FormContainer>

        <FormContainer>
          <Label htmlFor="translator_id">Kitob tarjimonini kiriting*</Label>

          <TextInput
            name="translator_id"
            value={formData.translator_id}
            placeholder="Tarjimon"
            onChange={handleInputChange}
            required
          />
        </FormContainer>

        <FormContainer>
          <Label htmlFor="total_pages">Kitob sahifasi kiriting*</Label>

          <TextInput
            type="number"
            name="total_pages"
            value={formData.total_pages}
            placeholder="e.g 345"
            onChange={handleInputChange}
            required
          />
        </FormContainer>

        <FormContainer>
          <Label htmlFor="publisher_id">Nashriyotni kiriting*</Label>
          <select
            name="publisher_id"
            id="publisher_id"
            className="form_input"
            value={formData.publisher_id}
            onChange={handleInputChange}
            required
          >
            <option value="" disabled>
              Nashriyot
            </option>

            {publishers.map((publisher: PublishersType) => (
              <option key={publisher.id} value={publisher.id}>
                {publisher.name}
              </option>
            ))}
          </select>
        </FormContainer>

        <FormContainer>
          <Label htmlFor="published_year">Kitob yili*</Label>

          <TextInput
            type="date"
            name="published_year"
            value={formData.published_year}
            onChange={handleInputChange}
            required
          />
        </FormContainer>

        <FormContainer>
          <Label htmlFor="price">Kitob narxi*</Label>

          <div className="grid grid-cols-6 gap-2">
            <TextInput
              type="number"
              name="price"
              value={formData.price}
              placeholder="Narx"
              onChange={handleInputChange}
              required
              className="col-span-4 lg:col-span-5 form_input"
            />

            <select
              className="form_input px-2 col-span-2 lg:col-span-1"
              value={formData.bookCurrency}
              name="bookCurrency"
              id="bookCurrency"
              onChange={handleInputChange}
              required
            >
              <option value="UZS">UZS</option>
              <option value="USD">USD</option>
            </select>
          </div>
        </FormContainer>

        <FormContainer>
          <Label htmlFor="cover_format">Qog'oz formatini kiriting*</Label>

          <select
            className="form_input"
            name="cover_format"
            id="cover_format"
            required
            value={formData.cover_format}
            onChange={handleInputChange}
          >
            <option value="" disabled>
              Qog'oz formati
            </option>

            <option value="A4">A4</option>
            <option value="A5">A5</option>
          </select>
        </FormContainer>

        <FormContainer>
          <Label htmlFor="cover_type">Kitob muqovasini tanlang*</Label>

          <select
            className="form_input"
            name="cover_type"
            id="cover_type"
            required
            value={formData.cover_type}
            onChange={handleInputChange}
          >
            <option value="" disabled>
              Muqova
            </option>

            <option value="soft">Soft</option>
            <option value="hard">Hard</option>
          </select>
        </FormContainer>

        <FormContainer>
          <Label htmlFor="is_new">Holati</Label>
          <select
            className="form_input"
            name="is_new"
            id="is_new"
            required
            value={formData.is_new.toString()}
            onChange={handleInputChange}
          >
            <option value="" disabled>
              Holati
            </option>

            <option value="true">Yangi</option>
            <option value="false">Eski</option>
          </select>
        </FormContainer>
      </div>
    </div>
  );
}
