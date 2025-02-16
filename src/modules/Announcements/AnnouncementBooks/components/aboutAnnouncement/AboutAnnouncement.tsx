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
import { AuthorCreate, TranslatorCreate } from "./components";
import { safeParse } from "lib/utils";


export default function AboutAnnouncement({
  formData,
  setFormData,
}: ComponentPropsType) {
  const [publishers, setPublishers] = useState<PublishersType[]>([]);
  const [categories, setCategories] = useState<BookCategoriesType[]>([]);
  const [authors, setAuthors] = useState<BookAuthorsType[]>([]);
  const [translators, setTranslators] = useState<BookTranslatorsType[]>([]);
  const [languages, setLanguages] = useState<BookLanguagesType[]>([]);

  const cashedPublishers = safeParse(sessionStorage.getItem("publishers"));
  const cashedCategories = safeParse(sessionStorage.getItem("categories"));
  const cashedAuthors = safeParse(sessionStorage.getItem("authors"));
  const cashedTranslators = safeParse(sessionStorage.getItem("translators"));
  const cashedLanguages = safeParse(sessionStorage.getItem("languages"));

  const [publishersList, setPublishersList] =
    useState<PublishersType[]>(cashedPublishers);
  const [categoriesList, setCategoriesList] =
    useState<BookCategoriesType[]>(cashedCategories);
  const [authorsList, setAuthorsList] =
    useState<BookAuthorsType[]>(cashedAuthors);
  const [translatorsList, setTranslatorsList] =
    useState<BookTranslatorsType[]>(cashedTranslators);
  const [languagesList, setLanguagesList] =
    useState<BookLanguagesType[]>(cashedLanguages);

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

  const handleAdditionOfCreatedProp = (name: string, id: string) =>
    setFormData({
      ...formData,
      [name]: id,
    });

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (publishersList.length === 0) {
          const publishersRes = await api.get("/publishers/list");
          setPublishersList(publishersRes.data.publishers || []);
          window.sessionStorage.setItem(
            "publishers",
            JSON.stringify(publishersRes.data.publishers)
          );
        }

        if (categoriesList.length === 0) {
          const categoriesRes = await api.get("/categories/list");
          setCategoriesList(categoriesRes.data.categories || []);
          window.sessionStorage.setItem(
            "categories",
            JSON.stringify(categoriesRes.data.categories)
          );
        }

        if (authorsList.length === 0) {
          const authorsRes = await api.get("/authors/list");
          setAuthorsList(authorsRes.data.authors || []);
          window.sessionStorage.setItem(
            "authors",
            JSON.stringify(authorsRes.data.authors)
          );
        }

        if (translatorsList.length === 0) {
          const translatorsRes = await api.get("/translators/list");
          setTranslatorsList(translatorsRes.data.translators || []);
          window.sessionStorage.setItem(
            "translators",
            JSON.stringify(translatorsRes.data.translators)
          );
        }

        if (languagesList.length === 0) {
          const languagesRes = await api.get("/languages/list");
          setLanguagesList(languagesRes.data.languages || []);
          window.sessionStorage.setItem(
            "languages",
            JSON.stringify(languagesRes.data.languages)
          );
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [language]);

  useEffect(() => {
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

    const parsedCategories = parseNames(categoriesList, "Categories");
    const parsedLanguages = parseNames(languagesList, "Languages");

    setPublishers(publishersList);
    setTranslators(translatorsList);
    setAuthors(authorsList);
    setCategories(parsedCategories);
    setLanguages(parsedLanguages);
  }, [
    language,
    publishersList,
    categoriesList,
    authorsList,
    translatorsList,
    languagesList,
  ]);

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

        {/*  */}
        <FormContainer>
          <Label htmlFor="author_id">
            {language === "uz"
              ? "Kitob muallifini kiriting*"
              : language === "ru"
              ? "Введите автора книги*"
              : "Enter the author of the book*"}
          </Label>
          <AuthorCreate
            handleInputChange={handleInputChange}
            handleAdditionOfCreatedProp={handleAdditionOfCreatedProp}
            authors={authors}
            value={formData.author_id}
            list={translatorsList}
            setList={setTranslatorsList}
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
            {language === "uz"
              ? "Kitob tili*"
              : language === "ru"
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
            {language === "uz"
              ? "Yozuv turi*"
              : language === "ru"
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

        {/*  */}
        <FormContainer>
          <Label htmlFor="translator_id">
            {language === "uz"
              ? "Kitob tarjimonini kiriting*"
              : language
              ? "Введите переводчика книги*"
              : "Enter the translator of the book*"}
          </Label>

          <TranslatorCreate
            handleInputChange={handleInputChange}
            handleAdditionOfCreatedProp={handleAdditionOfCreatedProp}
            translators={translators}
            value={formData.translator_id}
            list={translatorsList}
            setList={setTranslatorsList}
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
