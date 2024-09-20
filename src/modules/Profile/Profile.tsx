import { MyAnnouncement, ProfileForm } from "./components";

export default function Profile() {
  return (
    <div className="py-10">
      <ProfileForm />
      <MyAnnouncement />
    </div>
  );
}
