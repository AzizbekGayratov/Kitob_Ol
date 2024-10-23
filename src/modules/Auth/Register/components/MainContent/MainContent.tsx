import LocationSelect from "Components/Common/LocationSelect/LocationSelect";
import {
  RegisterFormContainer,
  SelectInput,
  TextInput,
  Label,
} from "./components";
import Input from "react-phone-number-input/input";
import { useState } from "react";
import { RiEyeCloseLine } from "react-icons/ri";
import { RiEyeLine } from "react-icons/ri";

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
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, type, value } = e.target;

    const inputValue =
      type === "checkbox" ? (e.target as HTMLInputElement).checked : value;

    setData({
      ...data,
      [name]: inputValue,
    });
  };

  return (
    <div className="mt-10">
      <RegisterFormContainer>
        <div>
          <Label htmlFor="name">Brend nomini kiriting</Label>
          <TextInput
            type="text"
            name="name"
            value={data.name}
            placeholder="Ismingizni kiriting"
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <Label htmlFor="email">Email manzilini kiriting</Label>
          <TextInput
            type="text"
            name="email"
            value={data.email}
            placeholder="Email manzilingizni kiriting"
            onChange={handleInputChange}
            required
          />
        </div>
      </RegisterFormContainer>
      <RegisterFormContainer>
        <div>
          <Label htmlFor="phone_number">Telefon raqam*</Label>
          <Input
            name="phone_number"
            id="phone_number"
            className="form_input"
            placeholder="+998 99 999 99 99"
            value={data.phone_number}
            onChange={(value) =>
              setData({ ...data, phone_number: value || "" })
            }
            required
          />
        </div>
        <div>
          <Label htmlFor="p_type">Do'kon/nashriyot</Label>
          <SelectInput
            name="p_type"
            id="p_type"
            value={data.p_type}
            options={[
              { id: "shop", name: "Shop" },
              { id: "publisher", name: "Publisher" },
            ]}
            defaultValue="Do'kon / nashriyot"
            onChange={handleInputChange}
          />
        </div>
      </RegisterFormContainer>
      <RegisterFormContainer>
        <div>
          <Label htmlFor="login">Loginni kiriting</Label>
          <TextInput
            type="text"
            name="login"
            value={data.login}
            placeholder="Loginni kiriting"
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <Label htmlFor="password">Parolni kiriting</Label>
          <div className="flex">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={data.password}
              className="form_input"
              placeholder="Parolni kiriting"
              onChange={handleInputChange}
              required
            />
            <div
              className="-ml-10 mt-[15px] cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <RiEyeCloseLine size={24} />
              ) : (
                <RiEyeLine size={24} />
              )}
            </div>
          </div>
        </div>
      </RegisterFormContainer>
      <div>
        <LocationSelect
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
