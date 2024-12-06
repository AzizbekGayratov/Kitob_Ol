import { useState } from "react";
import { ImagePicker, UpdatingProfileData } from "./components";
import { UpdateProfileProps } from "..";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function UpdateProfileData() {
  const email = window.sessionStorage.getItem("email");
  const phone = window.sessionStorage.getItem("phone");
  const { access_token } = JSON.parse(localStorage.getItem("token") || "");

  const { avatar } = useSelector(
    (state: { project: { profile: any } }) => state.project.profile
  );

  const navigate = useNavigate();

  const [data, setData] = useState<UpdateProfileProps>({
    date_of_birth: "",
    email: email || "",
    first_name: "",
    image_url: avatar,
    last_name: "",
    phone_number: phone || "+998",
  });

  const submit = () => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_REACT_AUTH_URL}/auth/user/update`,
          {
            method: "PUT",
            headers: {
              Authorization: `Bearer ${access_token}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          }
        );

        if (response.ok) {
          window.sessionStorage.clear();
          navigate("/");
        } else {
          throw new Error("Request failed");
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  };

  const reset = () => {
    setData({
      date_of_birth: "",
      email: email || "",
      first_name: "",
      image_url: "",
      last_name: "",
      phone_number: phone || "+998",
    });
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="pt-10 pb-[100px] xl:px-[40px] lg:px-[30px] md:px-[20px] bg-white">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-primary font-semibold text-2xl leading-7">
            Profil ma'lumotlarini to'ldiring
          </h1>
          <button
            className="rounded py-[18px] px-[35px] text-textColor leading-5 border border-[rgba(44, 48, 51, 0.7)]"
            onClick={reset}
          >
            Reset
          </button>
        </div>
        <ImagePicker data={data} setData={setData} />
        <UpdatingProfileData
          data={data}
          setData={setData}
          submit={submit}
          reset={reset}
        />
      </div>
    </div>
  );
}
