import { Slider, TextField } from "@mui/material";
import { useLocation } from "react-router-dom";
import { FilterType, VacancyProps } from "../FilterTypes";
import { useSelector } from "react-redux";
import { languagesType } from "../Filter";

interface Props {
  value: FilterType | VacancyProps;
  setValue: React.Dispatch<React.SetStateAction<FilterType | VacancyProps>>;
}

export default function SliderForPrice({ value, setValue }: Props) {
  const { language } = useSelector(
    (state: { language: { language: languagesType } }) => state.language
  );
  const forBook =
    language === "uz" ? "Narxi" : language === "ru" ? "Цена" : "Price";
  const forVacancy =
    language === "uz" ? "Maosh" : language === "ru" ? "Зарплата" : "Salary";

  const location = useLocation();
  return (
    <div>
      <p className="text-[13px] leading-[16px] text-primary mb-2">
        {location.pathname === "/" ? forBook : forVacancy}
      </p>
      <Slider
        getAriaLabel={() => "Temperature range"}
        value={value.value}
        onChange={(_, newValue) => {
          // setValue(newValue as number[]);
          setValue({ ...value, value: newValue as number[] });
        }}
        valueLabelDisplay="auto"
        getAriaValueText={(value) => `${value} 000`}
        sx={{
          "& .MuiSlider-thumb": {
            width: 30,
            height: 30,
            backgroundColor: "#E8EAEC",
            border: "4px solid rgb(28, 45, 63)",
          },
          "& .MuiSlider-track": {
            height: 5,
            border: "1px solid rgb(28, 45, 63)",
            background: "rgb(28, 45, 63)",
          },
          "& .MuiSlider-rail": {
            height: 4,
            backgroundColor: "#E8EAEC",
          },
        }}
      />
      <div className="grid grid-cols-2 mt-5">
        <TextField
          value={`${new Intl.NumberFormat("en-US", {
            useGrouping: true,
          }).format(value.value[0] * 50000)} so'm`}
          // onChange={(e) => {
          //   setValue({
          //     ...value,
          //     value: [Number(e.target.value), value.value[1]],
          //   });
          // }}
          variant="outlined"
          sx={{ backgroundColor: "#E9E9E9", border: "none" }}
          disabled
        />
        <TextField
          value={`${new Intl.NumberFormat("en-US", {
            useGrouping: true,
          }).format(value.value[1] * 50000)} so'm`}
          // onChange={(e) => {
          //   setValue({
          //     ...value,
          //     value: [value.value[0], Number(e.target.value)],
          //   });
          // }}
          variant="outlined"
          sx={{ backgroundColor: "#E9E9E9", border: "none" }}
          disabled
        />
      </div>
    </div>
  );
}
