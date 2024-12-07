import { ProfileProps } from "modules/Profile/Profile";
import { useSelector } from "react-redux";


export default function ImageContainer() {
    const profileDataFromRedux = useSelector(
      (state: { project: { profile: ProfileProps } }) => state.project.profile
    );
    const profileData = JSON.parse(
      window.sessionStorage.getItem("profile") || ""
    );
    const profile = profileData || profileDataFromRedux;

  //   avatarka hover bolganda "hover:scale-105 transition-transform" qoshsa boladi
  return (
    <div className="w-[120px] h-[120px] mx-auto overflow-hidden rounded-full cursor-pointer mb-10">
      <img
        src={profile.image_url}
        className="w-full h-full object-cover"
        alt="user avatar"
      />
    </div>
  );
}
