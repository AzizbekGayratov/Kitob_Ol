import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useState } from "react";
import SliderForPrice from "./components/SliderForPrice";
import LocationSelect from "Components/Common/LocationSelect/LocationSelect";
import { VacancyProps } from "./FilterTypes";
import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "Store/FilterSlice/vacancyFilterSlice";

export default function VacancyFilter() {
  const [data, setData] = useState<VacancyProps>({
    name: "",
    type: "",
    graphic: "",
    who: "",
    work: "",
    city_id: "",
    district_id: "",
    value: [25, 75],
  });
  const vacancyFilter = useSelector((state: any) => state.VacancyFilter);
  const dispatch = useDispatch();

  function submitData() {
    dispatch(
      setSearch({
        ...vacancyFilter,
        vacancy_title: data.name,
        city_id: data.city_id,
        district_id: data.district_id,
        salary_from: data.value[0] * 1000,
        salary_to: data.value[1] * 1000,
        working_types: data.type,
        working_styles: data.graphic,
      })
    );
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
            value={data.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
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
              value={data.type}
              onChange={(e) => setData({ ...data, type: e.target.value })}
            >
              <MenuItem value={"fulltime"}>To'liq ish kuni</MenuItem>
              <MenuItem value={"parttime"}>Ma'lim soatlarda</MenuItem>
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
              value={data.graphic}
              //   label="Kategoriya"
              onChange={(e) => setData({ ...data, graphic: e.target.value })}
            >
              <MenuItem value={"doimiy"}>Doimiy</MenuItem>
              <MenuItem value={"vaqtincha"}>Vaqtincha</MenuItem>
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
              value={data.who}
              onChange={(e) => setData({ ...data, who: e.target.value })}
            >
              <MenuItem value={"Ish beruvchiman"}>Ish beruvchiman</MenuItem>
              <MenuItem value={"Ish izlayapman"}>Ish izlayapman</MenuItem>
            </Select>
          </FormControl>
          <SliderForPrice value={data} setValue={setData as any} />
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
              value={data.work}
              onChange={(e) => setData({ ...data, work: e.target.value })}
            >
              <MenuItem value={"online"}>Online</MenuItem>
              <MenuItem value={"offline"}>Offline</MenuItem>
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
