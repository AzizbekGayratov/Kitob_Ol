import { MyAnnouncement, ProfileForm } from "./components";

export type ProfileProps = {
  date_of_birth: string;
  email: string;
  first_name: string;
  id: string;
  image_url: string;
  last_name: string;
  phone_number: string | undefined;
  role: "user" | "publisher";
};

export default function Profile() {
  return (
    <div className="py-10">
      <ProfileForm />
      <MyAnnouncement />
    </div>
  );
}
