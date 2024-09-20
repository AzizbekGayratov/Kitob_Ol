import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useState } from "react";
import SliderForPrice from "./components/SliderForPrice";

export default function VacancyFilter() {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [graphic, setGraphic] = useState("");
  const [who, setWho] = useState("");
  const [work, setWork] = useState("");
  const [region, setRegion] = useState("");
  const [value, setValue] = useState<number[]>([25, 75]);

  function submitData() {
    console.log({ name, type, graphic, who, work, region, value });
    setName("");
    setType("");
    setGraphic("");
    setWho("");
    setWork("");
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
            label="Ish nomini kiriting"
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
            sx={{ backgroundColor: "rgba(44, 48, 51,0.1)", border: "none" }}
            fullWidth
          />
          <FormControl
            fullWidth
            sx={{ backgroundColor: "rgba(44, 48, 51,0.1)" }}
          >
            <InputLabel id="books-type-select-label">
              Mashg’ulot turi
            </InputLabel>
            <Select
              labelId="books-type-select-label"
              id="books-type-select"
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <MenuItem value={"Dasturlash"}>Dasturlash</MenuItem>
              <MenuItem value={"Ustozlik"}>Ustozlik</MenuItem>
            </Select>
          </FormControl>
          <FormControl
            fullWidth
            sx={{ backgroundColor: "rgba(44, 48, 51,0.1)" }}
          >
            <InputLabel id="books-graphic-select-label">Ish tarzi</InputLabel>
            <Select
              labelId="books-graphic-select-label"
              id="books-graphic-select"
              value={graphic}
              //   label="Kategoriya"
              onChange={(e) => setGraphic(e.target.value)}
            >
              <MenuItem value={"Onlayn"}>Onlayn</MenuItem>
              <MenuItem value={"Part-time"}>Part time</MenuItem>
              <MenuItem value={"Full-time"}>Full time</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="flex flex-col sm:gap-7 gap-2">
          <FormControl
            fullWidth
            sx={{ backgroundColor: "rgba(44, 48, 51,0.1)" }}
          >
            <InputLabel id="books-who-select-label">Kimsiz</InputLabel>
            <Select
              labelId="books-who-select-label"
              id="books-who-select"
              value={who}
              onChange={(e) => setWho(e.target.value)}
            >
              <MenuItem value={"Web developer"}>Web Developer</MenuItem>
              <MenuItem value={"Mentor"}>Ustoz</MenuItem>
              <MenuItem value={"Boshqa"}>Boshqa</MenuItem>
            </Select>
          </FormControl>
          <SliderForPrice value={value} setValue={setValue} />
        </div>
        <div className="flex flex-col sm:gap-[34px] gap-2">
          <FormControl
            fullWidth
            sx={{ backgroundColor: "rgba(44, 48, 51,0.1)" }}
          >
            <InputLabel id="books-ish-select-label">Ish turi</InputLabel>
            <Select
              labelId="books-ish-select-label"
              id="books-ish-select"
              value={work}
              onChange={(e) => setWork(e.target.value)}
            >
              <MenuItem value={"mentor"}>Ustozlik</MenuItem>
              <MenuItem value={"developer"}>Dasturlchilik</MenuItem>
              <MenuItem value={"other"}>Boshqa</MenuItem>
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
