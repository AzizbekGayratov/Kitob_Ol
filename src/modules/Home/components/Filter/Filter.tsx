import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useEffect, useState } from "react";
import SliderForPrice from "./components/SliderForPrice";
import {
  CategoryType,
  FilterType,
  LanguageProps,
  PublisherType,
} from "./FilterTypes";
import { useDispatch, useSelector } from "react-redux";
// import useGetList from "Hooks/UseGetList/UseGetList";
import UseGetList from "Hooks/UseGetList/UseGetList";
import LocationSelect from "Components/Common/LocationSelect/LocationSelect";
import { setState } from "Store/FilterSlice/bookFilterSlice";

export type languagesType = "uz" | "ru" | "en";

export default function Filter() {
  const [data, setData] = useState<FilterType>({
    name: "",
    author: "",
    category: "",
    nashriyot: "",
    language: "",
    city_id: "",
    district_id: "",
    value: [25, 75],
  });
  const { language } = useSelector(
    (state: { language: { language: languagesType } }) => state.language
  );
  const bookFilter = useSelector((state: any) => state.bookFilter);
  const dispatch = useDispatch();

  const [categoriesList, setCategoriesList] = useState<CategoryType[]>([]);
  const [publishersList, setPublishersList] = useState<PublisherType[]>([]);
  const [languagesList, setLanguagesList] = useState<LanguageProps[]>([]);
  const [authorsList, setAuthorsList] = useState<any[]>([]);

  useEffect(() => {
    UseGetList("/categories/list").then((res) => {
      setCategoriesList(res.Categories.categories);
    });
    UseGetList("/publishers/list").then((res) => {
      setPublishersList(res.publishers);
    });
    UseGetList("/languages/list").then((res) => {
      setLanguagesList(res.languages.languages);
    });
    UseGetList("/authors/list").then((res) => {
      setAuthorsList(res.authors);
    });
  }, []);

  function submitData() {
    dispatch(
      setState({
        ...bookFilter,
        title: data.name,
        price_from: data.value[0] * 1000,
        price_to: data.value[1] * 1000,
        author_id: data.author,
        category_id: data.category,
        publisher_id: data.nashriyot,
        language_id: data.language,
        city_id: data.city_id,
        district_id: data.district_id,
      })
    );

    setData({
      name: "",
      author: "",
      category: "",
      nashriyot: "",
      language: "",
      city_id: "",
      district_id: "",
      value: [25, 75],
    });
  }

  return (
    <div className="bg-white rounded p-3 sm:p-5 lg:pl-10 lg:pr-[100px] mb-20 lg:pt-[35px] lg:pb-[60px]">
      <h2 className="text-[28px] font-medium leading-[34px] mb-10">
        {language === "uz"
          ? "Filtrlash"
          : language === "ru"
          ? "Фильтровать"
          : "Filter"}
      </h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          submitData();
        }}
        className="grid sm:grid-cols-3 grid-cols-1 lg:gap-20 sm:gap-6 gap-2"
      >
        <div className="flex flex-col sm:gap-[34px] gap-2">
          <TextField
            label={
              language === "uz"
                ? "Kitob nomini kiriting"
                : language === "ru"
                ? "Введите название книги"
                : "Enter the title of the book."
            }
            variant="outlined"
            value={data.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
            sx={{ backgroundColor: "rgba(44, 48, 51,0.1)", border: "none" }}
            fullWidth
          />
          <FormControl
            fullWidth
            sx={{ backgroundColor: "rgba(44, 48, 51,0.1)" }}
          >
            <InputLabel id="books-category-select-label">
              {language === "uz"
                ? "Kitob muallifi kiriting"
                : language === "ru"
                ? "Введите автора книги"
                : "Enter the book's author."}
            </InputLabel>
            <Select
              labelId="books-author-select-label"
              id="books-author-select"
              value={data.author}
              //   label="Kategoriya"
              onChange={(e) => setData({ ...data, author: e.target.value })}
            >
              {authorsList?.map((item: any, index: number) => {
                return (
                  <MenuItem key={index} value={item.id}>
                    {item.name} {item.surname}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
          <FormControl
            fullWidth
            sx={{ backgroundColor: "rgba(44, 48, 51,0.1)" }}
          >
            <InputLabel id="books-category-select-label">
              {language === "uz"
                ? "Kategoriya"
                : language === "ru"
                ? "Категория"
                : "Category"}
            </InputLabel>
            <Select
              labelId="books-category-select-label"
              id="books-category-select"
              value={data.category}
              //   label="Kategoriya"
              onChange={(e) => setData({ ...data, category: e.target.value })}
            >
              {categoriesList?.map((item: any, index: number) => {
                return (
                  <MenuItem key={index} value={item.id}>
                    {item.name[language]}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </div>
        <div className="flex flex-col sm:gap-7 gap-2">
          <FormControl
            fullWidth
            sx={{ backgroundColor: "rgba(44, 48, 51,0.1)" }}
          >
            <InputLabel id="books-nashriyot-select-label">
              {language === "uz"
                ? "Nashriyot"
                : language === "ru"
                ? "Издательство"
                : "Publisher"}
            </InputLabel>
            <Select
              labelId="books-nashriyot-select-label"
              id="books-nashriyot-select"
              value={data.nashriyot}
              onChange={(e) => setData({ ...data, nashriyot: e.target.value })}
            >
              {publishersList?.map((item: any, index: number) => {
                return (
                  <MenuItem key={index} value={item.id}>
                    {item.name}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
          <SliderForPrice value={data} setValue={setData as any} />
        </div>
        <div className="flex flex-col sm:gap-[34px] gap-2">
          <FormControl
            fullWidth
            sx={{ backgroundColor: "rgba(44, 48, 51,0.1)" }}
          >
            <InputLabel id="books-til-select-label">
              {language === "uz"
                ? "Til"
                : language === "ru"
                ? "Язык"
                : "Language"}
            </InputLabel>
            <Select
              labelId="books-til-select-label"
              id="books-til-select"
              value={data.language}
              onChange={(e) => setData({ ...data, language: e.target.value })}
            >
              {languagesList?.map((item: any, index: number) => {
                return (
                  <MenuItem key={index} value={item.id}>
                    {item.name[language]}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
          <LocationSelect
            setSelectedLocation={(location: {
              city_id: string;
              district_id: string;
            }) =>
              setData({
                ...data,
                city_id: location.city_id,
                district_id: location.district_id,
              })
            }
            showTitle={false}
            isForHomePage={true}
          />
          {/* onChange={(e) => setData({ ...data, region: e.target.value })} */}
          <button
            className="text-white hover:bg-opacity-80 transition-opacity w-full text-center py-4 bg-primary rounded text-[20px] leading-[24px]"
            type="submit"
          >
            {language === "uz"
              ? "Qidirish"
              : language === "ru"
              ? "Поиск"
              : "Search"}
          </button>
        </div>
      </form>
    </div>
  );
}
