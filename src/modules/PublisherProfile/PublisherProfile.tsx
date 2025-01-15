import { useEffect } from "react";
import { MyAnnouncement, ProfileForm } from "./components";

export interface PublisherProfileProps {
  id: string;
  name: string;
  email: string;
  phone_number: string;
  location: {
    city_id: string;
    district_id: string;
  };
  image_url: string;
  type: "publisher" | "shop";
  status: boolean;
}

export default function PublisherProfile() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container">
      <ProfileForm />
      <MyAnnouncement />
    </div>
  );
}
