import { Slider, TextField } from "@mui/material";
import { useLocation } from "react-router-dom";

interface Props {
  value: number[];
  setValue: (value: number[]) => void;
}

export default function SliderForPrice({ value, setValue }: Props) {
  const location = useLocation();
  return (
    <div>
      <p className="text-[13px] leading-[16px] text-primary mb-2">
        {location.pathname === "/" ? "Narxi" : "Maosh belgilash"}
      </p>
      <Slider
        getAriaLabel={() => "Temperature range"}
        value={value}
        onChange={(_, newValue) => {
          setValue(newValue as number[]);
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
          value={value[0]}
          onChange={(e) => {
            setValue([Number(e.target.value), value[1]]);
          }}
          variant="outlined"
          sx={{ backgroundColor: "#E9E9E9", border: "none" }}
        />
        <TextField
          value={value[1]}
          onChange={(e) => {
            setValue([value[0], Number(e.target.value)]);
          }}
          variant="outlined"
          sx={{ backgroundColor: "#E9E9E9", border: "none" }}
        />
      </div>
    </div>
  );
}
