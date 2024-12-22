import React, { useEffect, useState } from "react";
import Label from "../../../components/label/Label";
import TextInput from "../../../components/textInput/TextInput";
import FormContainer from "../../../components/formContainer/FormContainer";
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
import SelectInput from "modules/Announcements/components/selectInput/SelectInput";
import { customDatas } from "../../../CustomData";

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
              const parsedNames = item.name;
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

          <SelectInput
            name="category_id"
            id="category_id"
            value={formData.category_id}
            onChange={handleInputChange}
            defaultValue="Kategoriya"
            options={categories}
          />
        </FormContainer>

        <FormContainer>
          <Label htmlFor="author_id">Kitob muallifini kiriting*</Label>

          <SelectInput
            name="author_id"
            id="author_id"
            value={formData.author_id}
            onChange={handleInputChange}
            defaultValue="Muallif"
            options={authors}
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

          <SelectInput
            name="language_id"
            id="language_id"
            value={formData.language_id}
            onChange={handleInputChange}
            defaultValue="Til"
            options={languages}
          />
        </FormContainer>

        <FormContainer>
          <Label htmlFor="writing_type">Yozuv turi*</Label>

          <SelectInput
            name="writing_type"
            id="writing_type"
            value={formData.writing_type}
            onChange={handleInputChange}
            defaultValue="Yozuv"
            options={customDatas.writing_type}
          />
        </FormContainer>

        <FormContainer>
          <Label htmlFor="translator_id">Kitob tarjimonini kiriting*</Label>

          <SelectInput
            name="translator_id"
            id="translator_id"
            onChange={handleInputChange}
            value={formData.translator_id}
            defaultValue="Tarjimon"
            options={translators}
          />
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

          <SelectInput
            name="publisher_id"
            id="publisher_id"
            onChange={handleInputChange}
            value={formData.publisher_id}
            defaultValue="Nashriyot"
            options={publishers}
          />
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
              className="col-span-6 lg:col-span-6 form_input"
            />
          </div>
        </FormContainer>

        <FormContainer>
          <Label htmlFor="cover_format">Qog'oz formatini tanlang*</Label>

          <SelectInput
            name="cover_format"
            id="cover_format"
            value={formData.cover_format}
            onChange={handleInputChange}
            defaultValue="Qog'oz formati"
            options={customDatas.cover_format}
          />
        </FormContainer>

        <FormContainer>
          <Label htmlFor="cover_type">Qog'oz muqovasini tanlang*</Label>

          <SelectInput
            name="cover_type"
            id="cover_type"
            value={formData.cover_type}
            onChange={handleInputChange}
            defaultValue="Muqova"
            options={customDatas.cover_type}
          />
        </FormContainer>

        <FormContainer>
          <Label htmlFor="is_new">Holati*</Label>

          <SelectInput
            name="is_new"
            id="is_new"
            value={formData.is_new}
            onChange={handleInputChange}
            defaultValue="Holati"
            options={customDatas.is_new}
          />
        </FormContainer>
      </div>
    </div>
  );
}
