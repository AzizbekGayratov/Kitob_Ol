import LocationSelect from "Components/Common/LocationSelect/LocationSelect";
import { RegisterFormContainer } from "./components";
import Label from "./components/Label";
import TextInput from "./components/TextInput";

interface DataProps {
  city_id: string;
  district_id: string;
  email: string;
  image_url: string;
  login: string;
  name: string;
  p_type: string;
  password: string;
  phone_number: string;
}
interface MainContentProps {
  data: DataProps;
  setData: React.Dispatch<React.SetStateAction<DataProps>>;
  reset?: string | boolean;
}

export default function MainContent({
  data,
  setData,
  reset,
}: MainContentProps) {
  return (
    <div className="mt-10">
      <RegisterFormContainer>
        <div>
          <Label htmlFor="">Ismingizni kiriting</Label>
          <TextInput />
        </div>
        <div>
          <Label htmlFor="">Email manzilini kiriting</Label>
          <TextInput />
        </div>
      </RegisterFormContainer>
      <div className="mt-10">
        <LocationSelect
          selectedLocation={data}
          setSelectedLocation={(location) => {
            const { city_id, district_id } = location;

            setData({ ...data, city_id, district_id });
          }}
          reset={reset}
          stylesForLabel="font-Inter text-[24px] leading-[29px] inline-block mb-6"
          padding="p-0"
        />
      </div>
    </div>
  );
}
