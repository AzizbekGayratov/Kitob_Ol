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
        {language === "uz"
          ? "Bizga e'loningiz haqida gapirib bering"
          : language === "ru"
          ? "Поделитесь с нами информацией о вашем объявлении"
          : "Share information about your announcement with us"}
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-16 mt-7">
        <FormContainer>
          <Label htmlFor="title">
            {language === "uz"
              ? "Kitob nomini kiriting*"
              : language === "ru"
              ? "Введите название книги*"
              : "Enter the name of the book*"}
          </Label>

          <TextInput
            name="title"
            value={formData.title}
            placeholder={
              language === "uz"
                ? "Kitob nomi"
                : language === "ru"
                ? "Название книги"
                : "Book name"
            }
            onChange={handleInputChange}
            required
          />
        </FormContainer>

        <FormContainer>
          <Label htmlFor="category_id">
            {language === "uz"
              ? "Kategoriya"
              : language === "ru"
              ? "Категория"
              : "Category"}
          </Label>

          <SelectInput
            name="category_id"
            id="category_id"
            value={formData.category_id}
            onChange={handleInputChange}
            defaultValue={
              language === "uz"
                ? "Kategoriya"
                : language === "ru"
                ? "Категория"
                : "Category"
            }
            options={categories}
          />
        </FormContainer>

        <FormContainer>
          <Label htmlFor="author_id">
            {language === "uz"
              ? "Kitob muallifini kiriting*"
              : language === "ru"
              ? "Введите автора книги*"
              : "Enter the author of the book*"}
          </Label>

          <SelectInput
            name="author_id"
            id="author_id"
            value={formData.author_id}
            onChange={handleInputChange}
            defaultValue={
              language === "uz"
                ? "Muallif"
                : language === "ru"
                ? "Автор"
                : "Author"
            }
            options={authors}
          />
        </FormContainer>

        <FormContainer>
          <Label htmlFor="shitrix_code">
            {language === "uz"
              ? "Kitob IDsini kiriting*"
              : language === "ru"
              ? "Введите ID книги*"
              : "Enter the book ID*"}
          </Label>

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
              {language === "uz"
                ? "Xalqaro kitob"
                : language === "ru"
                ? "Международная книга"
                : "International book"}
            </label>
          </div>
        </FormContainer>

        <FormContainer>
          <Label htmlFor="language_id">
            {language
              ? "Kitob tili*"
              : language
              ? "Язык книги*"
              : "Language of the book*"}
          </Label>

          <SelectInput
            name="language_id"
            id="language_id"
            value={formData.language_id}
            onChange={handleInputChange}
            defaultValue={
              language === "uz"
                ? "Til"
                : language === "ru"
                ? "Язык"
                : "Language"
            }
            options={languages}
          />
        </FormContainer>

        <FormContainer>
          <Label htmlFor="writing_type">
            {language
              ? "Yozuv turi*"
              : language
              ? "Тип написания*"
              : "Writing type*"}
          </Label>

          <SelectInput
            name="writing_type"
            id="writing_type"
            value={formData.writing_type}
            onChange={handleInputChange}
            defaultValue={
              language === "uz"
                ? "Yozuv"
                : language === "ru"
                ? "Написание"
                : "Writing"
            }
            options={customDatas.writing_type}
          />
        </FormContainer>

        <FormContainer>
          <Label htmlFor="translator_id">
            {language === "uz"
              ? "Kitob tarjimonini kiriting*"
              : language
              ? "Введите переводчика книги*"
              : "Enter the translator of the book*"}
          </Label>

          <SelectInput
            name="translator_id"
            id="translator_id"
            onChange={handleInputChange}
            value={formData.translator_id}
            defaultValue={
              language === "uz"
                ? "Tarjimon"
                : language === "ru"
                ? "Переводчик"
                : "Translator"
            }
            options={translators}
          />
        </FormContainer>

        <FormContainer>
          <Label htmlFor="total_pages">
            {language === "uz"
              ? "Kitob sahifasi kiriting*"
              : language === "ru"
              ? "Введите страниц книги*"
              : "Enter the number of book pages*"}
          </Label>

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
          <Label htmlFor="publisher_id">
            {language === "uz"
              ? "Nashriyotni kiriting*"
              : language === "ru"
              ? "Введите издательство*"
              : "Enter the publisher*"}
          </Label>

          <SelectInput
            name="publisher_id"
            id="publisher_id"
            onChange={handleInputChange}
            value={formData.publisher_id}
            defaultValue={
              language === "uz"
                ? "Nashriyot"
                : language === "ru"
                ? "Издательство"
                : "Publisher"
            }
            options={publishers}
          />
        </FormContainer>

        <FormContainer>
          <Label htmlFor="published_year">
            {language === "uz"
              ? "Kitob yili*"
              : language === "ru"
              ? "Год издания*"
              : "Year of publication*"}
          </Label>

          <TextInput
            type="date"
            name="published_year"
            value={formData.published_year}
            onChange={handleInputChange}
            required
          />
        </FormContainer>

        <FormContainer>
          <Label htmlFor="price">
            {language === "uz"
              ? "Kitob narxi*"
              : language === "ru"
              ? "Цена книги*"
              : "Price of the book*"}
          </Label>

          <div className="grid grid-cols-6 gap-2">
            <TextInput
              type="number"
              name="price"
              value={formData.price !== null ? formData.price.toString() : ""}
              placeholder={
                language === "uz"
                  ? "Narx"
                  : language === "ru"
                  ? "Цена"
                  : "Price"
              }
              onChange={handleInputChange}
              required
              className="col-span-6 lg:col-span-6 form_input"
            />
          </div>
        </FormContainer>

        <FormContainer>
          <Label htmlFor="cover_format">
            {language === "uz"
              ? "Qog'oz formatini tanlang*"
              : language === "ru"
              ? "Выберите формат обложки*"
              : "Select cover format*"}
          </Label>

          <SelectInput
            name="cover_format"
            id="cover_format"
            value={formData.cover_format}
            onChange={handleInputChange}
            defaultValue={
              language === "uz"
                ? "Qog'oz formati"
                : language === "ru"
                ? "Формат обложки"
                : "Cover format"
            }
            options={customDatas.cover_format}
          />
        </FormContainer>

        <FormContainer>
          <Label htmlFor="cover_type">
            {language === "uz"
              ? "Qog'oz muqovasini tanlang*"
              : language === "ru"
              ? "Выберите тип обложки*"
              : "Select cover type*"}
          </Label>

          <SelectInput
            name="cover_type"
            id="cover_type"
            value={formData.cover_type}
            onChange={handleInputChange}
            defaultValue={
              language === "uz"
                ? "Muqova"
                : language === "ru"
                ? "Тип обложки"
                : "Cover type"
            }
            options={customDatas.cover_type}
          />
        </FormContainer>

        <FormContainer>
          <Label htmlFor="is_new">
            {language === "uz"
              ? "Holati*"
              : language === "ru"
              ? "Статус*"
              : "Status*"}
          </Label>

          <SelectInput
            name="is_new"
            id="is_new"
            value={formData.is_new}
            onChange={handleInputChange}
            defaultValue={
              language === "uz"
                ? "Holati"
                : language === "ru"
                ? "Статус"
                : "Status"
            }
            options={customDatas.is_new}
          />
        </FormContainer>
      </div>
    </div>
  );
}
