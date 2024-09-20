import {
  AboutInfoContent,
  TitleBar as AboutInfoTitleBar,
} from "./AboutInfo/index";

export default function AboutInfo() {
  return (
    <div className="bg-white col-span-7">
      <AboutInfoTitleBar />
      <AboutInfoContent />
    </div>
  );
}
