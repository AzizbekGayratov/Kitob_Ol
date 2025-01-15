import { useState } from "react";
import { ImagePicker, UpdateForm } from "./components";
import { useDispatch, useSelector } from "react-redux";
import { setIsProfileUpdating } from "Store/profileSlice/profileSlice";
import { PublisherProfileProps } from "modules/PublisherProfile/PublisherProfile";

export default function UpdatingForm() {
    const profile = useSelector(
      (state: { project: { publisherProfile: PublisherProfileProps } }) =>
        state.project.publisherProfile
    );

  const rawProfileData = window.sessionStorage.getItem("profile");
  const profileData = rawProfileData ? JSON.parse(rawProfileData) : null;
  
  const dispatch = useDispatch();
  const rawToken = localStorage.getItem("publisher_token");
  const access_token = rawToken ? JSON.parse(rawToken).access_token : "";

  const [data, setData] = useState<PublisherProfileProps>(profileData || profile);

  const submit = () => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_REACT_API_URL}/publishers/update`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${access_token}`,
            },
            body: JSON.stringify(data),
          }
        );

        if (response.ok) {
          dispatch(setIsProfileUpdating(false));
          window.sessionStorage.setItem("profile", JSON.stringify(data));
        } else {
          throw new Error("Request failed");
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  };

  const cancelSubmit = () => {
    dispatch(setIsProfileUpdating(false));
    setData(profile);
  };
  return (
    <div className="pt-10 pb-[100px] xl:px-[173px] lg:px-[100px] md:px-[40px] px-4 bg-white">
      <ImagePicker data={data} setData={setData} />
      <UpdateForm
        data={data}
        setData={setData}
        submit={submit}
        cancelSubmit={cancelSubmit}
      />
    </div>
  );
}
