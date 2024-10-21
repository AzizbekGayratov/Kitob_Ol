import React, { useEffect, useState } from "react";
import Label from "./components/label/Label";
import TextInput from "./components/textInput/TextInput";
import FormContainer from "./components/formContainer/FormContainer";
import {
  BookAuthorsType,
  BookCategoriesType,
  BookLanguagesType,
  BookTranslatorsType,
  ComponentPropsType,
  languagesType,
  PublishersType,
} from "modules/Announcements/types/Types";
import api from "Services/Api";
import { useSelector } from "react-redux";

export default function AboutAnnouncement({
  formData,
  setFormData,
}: ComponentPropsType) {
  const [publishers, setPublishers] = useState<PublishersType[]>([]);
  const [categories, setCategories] = useState<BookCategoriesType[]>([]);
  const [authors, setAuthors] = useState<BookAuthorsType[]>([]);
  const [translators, setTranslators] = useState<BookTranslatorsType[]>([]);
  const [languages, setLanguages] = useState<BookLanguagesType[]>([]);

  const { language } = useSelector(
    (state: { language: { language: languagesType } }) => state.language
  );

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, type, value } = e.target;

    const inputValue =
      type === "checkbox" ? (e.target as HTMLInputElement).checked : value;

    setFormData({
      ...formData,
      [name]: inputValue,
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const publishersRes = await api.get("/publishers/list");
        const translatorsRes = await api.get("/translators/list");
        const categoriesRes = await api.get("/categories/list");
        const authorsRes = await api.get("/authors/list");
        const languagesRes = await api.get("/languages/list");

        const parseNames = (items: any[], key: string) => {
          return (
            items &&
            items.map((item: any) => {
              const parsedNames = item.name; // item.name is already an object, no need to parse
              return {
                ...item,
                name: parsedNames[language] || `Unknown ${key}`,
              };
            })
          );
        };

        const parsedCategories = parseNames(
          categoriesRes?.data?.Categories?.categories || [],
          "Categories"
        );

        const parsedLanguages = parseNames(
          languagesRes?.data?.languages?.languages || [],
          "Languages"
        );

        setPublishers(publishersRes.data.publishers || []);
        setTranslators(translatorsRes.data.translators || []);
        setAuthors(authorsRes.data.authors || []);
        setCategories(parsedCategories);
        setLanguages(parsedLanguages);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchData();
  }, [language]);

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

          <select
            name="category_id"
            id="category_id"
            className="form_input"
            value={formData.category_id}
            onChange={handleInputChange}
            required
          >
            <option value="" disabled>
              Kategoriya
            </option>

            {categories.map((category: BookCategoriesType) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </FormContainer>

        <FormContainer>
          <Label htmlFor="author_id">Kitob muallifini kiriting*</Label>

          <select
            name="author_id"
            id="author_id"
            className="form_input"
            value={formData.author_id}
            onChange={handleInputChange}
            required
          >
            <option value="" disabled>
              Muallif
            </option>

            {authors.map((author) => (
              <option key={author.id} value={author.id}>
                {author.name} {author.surname}
              </option>
            ))}
          </select>
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

            {languages.map((lang) => (
              <option key={lang.id} value={lang.id}>
                {lang.name}
              </option>
            ))}
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

          <select
            name="translator_id"
            id="translator_id"
            onChange={handleInputChange}
            value={formData.translator_id}
            className="form_input"
            required
          >
            <option value="" disabled>
              Tarjimon
            </option>

            {translators.map((translator: BookTranslatorsType) => (
              <option key={translator.id} value={translator.id}>
                {translator.name} {translator.surname}
              </option>
            ))}
          </select>
        </FormContainer>

        <FormContainer>
          <Label htmlFor="total_pages">Kitob sahifasi kiriting*</Label>

          <TextInput
            type="number"
            name="total_pages"
            value={
              formData.total_pages !== null
                ? formData.total_pages.toString()
                : ""
            }
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
            onChange={handleInputChange}
            value={formData.publisher_id}
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
              value={formData.price !== null ? formData.price.toString() : ""}
              placeholder="Narx"
              onChange={handleInputChange}
              required
              className="col-span-4 lg:col-span-5 form_input"
            />

            <select
              className="form_input px-2 col-span-2 lg:col-span-1"
              name="bookCurrency"
              id="bookCurrency"
              required
            >
              <option value="UZS">UZS</option>
              <option value="USD">USD</option>
            </select>
          </div>
        </FormContainer>

        <FormContainer>
          <Label htmlFor="cover_format">Qog'oz formatini tanlang*</Label>

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
          <Label htmlFor="cover_type">Qog'oz muqovasini tanlang*</Label>

          <select
            className="form_input"
            name="cover_type"
            id="cover_type"
            value={formData.cover_type}
            onChange={handleInputChange}
            required
          >
            <option value="" disabled>
              Muqova
            </option>

            <option value="soft">Soft</option>
            <option value="hard">Hard</option>
          </select>
        </FormContainer>

        <FormContainer>
          <Label htmlFor="is_new">Holati*</Label>

          <select
            className="form_input"
            name="is_new"
            id="is_new"
            required
            value={
              formData.is_new === true
                ? "true"
                : formData.is_new === false
                ? "false"
                : ""
            }
            onChange={(e) => {
              setFormData({
                ...formData,
                is_new: e.target.value === "true",
              });
            }}
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
