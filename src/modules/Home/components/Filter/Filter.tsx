import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useState } from "react";
import SliderForPrice from "./components/SliderForPrice";

export default function Filter() {
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");
  const [nashriyot, setNashriyot] = useState("");
  const [language, setLanguage] = useState("");
  const [region, setRegion] = useState("");
  const [value, setValue] = useState<number[]>([25, 75]);

  function submitData() {
    console.log({ name, author, category, nashriyot, language, region, value });
    setName("");
    setAuthor("");
    setCategory("");
    setNashriyot("");
    setLanguage("");
    setRegion("");
    setValue([25, 75]);
  }

  return (
    <div className="bg-white rounded p-3 sm:p-5 lg:pl-10 lg:pr-[100px] mb-20 lg:pt-[35px] lg:pb-[60px]">
      <h2 className="text-[28px] font-medium leading-[34px] mb-10">Filter</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          submitData();
        }}
        className="grid sm:grid-cols-3 grid-cols-1 lg:gap-20 sm:gap-6 gap-2"
      >
        <div className="flex flex-col sm:gap-[34px] gap-2">
          <TextField
            label="Kitob nomini kiriting"
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
            sx={{ backgroundColor: "rgba(44, 48, 51,0.1)", border: "none" }}
            fullWidth
          />
          <TextField
            label="Kitob muallifi kiriting"
            variant="outlined"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            sx={{ backgroundColor: "rgba(44, 48, 51,0.1)", border: "none" }}
            fullWidth
          />
          <FormControl
            fullWidth
            sx={{ backgroundColor: "rgba(44, 48, 51,0.1)" }}
          >
            <InputLabel id="books-category-select-label">Kategoriya</InputLabel>
            <Select
              labelId="books-category-select-label"
              id="books-category-select"
              value={category}
              //   label="Kategoriya"
              onChange={(e) => setCategory(e.target.value)}
            >
              <MenuItem value={"Badiiy"}>Badiiy</MenuItem>
              <MenuItem value={"Roman"}>Roman</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="flex flex-col sm:gap-7 gap-2">
          <FormControl
            fullWidth
            sx={{ backgroundColor: "rgba(44, 48, 51,0.1)" }}
          >
            <InputLabel id="books-nashriyot-select-label">Nashriyot</InputLabel>
            <Select
              labelId="books-nashriyot-select-label"
              id="books-nashriyot-select"
              value={nashriyot}
              onChange={(e) => setNashriyot(e.target.value)}
            >
              <MenuItem value={"Azon"}>Azon</MenuItem>
              <MenuItem value={"Qamar"}>Qamar</MenuItem>
              <MenuItem value={"Hilol nashr"}>Hilol nashr</MenuItem>
            </Select>
          </FormControl>
          <SliderForPrice value={value} setValue={setValue} />
        </div>
        <div className="flex flex-col sm:gap-[34px] gap-2">
          <FormControl
            fullWidth
            sx={{ backgroundColor: "rgba(44, 48, 51,0.1)" }}
          >
            <InputLabel id="books-til-select-label">Til</InputLabel>
            <Select
              labelId="books-til-select-label"
              id="books-til-select"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            >
              <MenuItem value={"uzb"}>Uzbek tili</MenuItem>
              <MenuItem value={"rus"}>Rus tili</MenuItem>
              <MenuItem value={"eng"}>Ingliz tili</MenuItem>
            </Select>
          </FormControl>
          <TextField
            label="Manzil"
            sx={{ backgroundColor: "rgba(44, 48, 51,0.1)" }}
            variant="outlined"
            value={region}
            onChange={(e) => setRegion(e.target.value)}
            fullWidth
          />
          <button
            className="text-white hover:bg-opacity-80 transition-opacity w-full text-center py-4 bg-primary rounded text-[20px] leading-[24px]"
            type="submit"
          >
            Qidirish
          </button>
        </div>
      </form>
    </div>
  );
}
