import { ImageContainer, ProfileInfo } from "./components";
import UpdateProfileBtn from "./components/UpdateProfileBtn";

export default function FormMain() {
  return (
    <div className="pt-10 pb-[100px] xl:px-[173px] lg:px-[100px] md:px-[40px] px-4 bg-white">
      <ImageContainer />
      <ProfileInfo />
      <UpdateProfileBtn />
    </div>
  );
}
