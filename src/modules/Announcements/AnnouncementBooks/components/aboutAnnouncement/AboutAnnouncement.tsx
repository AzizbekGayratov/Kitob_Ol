import React from "react";
import Label from "./components/label/Label";
import TextInput from "./components/textInput/TextInput";
import FormContainer from "./components/formContainer/FormContainer";
import { ComponentPropsType } from "modules/Announcements/types/Types";

export default function AboutAnnouncement({
  formData,
  setFormData,
}: ComponentPropsType) {
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

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
              name="is_new"
              id="is_new"
              checked={formData.is_new}
              onChange={handleInputChange}
              className="size-5"
            />

            <label
              htmlFor="is_new"
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

            <option value="nashriyot1">Nashriyot 1</option>
            <option value="nashriyot2">Nashriyot 2</option>
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
          <Label htmlFor="bookCondition">Holati</Label>

          <select
            className="form_input"
            name="bookCondition"
            id="bookCondition"
            required
            value={formData.bookCondition}
            onChange={handleInputChange}
          >
            <option value="" disabled>
              Holati
            </option>

            <option value="yangi">Yangi</option>
            <option value="eski">Eski</option>
          </select>
        </FormContainer>
      </div>
    </div>
  );
}

/* 
import React from "react";
import Label from "./components/label/Label";
import TextInput from "./components/textInput/TextInput";
import FormContainer from "./components/formContainer/FormContainer";
import { ComponentPropsType } from "modules/Announcements/types/Types";

export default function AboutAnnouncement({
  formData,
  setFormData,
}: ComponentPropsType) {
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="container bg-white p-4">
      <h2 className="font-semibold text-[32px] text-primary">
        Bizga e'loningiz haqida gapirib bering
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-16 mt-7">
        <FormContainer>
          <Label htmlFor="bookName">Kitob nomini kiriting*</Label>

          <TextInput
            name="bookName"
            value={formData.bookName}
            placeholder="Kitob nomi"
            onChange={handleInputChange}
            required
          />
        </FormContainer>

        <FormContainer>
          <Label htmlFor="bookCategory">Kategoriya</Label>

          <TextInput
            name="bookCategory"
            value={formData.bookCategory}
            placeholder="Kategoriya"
            onChange={handleInputChange}
            required
          />
        </FormContainer>

        <FormContainer>
          <Label htmlFor="bookAuthor">Kitob muallifini kiriting*</Label>

          <TextInput
            name="bookAuthor"
            value={formData.bookAuthor}
            placeholder="Muallif"
            onChange={handleInputChange}
            required
          />
        </FormContainer>

        <FormContainer>
          <Label htmlFor="bookID">Kitob IDsini kiriting*</Label>

          <TextInput
            type="number"
            name="bookID"
            value={formData.bookID}
            placeholder="ID"
            onChange={handleInputChange}
            required
          />

          <div className="flex gap-2 items-center mt-2">
            <input
              type="checkbox"
              name="isInternationalBook"
              id="internationalBook"
              checked={formData.isInternationalBook}
              onChange={handleInputChange}
              className="size-5"
            />

            <label
              htmlFor="internationalBook"
              className="font-light text-xl font-Inter text-primary"
            >
              Xalqaro kitob
            </label>
          </div>
        </FormContainer>

        <FormContainer>
          <Label htmlFor="selectedBookLanguage">Kitob tili*</Label>

          <select
            name="selectedBookLanguage"
            id="selectedBookLanguage"
            className="form_input"
            value={formData.selectedBookLanguage}
            onChange={handleInputChange}
            required
          >
            <option value="" disabled>
              Til
            </option>

            <option value="uzbek">O’zbek</option>
            <option value="russian">Rus tili</option>
          </select>
        </FormContainer>

        <FormContainer>
          <Label htmlFor="selectedTextType">Yozuv turi*</Label>

          <select
            name="selectedTextType"
            id="selectedTextType"
            className="form_input"
            value={formData.selectedTextType}
            onChange={handleInputChange}
            required
          >
            <option value="" disabled>
              Yozuv
            </option>

            <option value="drama">Drama</option>
            <option value="fantastika">Fantastika</option>
            <option value="nashr">Nashr</option>
          </select>
        </FormContainer>

        <FormContainer>
          <Label htmlFor="bookTranslator">Kitob tarjimonini kiriting*</Label>

          <TextInput
            name="bookTranslator"
            value={formData.bookTranslator}
            placeholder="Tarjimon"
            onChange={handleInputChange}
            required
          />
        </FormContainer>

        <FormContainer>
          <Label htmlFor="bookPages">Kitob sahifasi kiriting*</Label>

          <TextInput
            type="number"
            name="bookPages"
            value={formData.bookPages}
            placeholder="e.g 345"
            onChange={handleInputChange}
            required
          />
        </FormContainer>

        <FormContainer>
          <Label htmlFor="bookPublisher">Nashriyotni kiriting*</Label>

          <select
            name="bookPublisher"
            id="bookPublisher"
            className="form_input"
            value={formData.bookPublisher}
            onChange={handleInputChange}
            required
          >
            <option value="" disabled>
              Nashriyot
            </option>

            <option value="nashriyot1">Nashriyot 1</option>
            <option value="nashriyot2">Nashriyot 2</option>
            <option value="nashriyot3">Nashriyot 3</option>
          </select>
        </FormContainer>

        <FormContainer>
          <Label htmlFor="bookYear">Kitob yili*</Label>

          <TextInput
            type="number"
            placeholder="Yili"
            name="bookYear"
            value={formData.bookYear}
            onChange={handleInputChange}
            required
          />
        </FormContainer>

        <FormContainer>
          <Label htmlFor="bookPrice">Kitob narxi*</Label>

          <div className="grid grid-cols-6 gap-2">
            <TextInput
              type="number"
              name="bookPrice"
              value={formData.bookPrice}
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
          <Label htmlFor="paperFormat">Qog'oz formatini kiriting*</Label>

          <select
            className="form_input"
            name="paperFormat"
            id="paperFormat"
            required
            value={formData.paperFormat}
            onChange={handleInputChange}
          >
            <option value="" disabled>
              Qog'oz formati
            </option>

            <option value="a4">A4</option>
            <option value="a5">A5</option>
          </select>
        </FormContainer>

        <FormContainer>
          <Label htmlFor="bookCover">Kitob muqovasini tanlang*</Label>

          <select
            className="form_input"
            name="bookCover"
            id="bookCover"
            required
            value={formData.bookCover}
            onChange={handleInputChange}
          >
            <option value="" disabled>
              Muqova
            </option>

            <option value="muqova1">Muqova 1</option>
            <option value="muqova2">Muqova 2</option>
          </select>
        </FormContainer>

        <FormContainer>
          <Label htmlFor="bookCondition">Holati</Label>

          <select
            className="form_input"
            name="bookCondition"
            id="bookCondition"
            required
            value={formData.bookCondition}
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
*/
